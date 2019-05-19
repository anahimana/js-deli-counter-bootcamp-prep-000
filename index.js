function takeANumber(deliLine, name) {
  deliLine.push(name);

  // Generate message
  if(deliLine.length < 1){
    return `Welcome, ${name}. You are ${deliLine.length + 1} in line.`;
  }else if(deliLine.length < 2) {
    return `Welcome, ${name}. You are ${deliLine.length + 1} in line.`;
  } else if(deliLine.length < 3){
    return `Welcome, ${name}. You are ${deliLine.length + 1} in line.`;
  }else {
    return `Welcome, ${name}. You are ${deliLine.length + 1} in line.`;
  }
}



