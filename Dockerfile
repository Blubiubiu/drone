FROM nginx:1.9
# ADD nginx.conf /etc/nginx/
# ADD default.conf /etc/nginx/conf.d/
WORKDIR /usr/share/nginx/html
# RUN rm -rf *
# RUN mkdir gray
# COPY dist gray
# COPY dist ./
EXPOSE 9905
CMD ["nginx", "-g", "daemon off;"]