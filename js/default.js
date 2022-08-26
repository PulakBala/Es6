function fullName (first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name ;
}
const name = fullName('Anik');
console.log(name);