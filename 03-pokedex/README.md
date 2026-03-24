<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```

3. Tener Nest CLI instaldo globalmente
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrarlo a __.env__

6. LLenar las variables de entorno del archivo __.env__

7. Ejecutar la aplicación en dev:
```
yarn start:dev
```

8. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```


## Stack usado
* MongoDB
* NestJS
* Docker

# Production build
1. Crear el archivo __.env.prod__ con las variables de entorno para producción
2. Llenar las variables de entorno del archivo __.env.prod__
3. Crear la nueva imagen de producción
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build -d
```