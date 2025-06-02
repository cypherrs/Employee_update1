import { checkAttendance } from './UC1_Attendance.js';
import { calculateWage } from './UC2_DailyWage.js';
import { getWorkingHours } from './UC3_WageFunction.js';
import { calculateMonthlyWage } from './UC4_MonthlyWage.js';
import { calculateConditionalWage } from './UC5_WageTillHourDay.js';

console.log("UC1: Check Employee Attendance");
checkAttendance();

console.log("UC2: Calculate Daily Wage");
const empCheck = Math.floor(Math.random() * 3);
console.log(`Employee time check: ${empCheck}`);
console.log(`Daily Wage: $${calculateWage(empCheck)}`);

console.log("UC3: Get Working Hours");
console.log(`Working Hours: ${getWorkingHours(empCheck)} hours`);

console.log("UC4: Calculate Monthly Wage (20 days)");
console.log(`Monthly Wage: $${calculateMonthlyWage()}`);

console.log("git UC5: Wage Until 160 Hrs or 20 Days ===");
console.log(`Total Wage: $${calculateConditionalWage()}`);

