function isNumber(s) {
    s = s.trim();

    const numSet = new Set(['0','1','2','3','4','5','6','7','8','9']);
    let isE = (v) => v === 'e' || v === 'E';
    
    let numSeen = false,
        eSeen = false,
        decimalSeen = false;

    for(let i = 0; i < s.length; i++){
        const val = s[i];
        
        if(numSet.has(val)){
            numSeen = true
        }else if(isE(val)){
            if(!numSeen  || eSeen || s.length - 1 === i) return false;
            eSeen = true
        }else if(val === '+' || val === '-'){
            if(i !== 0 && !isE(s[i-1])) return false;
        }else if(val === "."){
            if(eSeen || decimalSeen) return false;
            decimalSeen = true
        }else{
            return false
        }

    }
    return numSeen
}

function isNumberRegExp(s) {
  const regExp = /^[ ]*[+-]?((\d+[.]?\d*)|(\d*[.]?\d+))(e[+-]?\d+)?[ ]*$/i;
  return regExp.test(s);
}

console.log(isNumber("2") === true);
console.log(isNumber(" 2 ") === true);
console.log(isNumber("0089 ") === true);
console.log(isNumber(" -0.1") === true);
console.log(isNumber("+3.14") === true);
console.log(isNumber("4.") === true);
console.log(isNumber("-.9") === true);
console.log(isNumber("2e10") === true);
console.log(isNumber("-90E3") === true);
console.log(isNumber("3e+7") === true);
console.log(isNumber("+6e-1") === true);
console.log(isNumber("53.5e93") === true);
console.log(isNumber("-123.456e789") === true);

console.log(isNumber("abc") === false);
console.log(isNumber("a4b2c") === false);
console.log(isNumber("1ee3") === false);
console.log(isNumber("4.3.2") === false);
console.log(isNumber("1a") === false);
console.log(isNumber("e") === false);
console.log(isNumber("1e") === false);
console.log(isNumber("e3") === false);
console.log(isNumber("99e2.5") === false);
console.log(isNumber("--6") === false);
console.log(isNumber("-+3") === false);
console.log(isNumber("95a54e53") === false);
console.log(isNumber("") === false);
