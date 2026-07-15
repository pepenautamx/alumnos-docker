-- 1. Crear tabla de alumnos
CREATE TABLE IF NOT EXISTS alumnos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    matematicas NUMERIC(3, 1),
    espanol NUMERIC(3, 1),
    historia NUMERIC(3, 1)
);

-- 2. Insertar registros iniciales (solo si la tabla está vacía)
INSERT INTO alumnos (nombre, apellidos, matematicas, espanol, historia)
SELECT 'Sofía', 'García López', 9.5, 8.8, 10.0 WHERE NOT EXISTS (SELECT 1 FROM alumnos WHERE nombre = 'Sofía');

INSERT INTO alumnos (nombre, apellidos, matematicas, espanol, historia)
SELECT 'Alejandro', 'Martínez Ruiz', 8.0, 9.2, 7.5 WHERE NOT EXISTS (SELECT 1 FROM alumnos WHERE nombre = 'Alejandro');

INSERT INTO alumnos (nombre, apellidos, matematicas, espanol, historia)
SELECT 'Valeria', 'Hernández Gómez', 10.0, 9.5, 9.8 WHERE NOT EXISTS (SELECT 1 FROM alumnos WHERE nombre = 'Valeria');

INSERT INTO alumnos (nombre, apellidos, matematicas, espanol, historia)
SELECT 'Mateo', 'Rodríguez Sánchez', 6.5, 7.0, 8.2 WHERE NOT EXISTS (SELECT 1 FROM alumnos WHERE nombre = 'Mateo');

INSERT INTO alumnos (nombre, apellidos, matematicas, espanol, historia)
SELECT 'Camila', 'Pérez Díaz', 8.7, 8.5, 9.0 WHERE NOT EXISTS (SELECT 1 FROM alumnos WHERE nombre = 'Camila');
