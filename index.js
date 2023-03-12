// Write your solution in this file!
const employee = { 
    name: "Cheplengin",
    streetAddress: "Ongata Rongai"
}

function updateEmployeeWithKeyAndValue( employee, key, value) {

    const newEmployee =  { ...employee };

    newEmployee[ key] = value;

    return newEmployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[ key] = value;

    return employee;
}


function deleteFromEmployeeByKey(employee, key) { 

    delete {...employee[key]};

    return {...employee[key]};

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    const propToBeDeleted = key;

    delete employee[ propToBeDeleted];

    return employee;

}

