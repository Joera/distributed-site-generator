FROM fluencelabs/nox:latest

WORKDIR /usr/bin/ 

COPY ./bin/car-utils .
RUN chmod +x car-utils
WORKDIR / 