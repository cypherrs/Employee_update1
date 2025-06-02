export function calculateWage(empCheck) {
    const wagePerHour = 20;
    const empHrs = empCheck === 1 ? 4 : empCheck === 2 ? 8 : 0;
    return empHrs * wagePerHour;
}

// const empCheck = Math.floor(Math.random() * 3);
// console.log(`Employee Daily Wage: $${calculateWage(empCheck)}`);
