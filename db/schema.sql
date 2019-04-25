CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(3) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN NOT NULL,

    PRIMARY KEY (id)
);