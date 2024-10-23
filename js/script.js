// class
// 1
// class str {
//     constructor(name,age) {
//         this.name = name;
//         this.age=age
//     }
// }

// 2

// class str {
//     constructor(name,age) {
//         this.name = name;
//         this.age=age
//     }
// }
//     const person2 = new Person("Ali",30);

// 3
// class str {
//     constructor(name,year,colors) {
//         this.name = name;
//         this.year=year
//         this.colors=colors
//     }
// }
// delete this.year

//4
// class str {
//     constructor(name,year,colors) {
//         this.name = name;
//         this.colors=colors
//     }
// }
//     const person2 = new Person("Ali",30);

// person2.year=2023

// constructor
// 1
// function User(name,age) {
//     this.name = name;
//     this.age=age // }

// 2
// function User(name,age) {
//     this.name = name;
//     this.age=age
// }
// const person2 = new User("Ali",30);




// 3
// function User(name,age) {
//     this.name = name;
//     this.age=age
// }
//     const person2 = new User("Ali",30);
//  person2.year=2009



function User(name,age) {
    this.name = name;
    this.age=age
}
delete




// 1-misol
// const oquvchilar = [
//     { ism: "Ali", yosh: 17 },
//     { ism: "O'ktam", yosh: 18 },
//     { ism: "Sardor", yosh: 19 }
// ];

// function oquvchilarniChiqarish(oquvchilar) {
//     oquvchilar.forEach(oquvchi =>  {
//         console.log(` ${oquvchi.ism} ${oquvchi.yosh}`);
//     });
// }

// oquvchilarniChiqarish(oquvchilar);

// 2-misol
// const mahsulotlar = [
//     { nom: "Olma", narx: 100 },
//     { nom: "Nok", narx: 150 },
//     { nom: "Banan", narx: 200 }
// ];

// function narxniOshirish(mahsulotlar) {
//     return mahsulotlar.map(mahsulot => {
//         return {
//             nom: mahsulot.nom,
//             narx: mahsulot.narx * 1.2
//         };
//     });
// }

// const yangiMahsulotlar = narxniOshirish(mahsulotlar);
// console.log(yangiMahsulotlar);

// 3-misol

// const oquvchilar = [
//     { ism: "Dilorom", yosh: 20 },
//     { ism: "Shahrizoda", yosh: 17 },
//     { ism: "Akbar", yosh: 19 }
// ];

// function kattaOquvchilarniTanlash(oquvchilar) {
//     return oquvchilar.filter(function(oquvchi) {
//         return oquvchi.yosh > 18;
//     });
// }

// const kattaOquvchilar = kattaOquvchilarniTanlash(oquvchilar);
// console.log(kattaOquvchilar);

// 4-misol
// const kitoblar = [
//     { nom: "Kitob A", muallif: "Said Ahmad" },
//     { nom: "Kitob B", muallif: "Zokir Khoshimov" },
//     { nom: "Kitob C", muallif: "Murodjon Abduqodirov" }
// ];

// function mualliflarniOzagartirish(kitoblar) {
//     return kitoblar.map(function(kitob) {
//         return {
//             nmo:kitob.nom,
//             muallif: kitob.muallif=`Abdulla Qodiriy`
//         };
//     });
// }

// const ozgartirilganKitoblar = mualliflarniOzagartirish(kitoblar);
// console.log(ozgartirilganKitoblar);

// 5-misol

// const xodimlar = [
//     { ism: "Rashid", ishHaqi: 3000 },
//     { ism: "Dilshod", ishHaqi: 2500 },
//     { ism: "Farhod", ishHaqi: 4000 }
// ];

// function narxniOshirish(mahsulotlar) {
//     return mahsulotlar.map(mahsulot => {
//         return {
//             nom: mahsulot.ism,
//             narx: mahsulot.ishHaqi * 1.1
//         };
//     });
// }

// const yangiIashHaqi = narxniOshirish(xodimlar);
// console.log(yangiIashHaqi);

// 6-misol

// const oquvchilar = [
//     { ism: "Jasur", yosh: 21 },
//     { ism: "Sardorbek", yosh: 22 },
//     { ism: "Azizbek", yosh: 20 }
// ];
// function qoshimchaQoshish(oquvchilar) {
//     oquvchilar.map(function (oquvchi) {
//         console.log(` Mr.${oquvchi.ism} ${oquvchi.yosh}`);

