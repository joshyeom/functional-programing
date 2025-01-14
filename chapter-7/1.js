// Practice
function payrollCalc(employee) {
  // ...
  return payrollChecks;
}

// Solution
function payrollCalcSafe(employee) {
  const newEmployee = structuredClone(employee);
  const payrollChecks = payrollCalc(newEmployee);
  const newPayrollChecks = structuredClone(payrollChecks);
  return newPayrollChecks;
}
