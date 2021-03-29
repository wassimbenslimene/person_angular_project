FROM nginx:1.18.0-alpine
COPY /dist/frontend /usr/share/nginx/html

