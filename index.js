function takeNumber(num, name) {
  // Generate message
  if(currentLine < 1){
    return `Welcome, ${name}. You are ${currentLine + 1}st in line.`;
  }else if(currentLine < 2) {
    return `Welcome, ${name}. You are ${currentLine + 1}nd in line.`;
  } else if(currentLine < 3){
    return `Welcome, ${name}. You are ${currentLine + 1}rd in line.`;
  }else {
    return `Welcome, ${name}. You are ${currentLine + 1}th in line.`;
  }
  
  // Update number in line
  currentLine = num += 1;

}

var currentLine = 0;
console.log(takeNumber(currentLine, "Alex"));
console.log(currentLine);
