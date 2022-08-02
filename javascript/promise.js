// // Teman kalian berjanji akan membuatkan kalian kue ulang tahun.
// // Kalau semuanya berjalan lancar dan dia tidak sakit, maka kalian akan mendapat kue.

// const onMyBirthday = (isMyFriendSick) => {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         if (!isMyFriendSick) {
//           return res(true);
//         }
  
//         return rej(false);
//       }, 2000);
//     });
//   };
  
//   onMyBirthday(false)
//     .then((_) => console.log("Dapat kue"))
//     .catch((_) => console.log("Tidak dapat kue"));
  
//   // underscore pada then dan catch menandakan bahwa hasil dari promise itu sendiri tidak dipakai
//   // contoh dibawah untuk yang dipakai
  
//   const onMyNextBirthday = (isMyFriendSick, numberOfCakes) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (!isMyFriendSick) {
//           return resolve(numberOfCakes);
//         }
  
//         return reject(0);
//       }, 2000);
//     });
//   };
  
//   onMyNextBirthday(false, 3)
//     .then((resolve) =>
//       console.log(`Teman saya tidak sakit, dia membuatkan saya ${resolve} kue`)
//     )
//     .catch((error) =>
//       console.log(`Teman saya sakit, sehingga saya mendapat ${error} kue`)
//     );





// // Hit API

const { get } = require("http");
const https = require("https");
const { json } = require("stream/consumers");

function getStarWarById(peopleId) {
  //beginanswer
  return new Promise((resolve, reject) => {
    https
      .get("https://swapi.dev/api/people/" + peopleId, (res) => {
        let result = "";

        if (res.statusCode !== 200) {
          reject(new Error(res.statusCode));
        }

        res.on("data", (d) => {
          result += d;
        });

        res.on("end", () => {
          resolve(JSON.parse(result));
        });
      })
      .on("error", (e) => {
        reject(e);
      });
  });
  //endanswer
}

function getVehicle(link) {
    return new Promise((resolve, reject) => {
          https
          .get(link, (res) => {
            let result = "";
    
            if (res.statusCode !== 200) {
              reject(new Error(res.statusCode));
            }
    
            res.on("data", (d) => {
              result += d;
            });
    
            res.on("end", () => {
              resolve(JSON.parse(result));
            });
          })
          .on("error", (e) => {
            reject(e);
          });
    });
}

async function main() {
    try {
        let result = [];
        const data = await getStarWarById(1);
        console.log(data);

        const vehicles = data.vehicles;
        console.log(vehicles);

        for (item of vehicles) {
            const vehicle = await getVehicle(item);
            const vehicleName = vehicle.name;
            result.push(vehicleName);
        }
        console.log(result);       
    } catch (error) {
        console.log(error);
    }
}

main();


// getStarWarById(1)
// .then((data) => {
//   console.log(data);
// })
// .catch((err)=>{
//     console.log(`error ${err.message}`)
// })
