function ganjilGenap(str) {
    if (typeof(str) != "string") {
        return "Invalid data";
    } else if (str == "") {
        return "Plat tidak ditemukan"
    } else {
        let platGanjil = [];
        let platGenap = [];
        arr = str.split(';');
        for (let i = 0; i < arr.length; i++) {
            int = parseInt(arr[i]);
            if (int % 2 == 0) {
                platGenap.push(int);
            } else platGanjil.push(int);
        }

        if (platGanjil.length == 0) {
            return `Plat genap sebanyak ${platGenap.length} dan plat ganjil tidak ditemukan`;
        } else if (platGenap.length == 0) {
            return `Plat ganjil sebanyak ${platGanjil.length} dan plat genap tidak ditemukan`;
        } else {
            return `Plat genap sebanyak ${platGenap.length} dan plat ganjil sebanyak ${platGanjil.length}`;
        }
    }
}

console.log(ganjilGenap(""));
console.log(ganjilGenap(1234, 4567));
console.log(ganjilGenap());
console.log(ganjilGenap("1234; 2345; 6789; 9543"));
console.log(ganjilGenap("1235; 5319; 6857"));
console.log(ganjilGenap("3412; 5234; 8976"));
