-- Active: 1753271320493@@127.0.0.1@3307@company_db
CREATE DATABASE company_db;

USE company_db;

CREATE Table employees(
  employee_id INT PRIMARY KEY,
  name VARCHAR(50),
  department_id INT
);

CREATE Table departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(50)
)

SELECT * FROM employees;
SELECT * FROM departments;

INSERT INTO employees (employee_id, name, department_id) VALUES
(1,  'Alice',     1),   -- HR
(2,  'Bob',       2),   -- IT
(3,  'Charlie',   3),   -- Finance
(4,  'David',     NULL),-- No department
(5,  'Eve',       1),   -- HR
(6,  'Frank',     2),   -- IT
(7,  'Grace',     4),   -- Marketing
(8,  'Hannah',    2),   -- IT
(9,  'Ian',       3),   -- Finance
(10, 'Jack',      NULL),-- No department
(11, 'Karen',     1),   -- HR
(12, 'Leo',       4),   -- Marketing
(13, 'Mia',       NULL),-- No department
(14, 'Nina',      3),   -- Finance
(15, 'Oscar',     2);   -- IT

INSERT INTO departments VALUES
(1, 'HR'),
(2, 'IT'),
(3, 'Finance'),
(4, 'Marketing'); 

INSERT INTO departments VALUES
(5, "Support");

DELETE FROM departments WHERE department_id = 5;

-- * Inner Join
SELECT employees.name, departments.department_name 
FROM employees 
INNER JOIN departments 
ON employees.department_id = departments.department_id;

-- * Left Join
SELECT employees.name, departments.department_name 
FROM employees 
LEFT JOIN departments 
ON employees.department_id = departments.department_id;

-- * Right Join
SELECT employees.name, departments.department_name 
FROM employees 
RIGHT JOIN departments 
ON employees.department_id = departments.department_id;

SELECT * FROM employees;
SELECT * FROM departments;

SELECT e1.name as employee1, e2.name as emplyee2, d.department_name
FROM employees e1
JOIN employees e2 ON e1.department_id = e2.department_id AND e1.employee_id != e2.employee_id
JOIN departments d on  e1.department_id = d.department_id;

SELECT name as entity from employees
UNION
SELECT department_name FROM departments;

SELECT name, department_id FROM employees
WHERE department_id = 1
UNION
SELECT department_name, department_id FROM departments
WHERE department_id != 1;

-- Sub-queries
SELECT name from employees WHERE department_id = (
  SELECT department_id FROM employees WHERE name = "Bob"
);

SELECT name FROM employees
WHERE department_id IN (
  SELECT department_id FROM departments 
  WHERE department_name IN ("IT", "Finanace")
);

DELIMITER $$

CREATE PROCEDURE GetAllEmployees()
BEGIN
  SELECT * FROM employees;
END $$

DELIMITER ;

CALL GetAllEmployees();

DELIMITER $$

CREATE PROCEDURE GetEmployeesByDept(
  IN deptId INT
)

BEGIN
SELECT name
  FROM employees
  WHERE department_id = deptId;
  
END $$

DELIMITER;

CALL GetEmployeesByDept(2);

DELIMITER $$

CREATE PROCEDURE CountEmployeesByDept(
  IN deptId INT,
  OUT empCount INT
)

BEGIN
SELECT name
  FROM employees
  WHERE department_id = deptId;
  
END $$

DELIMITER;

CALL CountEmployeesByDept(2, @sum);
SELECT @sum;