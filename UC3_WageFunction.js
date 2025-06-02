export function getWorkingHours(empCheck) {
    switch (empCheck) {
        case 1: return 4;
        case 2: return 8;
        default: return 0;
    }
}

export function calculateWage(empCheck) {

    const wagePerHour = 20;
    const wage = getWorkingHours(empCheck) * wagePerHour;
    return wage;
}

// calculateWage();