FROM php:8.3-apache

RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    libzip-dev \
    && docker-php-ext-install pdo pdo_mysql mysqli zip

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

RUN a2enmod rewrite

# Tout ticketing/ est monté dans /var/www/html, mais Apache sert src/
ENV APACHE_DOCUMENT_ROOT=/var/www/html/src
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

WORKDIR /var/www/html

COPY . .

# CA du proxy d'entreprise (Netskope) : sans lui, TLS/proxy = "self-signed certificate"
# et composer/packagist sont injoignables depuis l'image.
COPY docker/netskope-ca.crt /usr/local/share/ca-certificates/netskope-ca.crt
RUN update-ca-certificates \
 && git config --global --add safe.directory /var/www/html \
 && composer install --no-interaction --prefer-dist --optimize-autoloader

EXPOSE 80