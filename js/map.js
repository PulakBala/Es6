const numbers = [2, 4, 6, 7, 8, 10];


function getDoubles(numbers) {
    const output = [];
    for(const number of numbers){
    const doubled = doubleItNew(number);
    output.push(doubled);
}
return output;
}

function doubleIt (number) {
    return number * 2 ;
}

doubleItNew = num => num * 2;

const makeDouble = numbers.map(doubleIt);

const result = getDoubles(numbers);
console.log(result); 
console.log(makeDouble);