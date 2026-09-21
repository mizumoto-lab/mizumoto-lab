# start with official ruby docker image as base
FROM ruby:3.3

# set working directory within container
WORKDIR /usr/src/app

# pull in ruby (jekyll) and python (cite process) package info
COPY Gemfile Gemfile.lock _cite/requirements.txt ./

# install ruby packages
RUN bundle install

# install python
RUN apt update && apt install -y python3 python3-pip python3-venv

RUN python3 -m venv /opt/venv

ENV PATH="/opt/venv/bin:$PATH"

RUN pip install --no-cache-dir --upgrade --requirement requirements.txt

# install python package for listening for file changes
RUN pip install "watchdog[watchmedo]==3.0.0"

# ports used by jekyll
EXPOSE 4000
EXPOSE 35729

# run jekyll and cite process
COPY .docker/entrypoint.sh /var
CMD [ "/var/entrypoint.sh" ]
