INSERT INTO department (id, name) VALUES
    (2, 'Research'),
    (3, 'Development'),
    (4, 'Marketing'),
    (5, 'Human Resources');

INSERT INTO role (id, title, salary, department_id) VALUES
    (1, 'Researcher', 95000, 1),
    (2, 'Software Engineer I', 125000, 2),
    (3, 'Data Scientist', 140000, 1),
    (4, 'Marketing Specialist', 90000, 3),
    (5, 'HR Manager', 120000, 4),
    (6, 'Computer Vision Engineer', 160000, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
    (1, 'Nina', 'Wang', 1, null),
    (2, 'Oliver', 'Garcia', 2, 1),
    (3, 'Victoria', 'Nguyen', 3, 1),
    (4, 'Max', 'Ramirez', 4, null),
    (5, 'Emily', 'Li', 2, 1),
    (6, 'Noah', 'Patel', 1, null),
    (7, 'Sophia', 'Kim', 2, 1),
    (8, 'Ethan', 'Lopez', 3, 1),
    (9, 'Ava', 'Gonzalez', 4, null),
    (10, 'Mia', 'Chen', 5, null),
    (11, 'Elijah', 'Baker', 6, null),
    (12, 'Lily', 'Foster', 6, null),
    (13, 'William', 'Ng', 2, 1),
    (14, 'Isabella', 'Singh', 3, 1),
    (15, 'James', 'Chang', 2, 1);
