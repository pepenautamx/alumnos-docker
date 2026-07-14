# 1. Imagen base oficial de Node.js (versión ligera basada en Alpine)
FROM node:20-alpine

# 2. Crear y definir el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3. Copiar los archivos de dependencias primero para aprovechar la caché de capas de Docker
COPY package*.json ./

# 4. Instalar las dependencias de Node
RUN npm install

# 5. Copiar el resto del código fuente del proyecto al contenedor
COPY . .

# 6. Exponer el puerto en el que corre nuestra app
EXPOSE 4000

# 7. Comando definitivo para arrancar la aplicación cuando el contenedor encienda
CMD ["node", "index.js"]