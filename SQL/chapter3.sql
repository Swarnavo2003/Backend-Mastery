-- Active: 1753271320493@@127.0.0.1@3307@techdb
CREATE DATABASE techdb;

USE techdb;

CREATE TABLE tech (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  release_year INT check(release_year >= 1990),
  website VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO tech(name, category, release_year, website) VALUES ("React","Frontend",2013, "https://reactjs.org");

INSERT INTO tech(name, category, release_year, website) VALUES 
("Node.js","Backend",2009, "https://nodejs.org"),
("MySQL","Database",1995, "https://mysql.com");

SELECT *  FROM tech;

CREATE table frameworks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tech_id INT,
  framework_name VARCHAR(50) NOT NULL,
  version VARCHAR(10) DEFAULT "1.0",

  constraint fk_tech FOREIGN KEY(tech_id)
      REFERENCES tech(id) 
      ON DELETE CASCADE 
      ON UPDATE CASCADE
)

SELECT *  FROM frameworks;

INSERT INTO frameworks(tech_id, framework_name, version) VALUES
(1, "Next.js", "15.0"),
(2, "Express.js", "5.0"),
(3, "InnoDB", "1.0");

DELETE from tech WHERE id = 3;



SET AUTOCOMMIT = 0;

SELECT * FROM tech;

-- COMMIT

INSERT INTO tech(name, category, release_year, website) VALUES 
("Vue.js", "Frontend", 2014, "https://vuejs.org");

INSERT INTO tech(name, category, release_year, website) VALUES 
("Django", "Backend", 2005, "https://www.djangoproject.com");

--- if everything is correct, then commit the changes
COMMIT;

DELETE FROM tech WHERE name = "Vue.js";

ROLLBACK;


CREATE TABLE persons(
  person_id INT PRIMARY KEY AUTO_INCREMENT,
  last_name VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  age INT CHECK(age >= 0)
);

INSERT INTO persons(last_name, first_name, age) VALUES 
("Doe", "John", 30),
("Smith", "Jane", 25),
("Brown", "Charlie", 40);

SELECT * FROM persons;

CREATE TABLE orders(
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  order_number VARCHAR(20) NOT NULL UNIQUE,
  person_id INT,
  
  constraint fk_person FOREIGN KEY(person_id)
      REFERENCES persons(person_id) 
      ON DELETE CASCADE 
      ON UPDATE CASCADE
);

INSERT INTO orders(order_number, person_id) VALUES 
("ORD001", 1),
("ORD002", 1),
("ORD003", 1),
("ORD004", 2),
("ORD005", 3),
("ORD006", 3);

SELECT * FROM orders;

DROP TABLE orders;