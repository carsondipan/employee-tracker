use employee_db;


INSERT INTO department (name)
    VALUES
    ('ENGINEERING'),
    ('MARKETING'),
    ('HUMAN RESOURCES'),
    ('FINANCES');

INSERT INTO role (title, salary, department_id)
    VALUES
    ('Lead Engineer' , 100000, 1),
    ('Junior Engineer',  100000, 1),
    ('Team Manager/Moral Support',  100000, 1),
    ('Head Salesman', 100000, 1),
    ('Salesman',  100000, 1),
    ('Marketing Manager',  100000, 1),
    ('HR Head',  100000, 1),
    ('HR Rep',  100000, 1),
    ('CFO',  100000, 1),
    ('Accountant',  100000, 1),
    ('Trash Man',  100000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Sallah', 'Shabati', 12, 1),
('Henry', 'Jones Jr.',  12, 1 ),
('Henry', 'Jones senior',  12, 1),
('Donnie', 'Azof',  12, 1),
('Chester', 'Ming',  12, 1),
('Jordan', 'Belfort',  12, 1),
('Gerald', 'Lambeau',  12, 1),
('Sean', 'Maguire',  12, 1),
('Warren', 'Buffet',  12, 1),
('Alex', 'Mason',  12, 1),
('Elon', 'Musk',  12, 1);