

// ==============================================
// // -  Створити функцію конструктор для об'єкту який описує теги
// // Властивості
// //  -назва тегу
// //  - опис його дій
// //  - масив з атрибутами (2-3 атрибути максимум)
// //  Кожен атрибут описати як окремий який буде містити
// //  -назву атрибуту
// //  -опис дії атрибуту
// //  інформацію брати з htmlbook.ru

// //  Таким чином описати теги
// //  -a
// //  -div
// //  -h1
// //  -span
// //  -input
// //  -form
// //  -option
// //  -select
// //  Приклад результату
// //    {
// //         titleOfTag: 'area',
// //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //         attrs: [
// //         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// //         {/*some props and values*/},
// //         {/*...*/},
// //         {/*...*/},
// //         ]

// //    }

// function TegA(name,dscrptOfAct,array){
//     this.name = name ;
//     this.dscrptOfAct = dscrptOfAct;
//     this.array=array;
// }

// let first = '<a>';
// let second = 'Тег <a> є одним з важливих елементів HTML і призначений для створення посилань. Залежно від присутності атрибутів name або href тег <a> встановлює посилання або якір.';
// let third = [{
//     accesskey :'Активація посилання за допомогою комбінації клавіш',
//     coords : 'Встановлює координати активної області'
// }
// ];
// let tag1 = new TegA(first,second,third);
// console.log(tag1);
// ==============================================


// // ==============================================
// // -  Створити класс  для об'єкту який описує теги
// // Властивості
// //  -назва тегу
// //  - опис його дій
// //  - масив з атрибутами (2-3 атрибути максимум)
// //  Кожен атрибут описати як окремий який буде містити
// //  -назву атрибуту
// //  -опис дії атрибуту
// //  інформацію брати з htmlbook.ru

// //  Таким чином описати теги
// //  -a
// //  -div
// //  -h1
// //  -span
// //  -input
// //  -form
// //  -option
// //  -select
// //  Приклад результату
// //    {
// //         titleOfTag: 'area',
// //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //         attrs: [
// //         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// //         {/*some props and values*/},
// //         {/*...*/},
// //         {/*...*/},
// //         ]

// //    }
// let tegA = class{
//     constructor (name,dscrptOfAct,array){
//     this.name = name ;
//     this.dscrptOfAct = dscrptOfAct;
//     this.array=array;
//     }
// }
// let first = '<a>';
// let second = 'Тег <a> є одним з важливих елементів HTML і призначений для створення посилань. Залежно від присутності атрибутів name або href тег <a> встановлює посилання або якір.';
// let third = [{
//     accesskey :'Активація посилання за допомогою комбінації клавіш',
//     coords : 'Встановлює координати активної області'
// }
// ];
// let tag1 = new tegA(first,second,third);
// console.log(tag1);

// ==============================================



// // ==============================================
// // - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let car = {
//     model: 'audi',
//     manufacturer : 'Italy',
//     year : 2019,
//     maxSpeed : '240 km/h',// просто 240
//     vDv : '1,4',
//     drive : function (){
//        console.log (`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//     info: function (){
//         console.log (this.model,this.vDv,this.year, this.maxSpeed, this.manufacturer,)
//     },
//     increaseMaxSpeed : function (newSpeed){
//         this.maxSpeed = this.maxSpeed + newSpeed;// maxspeed не як число а як стрічка

//     },
//     changeYear:function(newValue){
//         this.year = newValue
//     },
//     addDriver:function (driver){
//         driver = {
//             name : 'Ivanko',
//             age : 50,
//             experience : '20 years'
//         }
//         console.log(driver)
//     }
// }

