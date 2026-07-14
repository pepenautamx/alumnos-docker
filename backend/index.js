const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { Pool } = require('pg');
require('dotenv').config();

// 1. Configuración de la conexión a PostgreSQL
// Nota que el HOST por defecto usará una variable de entorno. Más adelante verás por qué.
const pool = new Pool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER || 'pepe_admin',
  password: process.env.DB_PASSWORD || 'supersecretpassword',
  database: process.env.DB_DATABASE || 'escuela_db',
});

// 2. Definición de Tipos en GraphQL (Schema)
const typeDefs = `#graphql
  type Alumno {
    id: ID!
    nombre: String!
    apellidos: String!
    matematicas: Float!
    espanol: Float!
    historia: Float!
  }

  type Query {
    alumnos: [Alumno]
  }
`;

// 3. Resolvers de GraphQL (La lógica que va a la DB)
const resolvers = {
  Query: {
    alumnos: async () => {
      try {
        const res = await pool.query('SELECT * FROM alumnos ORDER BY id ASC');
        return res.rows;
      } catch (err) {
        console.error('Error al consultar alumnos:', err);
        throw new Error('No se pudieron obtener los alumnos');
      }
    },
  },
};

// 4. Inicializar el servidor Apollo con soporte de CORS explícito
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    // Esto asegura que cualquier puerto local (como el 4200 de tu Angular) pueda leer los datos
    cors: {
      origin: '*', 
      credentials: true,
    },
  });
  console.log(`🚀 Servidor backend corriendo en: ${url}`);
}

startServer();