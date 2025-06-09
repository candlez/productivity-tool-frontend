FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG ENV=production
RUN npm run build -- --configuration=$ENV

FROM nginx:stable

RUN rm -f /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/productivity-tool-frontend/browser /usr/share/nginx/html

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
