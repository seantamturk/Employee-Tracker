INSERT INTO department (name) VALUES
    ('Research'),
    ('Development'),
    ('Marketing'),
    ('Human Resources');

INSERT INTO role (title, salary, department_id) VALUES
    ('Researcher', 95000, 1),
    ('Software Engineer I', 125000, 2),
    ('Data Scientist', 140000, 1),
    ('Marketing Specialist', 90000, 3),
    ('HR Manager', 120000, 4),
    ('Computer Vision Engineer', 160000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Nina', 'Wang', 1, null),
    ('Oliver', 'Garcia', 2, 1),
    ('Victoria', 'Nguyen', 3, 1),
    ('Max', 'Ramirez', 4, null),
    ('Emily', 'Li', 2, 1),
    ('Noah', 'Patel', 1, null),
    ('Sophia', 'Kim', 2, 1),
    ('Ethan', 'Lopez', 3, 1),
    ('Ava', 'Gonzalez', 4, null),
    ('Mia', 'Chen', 5, null),
    ('Elijah', 'Baker', 6, null),
    ('Lily', 'Foster', 6, null),
    ('William', 'Ng', 2, 1),
    ('Isabella', 'Singh', 3, 1),
    ('James', 'Chang', 2, 1);







