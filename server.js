const {prompt} = require ('inquirer');
// const prompt = createPromptModule();
const mysql = require('mysql2');
// import 'console.table';

const db = mysql.createConnection({
  user: "root",
  database: "employee_db",
});

db.connect((err) => {
  if (err) throw err
});

const selectAll = async (table, display) => {
  const results = await db.promise().query('SELECT * FROM ' + table);
  if (display) {
    console.table(results[0]);
    return init();
  }
  return results;
};

const insert = (table, data) => {
  db.query('INSERT INTO ?? SET ?', [table, data], (err) => {
    if (err) return console.error(err);
    console.log('\nSuccesfully created employee!\n');
    init();
  });
};

const selectAllNameAndValue = (table, name, value) => {
  return db.promise().query('SELECT ?? AS name, ?? AS value FROM ??', [name, value, table]);
};

const selectAllEmployeeDetails = async () => {
  const statement = `
SELECT
  employee.id,
  employee.first_name,
  employee.last_name,
  role.title,
  role.salary,
  CONCAT(
    manager.first_name,
    ' ',
    manager.last_name
  ) AS manager
FROM employee
JOIN role
ON employee.role_id = role.id
JOIN employee AS manager
ON employee.manager_id = manager.id
  `
    const [employees] = await db.promise().query(statement);
    console.table(employees);
  };

const addEmployee = async () => {
  const [roles] = await selectAllNameAndValue('role', 'title', 'id');
  const [managers] = await selectAllNameAndValue('employee', 'last_name', 'id');
  prompt([
    {
      name: 'first_name',
      message: 'Enter the employee\'s first name.',
    },
    {
      name: 'last_name',
      message: 'Enter the employee\'s last name.',
    },
    {
      type: 'rawlist',
      name: 'role_id',
      message: 'Choose a role for this employee.',
      choices: roles,
    },
    {
      type: 'rawlist',
      name: 'manager_id',
      message: 'Choose a manager for this employee.',
      choices: managers,
    }
  ])
  .then((answers) => {
    insert('employee', answers);
  });
};

const chooseOption = (type) => {
  switch (type) {
    case 'View All Employees': {
      selectAllEmployeeDetails();
      break;
    }
    case 'View All Departments': {
      selectAll('department', true);
      break;
    }
    case 'View All Roles': {
      selectAll('role', true);
      break;
    }
    case 'Add Employee': {
      addEmployee();
      break;
    }
  }
};

const init = () => {
  prompt({
    type: 'rawlist',
    message: 'Choose one of the following:',
    choices: [
      'View All Employees',
      'View All Departments',
      'View All Roles',
      'Add Employee',
    ],
    name: 'type',
  })
    .then((answers) => {
      chooseOption(answers.type);
    });
};

init();