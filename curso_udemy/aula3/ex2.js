let varA = 'A'; // vire B
let varB = 'B'; // vire C
let varC = 'C'; // vire A

console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);