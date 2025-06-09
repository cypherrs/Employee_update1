// uc1 : Attendance check
function checkAttendance() {
    const isPresent = Math.random() < 0.5;
    console.log(isPresent ? "Employee is Present" : "Employee is Absent");
    return isPresent;
}

// uc3: wage function
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

// UC5 — Wage till 160 hours or 20 days
function calculateConditionalWage() {
    let totalHours = 0;
    let totalDays = 0;
    const wagePerHour = 20;

    while (totalHours <= 160 && totalDays < 20) {
        if (checkAttendance()) {
            totalDays++;
            const empCheck = Math.floor(Math.random() * 3);
            totalHours += getWorkingHours(empCheck);
        }
    }

    return totalHours * wagePerHour;
}

//UC2 first check attendance and calculate daily wage
if (checkAttendance()) {
    const empCheck = Math.floor(Math.random() * 3);
    console.log(`Employee Daily Wage: $${calculateWage(empCheck)}`);
} else {
    console.log("No wage — Employee absent.");
}

//UC4 monthly wage calculation
console.log(`Monthly Wage (20 days): $${calculateMonthlyWage()}`);

//UC5 conditional wage calculation
console.log(`Wage (till 160hrs or 20 days): $${calculateConditionalWage()}`);
