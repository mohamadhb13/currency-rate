FROM python:3.12.0

ENV PYTHONUNBUFFERED 1

RUN mkdir /backend
WORKDIR /backend
COPY . /backend
ADD requirements.txt /backend
RUN pip install -r requirements.txt
