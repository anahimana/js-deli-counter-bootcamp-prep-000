function takeNumber(num, name) {
  // Update number in line
  currentLine += 1;

  // Generate message
  if(currentLine < 1){
    return `Welcome, ${name}. You are ${num + 1}st in line.`;
  }else if(currentLine < 2) {
    return `Welcome, ${name}. You are ${num + 1}nd in line.`;
  } else if(currentLine < 3){
    return `Welcome, ${name}. You are ${num + 1}rd in line.`;
  }else {
    return `Welcome, ${name}. You are ${num + 1}th in line.`;
  }
}

var currentLine = 0;
console.log(takeNumber(currentLine, "Alex"));
console.log(currentLine);
