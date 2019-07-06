FROM node:alpine

RUN apk add --update \
      # certbot
  #     python \
  #     python-dev \
  #     py-pip \
  #     build-base \
  #     augeas \
  #     libffi-dev \
  #     libffi \
  # && pip install virtualenv \cd 
  # && rm -rf /var/cache/apk/* \
  # && virtualenv /home/node/mypython \
  # && source /home/node/mypython/bin/activate

# RUN wget https://dl.eff.org/certbot-auto
# RUN mv certbot-auto /usr/local/bin/certbot-auto
# RUN chmod 0755 /usr/local/bin/certbot-auto

RUN mkdir /server
WORKDIR /server
COPY package.json .
COPY server.js .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm", "start"]