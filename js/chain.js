const users = [{id: 1, name:'abul', job:'doctor'}];

// console.log(users[0].job);

const user = {
    id: 4444,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '34/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}
const position = user.address.street.third;
console.log(position);