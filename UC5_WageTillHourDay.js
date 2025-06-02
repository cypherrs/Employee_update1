import { getWorkingHours } from './UC3_WageFunction.js';

export function calculateConditionalWage() {

let totalHours = 0, totalDays = 0;
const wagePerHour = 20;

while (totalHours <= 160 && totalDays < 20) {
    totalDays++;
    const empCheck = Math.floor(Math.random() * 3);
    totalHours += getWorkingHours(empCheck);
}
return totalHours * wagePerHour;
}

// console.log(`Monthly Wage (till 160hrs or 20 days): $${totalHours * wagePerHour}`);