//     })
// }
// qoshimchaQoshish(oquvchilar)

// 7-misol
// const avtomobillar = [
//     { nom: "Tesla", tur: "elektr" },
//     { nom: "Toyota", tur: "benzin" },
//     { nom: "Nissan Leaf", tur: "elektr" }
// ];

// function turiniTanklash(car) {
//     car.forEach(function (cars) {
//         if(cars.tur == `elektr`){
//             console.log(`nomi: ${cars.nom}`);

//         }
//     })
// }

// turiniTanklash(avtomobillar)

// 8-misol
// const foydalanuvchilar = [
//     { ism: "Aziz", email: "aziz@example.com" },
//     { ism: "Nodir", email: "nodir@example.com" },
//     { ism: "Malika", email: "malika@example.com" }
// ];

// function qaytarish(foydalanuvchi) {
//    return foydalanuvchi.map(function (odam) {
//        return{ ism:odam.ism, email:odam.email}

//     })
// }

// console.log(qaytarish(foydalanuvchilar));

// 9-misol
// const mahsulotlar = [
//     { nom: "Televizor", narx: 500 },
//     { nom: "Konditsioner", narx: 700 },
//     { nom: "Butler", narx: 300 }
// ];

// function engYuqoriNarxdagiMahsulotniTopish(mahsulotlar) {
//     return mahsulotlar.reduce(function(max, mahsulot) {
//         return (mahsulot.narx > max.narx) ? mahsulot : max;
//     });
// }
// const engYuqoriMahsulot = engYuqoriNarxdagiMahsulotniTopish(mahsulotlar);
// console.log(` ${engYuqoriMahsulot.nom}, Narxi: ${engYuqoriMahsulot.narx}`);

// // 10-misol

// const oquvchilar = [
//     { ism: "Zarina", ball: 85 },
//     { ism: "Doston", ball: 90 },
//     { ism: "Gulbahor", ball: 95 }
// ];

// // Ballarni umumiy qiymatga tenglashtiruvchi funksiya
// function ballarniTenglashtirish(oquvchilar) {
//     const umumiyBall = oquvchilar.reduce((sum, oquvchi) => sum + oquvchi.ball, 0);
//     const oquvchilarSoni = oquvchilar.length;
//     const ortachaBall = umumiyBall / oquvchilarSoni;
//     return oquvchilar.map(function(oquvchi) {
//         return {
//             ism: oquvchi.ism,
//             ball: ortachaBall
//         };
//     });
// }
// const yangilanganOquvchilar = ballarniTenglashtirish(oquvchilar);
// console.log(yangilanganOquvchilar);

// string misollar
//1-misol

// function string(str) {
//     const stringLower= str.toLowerCase();
//     console.log(stringLower);
// }
// string("Salom, Dunyo!");

//2-misol
// function stringLength(str) {
//     const length = str.length;

//     console.log(`Satr uzunligi: ${length}`);
// }

// stringLength("Salom, Dunyo!");

//3-misol
// function string(str) {
//     let stringLength = str;

//     if (str.length > 10) {
//         stringLength = str.substring(0, 10) + '...';
//     }

//     console.log(` ${stringLength}`);
// }

// string("Salom, Dunyo! ");

// 4-misol
// ????????????? TUSHUNMADIM  ????????????

// 5-misol
// function replace(str) {
//     const string = str.replace('a', 'o');

//     console.log(`O'zgartirilgan satr: ${string}`);
// }

// replace("Salom, Dunyo!");
// replace("Bu juda qiziqarli!");

// 6-misol
// function stringLength(str, index) {
//     if (index < 0 || index >= str.length) {
//         console.log("Berilgan indeks noto'g'ri.");
//         return;
//     }

//     const index5 = str.charAt(index);

//     console.log(` "${str}" - ${index}-indeksdagi belgi: "${index5}"`);
// }

// stringLength("Salomat hammaga Dunyo!", 5);

// 7-misol
// function strSearch(str) {
//     const search = str.includes("JavaScript");

//     if (search) {
//         console.log(`Satrda "JavaScript" so'zi mavjud.`);
//     } else {
//         console.log(`Satrda "JavaScript" so'zi mavjud emas.`);
//     }
// }

// strSearch("Men JavaScript dasturlash tilini o'rganmoqdaman.");
