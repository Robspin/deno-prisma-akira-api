FROM denoland/deno:1.30.3

WORKDIR /app

COPY . .

RUN deno cache --lock=deno.lock --lock-write main.ts

EXPOSE 3000
