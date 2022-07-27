const pelajar = [
    {
        nama : 'c',
        umur : 12,
    },
    {
        nama : 'a',
        umur : 1,
    },
    {
        nama : 'd',
        umur : 4,
    },
    {
        nama : 'f',
        umur : 5,
    }
]

// Filter
const filterArr = pelajar.filter((key) => key.umur < 5);
console.log(filterArr);

// Map
const newArr = pelajar.map((key, index) => {return key.nama});
console.log(newArr);

const namaUmur = pelajar.map((key) => {
    return `${key.nama} umur: ${key.umur}`;
})
console.log(namaUmur);

// Reduce
const array = [1, 5, 2, 6, 9, 3];
const arrayNew = array.reduce((previous, current) => {
    return previous - current;
})
console.log(arrayNew);

// Foreach
const strArray = ['javascript', 'java', 'C'];

function forEach(array, callback){
    const newArray = [];
    for(let i = 0; i<array.length; i++){
        newArray.push(callback(array[i]));
    }
    return newArray;
}


const lenArray = forEach(strArray, (item) => {
    return item.length;
});

console.log(lenArray);