// car.addDriver()
// car.changeYear(13)
// car.increaseMaxSpeed(100)
// car.info()
// ==============================================


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function Car (model,manufacturer,year,maxSpeed,vDv){
// this.model= model;
// this.manufacturer = manufacturer;
// this.year= year;
// this.vDv=vDv;
// this.maxSpeed= maxSpeed;

//     function drive (){
//         console.log (`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }

//     function info(){
//         console.log (Car)
//     }
//     let car = new car('Audi','Ukraine',2019,185,'1.4');

//     this.increaseMaxSpeed = function (newSpeed){
//     this.maxSpeed = this.maxSpeed + newSpeed;
//     }

//     this.changeYear = function (newValue){
//     this.year = this.newValue;
//     }

//     function addDriver (driver){
//         driver = {
//             name : 'Ivanko',
//             age : 50,
//             experience : '20 years'
//         }
//         console.log(driver)
//     }
// Car.addDriver()
// Car.changeYear(13)
// Car.increaseMaxSpeed(100)
// Car.info()
// }


// ==============================================

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let car = class {
//     constuctor(model,manufacturer,year,maxSpeed,vDv){
// this.model= model;
// this.manufacturer = manufacturer;
// this.year= year;
// this.vDv=vDv;
// this.maxSpeed= maxSpeed;
//     }
// }

// ==============================================


// // ==============================================
// // -створити класс попелюшка з полями ім'я, вік, розмір ноги
// // --Створити 10 попелюшок , покласти їх в масив
// // --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// class Popelushka {
//     constructor(name,age,footSize){
// this.name= name;
// this.age= age;
// this.footSize=footSize;
//     }
// }
//
// let Popelushka1 = new Popelushka('Solomiya',18,36);
// let Popelushka2 = new Popelushka('Kate',19,37);
// let Popelushka3 = new Popelushka('Jessie',17,36.5);
// let Popelushka4 = new Popelushka('Leyla',20,39);
// let Popelushka5 = new Popelushka('Lili',21,38.5);
// let Popelushka6 = new Popelushka('Ingret',22,35);
// let Popelushka7 = new Popelushka('Sophi',23,40);
// let Popelushka8 = new Popelushka('Megan',24,38);
// let Popelushka9 = new Popelushka('Maya',16,39.5);
// let Popelushka10 = new Popelushka('Rosa',19,34);
//
// let arrAllPopelushka = [Popelushka1,Popelushka2,
//     Popelushka3,Popelushka4,
//     Popelushka5,Popelushka6,
//     Popelushka7,Popelushka8,
//     Popelushka9,Popelushka10];
// // console.log (arrAllPopelushka);
//
// class Prinz {
//     constructor(name,age,tuflya){
//         this.name=name;
//         this.age = age;
//         this.tuflya=tuflya;
//     }
// }
// let myPrince = new Prinz('Popelukh',25,36);
//
//Твій цикл(не вірний)
// // for (footSize=36;footSize<=36;footSize++);
// // {
// // console.log('My Popelushka is :' + Popelushka1.name )  //?.. якось не так цикл
// // }
//
//Пояснення
// // Цикл перебирає всі елементи
// //       1     2         3
// //for (i=0;i<=something;i++){
// // }
// //і=кількість операцій   1) початкове значення  2) кінцеве значення 3)крок
// // Помилка в циклі, тому що ти нічого не перебираєш
// //Тобі потрібно було створити цикл, перебравши попелюшок і шукаючи в них розмір ноги, який знайшов твій принц
// // console.log('<br>')// Це не консолиться :)
//
//Правильний цикл
// for (let i=0;i<arrAllPopelushka.length;i++){
//     let size=arrAllPopelushka[i].footSize//вибираємо з кожної попелюшки розмір ноги і кидаємо розмір в змінну
//     if(size==myPrince.tuflya){//за допомогою іф прирівнюємо кожен розмір до туфлі принца, якщо зійшлось=>виводити на консоль, тим самим цикл прожене всі елементи і принц може знайти туфлю будь-якого розміру
//         console.log('My Popelushka is :' + arrAllPopelushka[i].name )
//     }
// }
//
//Цикл за доп функції(найкращий варіант)
// function search(arr,prince) {
//     for (let i=0;i<arr.length;i++){
//         let size=arr[i].footSize
//         if(size==prince.tuflya){
//             console.log('My Popelushka is :' + arr[i].name )
//         }
//     }
// }
// search(arrAllPopelushka,myPrince)// ця функція дозволяє бути не привязаним до когось одного ПРИНЦА , а можна створити будь-якого іншого принца



// ==============================================

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Popelushka (name,age,footSize){
// this.name= name;
// this.age= age;
// this.footSize=footSize;
// }
// let Popelushka1 = new Popelushka('Solomiya',18,36);
// let Popelushka2 = new Popelushka('Kate',19,37);
// let Popelushka3 = new Popelushka('Jessie',17,36.5);
// let Popelushka4 = new Popelushka('Leyla',20,39);
// let Popelushka5 = new Popelushka('Lili',21,38.5);
// let Popelushka6 = new Popelushka('Ingret',22,35);
// let Popelushka7 = new Popelushka('Sophi',23,40);
// let Popelushka8 = new Popelushka('Megan',24,38);
// let Popelushka9 = new Popelushka('Maya',16,39.5);
// let Popelushka10 = new Popelushka('Rosa',19,34);

// let arrAllPopelushka = [Popelushka1,Popelushka2,
//     Popelushka3,Popelushka4,
//     Popelushka5,Popelushka6,
//     Popelushka7,Popelushka8,
//     Popelushka9,Popelushka10];
// console.log (arrAllPopelushka);

// let Prinz = function(name,age,tuflya){
//         this.name=name;
//         this.age = age;
//         this.tuflya=tuflya;

// }
// let a= 'Popelush';
// let b= 25;
// let c= 36;
// let myPrince = new Prinz(a,b,c);
// console.log (myPrince)

// function findPopelushka (){
//     if (arrAllPopelushka.footSize == 36){
//         console.log ('My princess is' + arrAllPopelushka.name )
//     }
// }
// findPopelushka(); //? //  в кінці не шукає попелюшку , та  сама фігня що і в минулому






