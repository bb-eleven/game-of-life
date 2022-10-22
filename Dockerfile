FROM node:16 AS build

COPY package*.json .

RUN npm ci --ignore-scripts

COPY . .
RUN npm run build

FROM nginx:1.23.2-alpine
COPY --from=build /build /usr/share/nginx/html
