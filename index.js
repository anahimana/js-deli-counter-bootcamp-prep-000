function takeNumber(num, name) {
  // Update number in line
  currentLine += 1;

  // Generate message
  if(num < 1){
    return `Welcome, ${name}. You are ${num + 1}st in line.`;
  }else if(num < 2) {
    return `Welcome, ${name}. You are ${num + 1}nd in line.`;
  } else if(num < 3){
    return `Welcome, ${name}. You are ${num + 1}rd in line.`;
  }else {
    return `Welcome, ${name}. You are ${num + 1}th in line.`;
  }
}

var currentLine = 2;
// console.log(takeNumber(currentLine, "Alex"));
// console.log(currentLine);
