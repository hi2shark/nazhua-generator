FROM nginx:1.26.1

COPY ./dist /home/wwwroot/html
COPY ./nginx-default.conf.template /etc/nginx/templates/default.conf.template
