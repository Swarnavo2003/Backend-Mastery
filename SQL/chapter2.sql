-- Active: 1753271320493@@127.0.0.1@3307@startersql

create database startersql

use startersql

create table users (
  id int auto_increment primary key,
  name varchar(100) not NULL,
  email varchar(100) UNIQUE not null,
  gender ENUM("Male", "Female", "Other"),
  date_of_birth DATE,
  salary decimal(10, 2),
  created_at timestamp default current_timestamp
)

-- Insert data into the table
insert into users (name, email, gender, date_of_birth, salary, created_at) values ("Swarnavo","swarnavo@example.con","Male","1995-05-01",65000.00, current_timestamp);

INSERT INTO users (name, email, gender, date_of_birth, salary) VALUES
('Debajit', 'debajit@example.com', 'Female', '1993-03-03', null);
-- ('Aarav', 'aarav@example.com', 'Male', '1995-05-14', 65000.00),
-- ('Ananya', 'ananya@example.com', 'Female', '1990-11-23', 72000.00),
-- ('Raj', 'raj@example.com', 'Male', '1988-02-17', 58000.00),
-- ('Sneha', 'sneha@example.com', 'Female', '2000-08-09', 50000.00),
-- ('Farhan', 'farhan@example.com', 'Male', '1993-12-30', 61000.00),
-- ('Priyanka', 'priyanka@example.com', 'Female', '1985-07-12', 84000.00),
-- ('Aisha', 'aisha@example.com', 'Female', '1997-03-25', 56000.00),
-- ('Aditya', 'aditya@example.com', 'Male', '1992-06-17', 69000.00),
-- ('Meera', 'meera@example.com', 'Female', '1989-09-05', 77000.00),
-- ('Ishaan', 'ishaan@example.com', 'Male', '2001-10-02', 45000.00),
-- ('Tanvi', 'tanvi@example.com', 'Female', '1994-04-18', 62000.00),
-- ('Rohan', 'rohan@example.com', 'Male', '1986-12-01', 75000.00),
-- ('Zoya', 'zoya@example.com', 'Female', '1998-01-15', 54000.00),
-- ('Karan', 'karan@example.com', 'Male', '1990-08-22', 68000.00),
-- ('Nikita', 'nikita@example.com', 'Female', '1987-03-10', 71000.00),
-- ('Manav', 'manav@example.com', 'Male', '1996-11-29', 61000.00),
-- ('Divya', 'divya@example.com', 'Female', '1991-02-28', 57000.00),
-- ('Harshit', 'harshit@example.com', 'Male', '1993-09-09', 65000.00),
-- ('Ritika', 'ritika@example.com', 'Female', '1999-05-05', 52000.00),
-- ('Imran', 'imran@example.com', 'Male', '1995-07-30', 63000.00),
-- ('Juhi', 'juhi@example.com', 'Female', '1992-10-14', 59000.00),
-- ('Tushar', 'tushar@example.com', 'Male', '1990-01-08', 73000.00),
-- ('Lata', 'lata@example.com', 'Female', '1984-11-11', 78000.00),
-- ('Yash', 'yash@example.com', 'Male', '1997-06-06', 64000.00),
-- ('Fatima', 'fatima@example.com', 'Female', '1993-03-03', 55000.00);


select * from users

select name, gender, salary from users

SELECT name, salary from users WHERE salary IS NOT NULL

SELECT name, salary from users WHERE salary IS NULL

SELECT name, salary from users WHERE salary BETWEEN 60000 AND 70000

SELECT name, salary from users WHERE salary BETWEEN 60000 AND 70000

SELECT name, salary from users WHERE salary > 70000

SELECT name, salary from users WHERE salary < 60000

SELECT name, date_of_birth from users WHERE date_of_birth BETWEEN "1990-01-01" AND "1994-12-31"

-- Find all male and female users (exclusing others)
SELECT name, gender from users WHERE gender IN("Male","Female","Other")

-- find users with specific salary values
SELECT name, salary from users WHERE salary in (50000, 55000, 60000)

-- * combining condition (OR, AND)
-- user with salary > 70k or born before 1990
SELECT name, salary, date_of_birth FROM users WHERE salary > 70000 OR date_of_birth < "1990-01-01"

SELECT name, salary FROM users WHERE gender="Female" AND salary > 60000

-- * order by
select name, salary from users ORDER BY salary DESC;

select name, salary, gender from users ORDER BY gender DESC, salary ASC;

SELECT name, gender from users WHERE name LIKE "A%"

SELECT name, email from users WHERE email LIKE "%example%"

-- Aggregate functions
SELECT COUNT(*) FROM users;

SELECT AVG(salary) from users;

SELECT MAX(salary) from users;

SELECT MIN(salary) from users;

SELECT COUNT(gender) from users WHERE gender="Male";

SELECT SUM(salary) as total_salary from users WHERE gender = "Female"

SELECT * from users

-- * limit
-- top 5 highest paid users
SELECT name,salary,gender from users ORDER BY salary AND gender DESC LIMIT 5

-- get 3 youngest users
SELECT name, date_of_birth from users ORDER BY date_of_birth DESC LIMIT 3;

-- * update

UPDATE users set gender="Other" WHERE name="Debajit"

-- increase salary of all female by 5000
UPDATE users SET salary = salary + 115000 WHERE gender="Male";
SELECT * FROM users;

UPDATE users set email = "newemail@example.com" WHERE name = "Debajit";

DELETE FROM users WHERE salary < 50000;

DELETE FROM users WHERE email="";

SELECT salary, gender FROM users WHERE salary > 70000 ORDER BY salary DESC; 

SELECT AVG(salary) as avg_salary FROM users where date_of_birth < "1995-01-01";

ALTER TABLE users ADD mobile_no BIGINT;
ALTER TABLE users DROP mobile_no;