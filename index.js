function takeNumber(currentNum, name) {
  if(currentNum <= 1){
    return `Welcome, ${name}. You are ${currentNum + 1}st in line.`;
  }else if(currentNum = 2) {
    return `Welcome, ${name}. You are ${currentNum + 1} in line.`;
  }
  return `Welcome, ${name}. You are ${currentNum + 1} in line.`;
}

console.log(takeNumber(1, "Jake"));

