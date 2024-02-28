--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists items;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE projects(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) not null,
    designer VARCHAR(255) not null,
    yarn VARCHAR(255) not null,
    needles VARCHAR(255) not null,
    start VARCHAR(255) not null,
    end VARCHAR(255),
    complete BOOLEAN, PRIMARY KEY (id)
    );
