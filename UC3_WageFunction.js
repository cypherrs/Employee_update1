function checkAttendance() {
    const isPresent = Math.random() < 0.5;
    console.log(isPresent ? "Employee is Present" : "Employee is Absent");
    return isPresent;
}

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

// Connected:
if (checkAttendance()) {
    const empCheck = Math.floor(Math.random() * 3);
    console.log(`Employee Daily Wage: $${calculateWage(empCheck)}`);
} else {
    console.log("No wage — Employee absent.");
}

// calculateWage();