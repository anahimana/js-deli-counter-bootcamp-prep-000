function takeANumber(deliLine, name) {
  // Add visitor to line
  deliLine.push(name);

  // Generate message with index number
  // Make the meessage people friendly, later...
  if(deliLine.length < 1){
    return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
  }else if(deliLine.length < 2) {
    return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
  } else if(deliLine.length < 3){
    return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
  }else {
    return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
  }
}


function nowServing(deliLine) {
  if(deliLine.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    var myVisitor = deliLine.slice();
    deliLine.shift();
    return `Currently serving ${myVisitor[0]}.`;
  }
}

function currentLine() {
  
}


