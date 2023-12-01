// Write your solution in this file!
const employee = {
    name: "Khanh",
    streetAddress: "123 abc"
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj}
    newObj[key] = value
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(employee, key){
    const newDelete = {...employee}
    delete newDelete[key]
    return newDelete
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}