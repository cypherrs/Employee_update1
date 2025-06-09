//uc1 : Attendance check
function checkAttendance() {
    const isPresent = Math.random() < 0.5;
    console.log(isPresent ? "Employee is Present" : "Employee is Absent");
    return isPresent;
}

// //uc2 : wage calculation
// function calculateWage(empCheck) {
//     const wagePerHour = 20;
//     const empHrs = empCheck === 1 ? 4 : empCheck === 2 ? 8 : 0;
//     return empHrs * wagePerHour;
// }

//uc3: wage function
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case 1: return 4;
        case 2: return 8;
        default: return 0;
    }
}

function calculateWage(empCheck) {
    const wagePerHour = 20;
    return getWorkingHours(empCheck) * wagePerHour;
}


// first check attendance and calculate the wage
if (checkAttendance()) {
    const empCheck = Math.floor(Math.random() * 3);
    console.log(`Employee Daily Wage: $${calculateWage(empCheck)}`);
} else {
    console.log("No wage — Employee absent.");
}
// calculateWage();