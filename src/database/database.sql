-- \l ---> listar base de datos
-- \c nombreBD ---> moverse a la base de datos
-- \dt ---> listar tablas

CREATE DATABASE firstapi;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email  TEXT
);

INSERT INTO users(name, email) VALUES ('kevin', 'marquezkrodriguez24@gmail.com');
INSERT INTO users(name, email) VALUES ('alberto', 'alberto17@gmail.com');