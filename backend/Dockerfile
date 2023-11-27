FROM python:3.8-alpine

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /app/backend

COPY requirements.txt /app/backend/

# Build psycopg2-binary from source -- add required required dependencies
RUN apk add --no-cache geos gdal 
# Install GDAL and other necessary dependencies
RUN apk add --virtual .build-deps \
        gcc musl-dev python3-dev libffi-dev openssl-dev \
        gdal-dev geos-dev proj-dev \
    && pip install --no-cache-dir -r requirements.txt \
    && apk --purge del .build-deps

COPY ./entrypoint.sh /entrypoint/entrypoint.sh
RUN chmod +x /entrypoint/entrypoint.sh

COPY . /app/backend/

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]
