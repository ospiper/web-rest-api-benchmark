FROM keymetrics/pm2:latest

COPY ./* ./

# Install app dependencies
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run build
# RUN pm2 install pm2-webshell
# RUN pm2 conf pm2-webshell:username admin
# RUN pm2 conf pm2-webshell:password admin

# Show current folder structure in logs
# RUN ls -al -R
RUN ls -lh
EXPOSE 3000

CMD [ "pm2-runtime", "start", "dist/main.js", "-i", "max" ]
