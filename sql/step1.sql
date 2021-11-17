CREATE DATABASE videotifly;
USE videotifly;

CREATE TABLE movies (
  id INT AUTO_INCREMENT NOT NUll,
  title VARCHAR(250) NOT NULL,
  synopsis LONGTEXT,
  genre VARCHAR(100),
  year INT,
  duration INT,
  PRIMARY KEY(id)
) ENGINE=InnoDB CHARSET=utf8;