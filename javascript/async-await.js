let punyabuku = false;
const beliBuku = () => new Promise((resolve) => {
    setTimeout(() => {
        punyabuku = true;
        resolve(punyabuku);
    }, 1000)
})

const gambar = (judul) => {
    if (punyabuku) return Promise.reject('Gak punya buku');
    return Promise.resolve({
        id: Date.now(),
        title: judul, 
        createdAt: Date(),
    })
}

async function main() {
    try {
        const hasilGambar = await gambar('Doraemon');
        console.log(hasilGambar);
    }

    catch (err){
        console.log(err);
    }
}

main();