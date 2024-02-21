let employees = [
  {
    id: 1,
    name: "Baktar",
    surname: "Asadov",
    age: 21,
    job: "Senior Java developer",
    salary: "8000$",
    address: {
      country: "Turkish",
      city: "Istanbul",
      street: "Ashiq Elesger",
    },
    contact: {
      phoneNumber: "051-711-27-57",
      email: "baktarasadov@gmail.com",
    },
  },
  {
    id: 1,
    name: "Tangiz",
    surname: "salamov",
    age: 24,
    job: "Senior Python developer",
    salary: "7999$",
    address: {
      country: "Turkish",
      city: "Izmir",
      street: "Ashiq Elesger 6",
    },
    contact: {
      phoneNumber: "051-211-22-11",
      email: "tangoiz56@gmail.com",
    },
  },
];

// saveEmployee(newEmployee)

const saveEmployee = (newEmployee) => {
  let findEmployee = employees.find(
    (employee) => employee.id !== newEmployee.id
  );
  if (findEmployee) {
    employees.push(newEmployee);
    return {
      success: true,
      messagge: "add newEmployee",
      data: employees,
    };
  } else {
    return {
      success: false,
      messagge: "Employee found",
    };
  }
};

let newEmp = {
  id: 5,
  name: "Tangissssz",
  surname: "salamov",
  age: 24,
  job: "Senior Python developer",
  salary: "7999$",
  address: {
    country: "Turkish",
    city: "Izmir",
    street: "Ashiq Elesger 6",
  },
  contact: {
    phoneNumber: "051-211-22-11",
    email: "tangoiz56@gmail.com",
  },
};

// console.log(saveEmployee(newEmp));

// getAllEmployees
const getAllEmployees = () => {
  if (!employees.length) {
    return {
      success: false,
      messagge: "Employee not found !",
    };
  }
  return {
    success: true,
    messagge: "Employee found !",
    data: employees,
  };
};

const test = getAllEmployees();

// console.log(test);

// deleteOneEmployee(id)

const deleteOneEmployee = (id) => {
  if (employees.id == 2) {
    delete employees;
  }
  if (!employees.length) {
    return {
      success: false,
      messagge: "Employee not found !",
    };
  }
  return {
    success: true,
    messagge: "Employee successful !",
    data: employees,
  };
};

const test2 = deleteOneEmployee();
// console.log(test2);

// getOneEmployee(id)

const getOneEmployee = (id) => {
  let findEmployee = employees.find((employee) => employee.id == id);

  if (!findEmployee) {
    return {
      success: false,
      messagge: "employee no found",
    };
  } else {
    return {
      success: true,
      messagge: "Employee found",
      data: findEmployee,
    };
  }
};

// console.log(getOneEmployee(1));

// updateOneEmployeePUT(id,updateEmployee)

const updateOneEmployeePUT = (id, updateEmployee) => {
  const findEmployeeIndex = employees.findIndex((emp) => emp.id == id);
  if (findEmployeeIndex == -1) {
    return {
      success: false,
      message: "Employee not found!",
    };
  }
  employees[findEmployeeIndex] = {
    ...employees[findEmployeeIndex],
    ...updateEmployee,
  };
  return {
    success: true,
    message: "Employee updated successfully",
    data: employees[findEmployeeIndex],
  };
};

// console.log(
//   updateOneEmployeePUT(1, {
//     name: "Serxan ",
//   })
// );

// console.log(employees);

// updateOneEmployeePATCH(id,updateEmployee)

const updateOneEmployeePATCH = (id, updateEmployee) => {
  const findEmployeeIndex = employees.findIndex((emp) => emp.id == id);
  if (findEmployeeIndex == -1) {
    return {
      success: false,
      message: "Employee not found!",
    };
  }
  const findData = employees[findEmployeeIndex];
  const update = {
    ...findData,
    ...updateEmployee,
  };

  employees[findEmployeeIndex] = update;

  return {
    success: true,
    message: "Employee updated successfully",
    data: employees[findEmployeeIndex],
  };
};

// console.log(
//   updateOneEmployeePATCH(1, {
//     name: "Serxan ",
//     age: 250,
//   })
// );