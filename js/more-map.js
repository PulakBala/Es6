const numbers = [12, 56, 87, 44];
const half = numbers.map(numbers => numbers/2);
// console.log(half);

const friends = ['Pulak', 'Sumona', 'Mitu'];
const firstLatter = friends.map(x => x[0]);
// console.log(firstLatter);
const nameLengths = friends.map(x => x.length);
// console.log(nameLengths);

const product = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 85000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 25000}
];

const items = product.map(x => x.name);
console.log(items);