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

// UC4 — connected monthly wage
function calculateMonthlyWage() {
    let totalHours = 0;
    const wagePerHour = 20;

    for (let day = 1; day <= 20; day++) {
        if (checkAttendance()) {
            const empCheck = Math.floor(Math.random() * 3);
            totalHours += getWorkingHours(empCheck);
        }
    }

    return totalHours * wagePerHour;
}

//  monthly wage calculation
console.log(`Monthly Wage (20 days): $${calculateMonthlyWage()}`);
