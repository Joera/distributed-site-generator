FROM fluencelabs/nox:0.18.1

WORKDIR /usr/bin/ 

COPY ./bin/car-utils .
RUN chmod +x car-utils
WORKDIR / 