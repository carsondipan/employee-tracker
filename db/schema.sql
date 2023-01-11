DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE IF NOT EXISTS employee_db;

USE employee_db;

CREATE TABLE department (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL
);

CREATE TABLE employee ();