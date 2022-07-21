function findSingleDigit(digit, steps = 0) {
    let digitInString = digit.toString();
    if(digitInString.length === 1) return steps;
    let newString = '1';
    for( i = 0; i < digitInString.length; i++) {
        newString = Number(newString) * Number(digitInString[i])
    }
    steps+=1
    return findSingleDigit(Number(newString), steps)
}

console.log(findSingleDigit(3));