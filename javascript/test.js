/* manipulasi string */ 
let word = 'wow JavaScript is so cool and i will become frontend developer';
let newWord = word.toUpperCase().substring(4, 14);
console.log(`${newWord} length: ${newWord.length}`)

/* manipulasi array */
let number = [10, 4, 7, 2, 3];
console.log(number.sort((a,b) => b - a));
console.log(number.sort((a,b) => a - b)); 

/* array of object */
const dataObject = [
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
];

const sortingNama = dataObject.sort((a, b) => {
    if (a.nama > b.nama) {
        return -1
    } else return 0
})

console.log(sortingNama);
console.log(dataObject.sort((a,b) => a.umur - b.umur));

/* searching */
const stringSearch = "Aku sedang belajar searching algoritma";
console.log(stringSearch.indexOf('searching'));
console.log(stringSearch.includes('searching'));
console.log(stringSearch.search(/Search/i));


const email1 = 'tisamonita@gmail.com';
const email2 = 'tisa.com'
console.log(email1.search(/(\w+@)(\w+\.\w+)/));
console.log(email2.search(/(\w+@)(\w+\.\w+)/));
