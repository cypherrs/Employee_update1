import { getWorkingHours } from './UC3_WageFunction.js';

export function calculateMonthlyWage() {
    let totalHours = 0;
    const wagePerHour = 20;

    for (let day = 1; day <= 20; day++) {
        const empCheck = Math.floor(Math.random() * 3);
        totalHours += getWorkingHours(empCheck);
    }
    return totalHours * wagePerHour;
}

// console.log(`Monthly Wage (20 days): $${totalHours * wagePerHour}`);