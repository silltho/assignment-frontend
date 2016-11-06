export function valid(email) {
  var re = /^[a-z]*\.(mmt-)[bm][0-9]{4}@(fh-salzburg.ac.at)$/g;
  return re.test(email);
}

export function degreeProgram(email) {
  var re = /[a-z]*(?=-)/g;
  return re.exec(email)[0].toUpperCase();
}

export function level(email) {
  var re = /(b)(?=[0-9]{4})|(m)(?=[0-9]{4})/g;
  var degree = re.exec(email)[0];
  if(degree == "b") return 'BA';
  else if( degree == "m") return 'MA';
  return null;
}

export function graduationYear(email) {
  var re = /[0-9]{4}(?=@)/;
  var incomingYear = re.exec(email)[0];
  var degree = level(email);
  if(degree == "BA") return parseInt(incomingYear) + 3;
  else if(degree == "MA") return parseInt(incomingYear) + 2;
}
