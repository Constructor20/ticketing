FROM node:22-alpine

# CA du proxy d'entreprise (sinon npm = self-signed certificate).
# Node/npm la lisent directement (pas d'update-ca-certificates sur alpine).
COPY docker/netskope-ca.crt /usr/local/share/ca-certificates/netskope-ca.crt
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/netskope-ca.crt

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]