# Etapa 1: Compilación de la aplicación de Angular
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Etapa 2: Servidor Web Nginx ligero para producción
FROM nginx:alpine
# Copiar los archivos estáticos de Angular al directorio por defecto de Nginx
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
