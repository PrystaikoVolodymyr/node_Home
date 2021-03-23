// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// //
// function Tag(nameTag,actionTag,att1,att2,actionAtt1,actionAtt2) {
//     this.name=nameTag
//     this.action=actionTag
//     this.att=[{att1,actionAtt1}, {att2,actionAtt2}]
//
// }
// let a=new Tag(`a`,`Do something`,`something`,`anything`,`Do something`,`Do something`)
// console.log(a);

// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let car={
//     model:`Chevrolet`,
//     madeBY:`Korea`,
//     year:2008,
//     maxSpeed:170,
//     engeen:1.4,
//     drive:function(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}km/h`)
//     },
//     info:function () {
//         console.log(this)
//     },
//     increaseMaxSpeed:function (newSpeed) {
//       this.maxSpeed=this.maxSpeed+newSpeed
//     },
//     changeYear:function (newValue) {
//         this.year=newValue
//     },
//     addDriver:function (driver) {
//         this.driver=driver
//     }
//
// }
// let driver={
//     name: `Vova`,
//     year:2001,
//     driveYear: 2
// }
// car.drive()
// car.increaseMaxSpeed(20)
// car.changeYear(2009)
// car.addDriver(driver)
// car.info()
// //

// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//

// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car {
//     constructor(model,madeBy,year,maxSpeed,engeen) {
//         this.model=model
//         this.madeBy=madeBy
//         this.year=year
//         this.maxSpeed=maxSpeed
//         this.engeen=engeen
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}на годину`)
//     }
//     info(){
//         console.log(this)
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed=this.maxSpeed+newSpeed
//     }
//     changeYear(newValue){
//         this.year=newValue
//     }
//     addDriver(driver){
//         this.driver=driver
//     }
// }
// let mazda=new Car(`mazda`,`Japan`,2010,180,2.2)
// let driver={
//     name: `Vova`,
//     year:2001,
//     driveYear: 2
// }
// // console.log(mazda)
// mazda.addDriver(driver)
// mazda.info()


// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class  Popelyska{
//     constructor(name,age,size) {
//         this.name=name
//         this.age=age
//         this.size=size
//     }
// }
// class  Prince{
//     constructor(name,age,size) {
//         this.name=name
//         this.age=age
//         this.size=size
//     }
// }
//
// let one=new Popelyska(`aza`,12,10)
// let two=new Popelyska(`xxx`,32,4)
// let three=new Popelyska(`ddd`,14,5)
// let four=new Popelyska(`fff`,26,12)
// let five=new Popelyska(`www`,15,3)
// let six=new Popelyska(`zzz`,17,8)
// let seven=new Popelyska(`bbb`,25,9)
// let eight=new Popelyska(`kkk`,22,7)
// let nine=new Popelyska(`ttt`,11,13)
// let ten=new Popelyska(`nnn`,33,11)
//
// let prince=new Prince(`Dzek`,22,8)
// let arr=[]
// function addPop(popelyska) {
//     arr.push(popelyska)
// }
// addPop(one)
// addPop(two)
// addPop(three)
// addPop(four)
// addPop(five)
// addPop(six)
// addPop(seven)
// addPop(eight)
// addPop(nine)
// addPop(ten)
//
// for (const popelyska of arr) {
//     let size=popelyska.size
//     if (prince.size==size){
//         console.log(popelyska.name+`+`+prince.name)
//     }
// }


// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// - функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// // ==============================================
// function  Popelyska(name,age,size){
//         this.name=name
//         this.age=age
//         this.size=size
// }
//
//
// function  Prince(name,age,size){
//         this.name=name
//         this.age=age
//         this.size=size
//         this.find=function (array) {
//             for (const popelyska of array) {
//                 let size=popelyska.size
//                 if (this.size==size){
//                     console.log(popelyska.name+`+`+this.name)
//                 }
//             }
//         }
// }
//
// let dan= new Prince(`dan`,11,9)
//
// let one=new Popelyska(`aza`,12,10)
// let two=new Popelyska(`xxx`,32,4)
// let three=new Popelyska(`ddd`,14,5)
// let four=new Popelyska(`fff`,26,12)
// let five=new Popelyska(`www`,15,3)
// let six=new Popelyska(`zzz`,17,8)
// let seven=new Popelyska(`bbb`,25,9)
// let eight=new Popelyska(`kkk`,22,7)
// let nine=new Popelyska(`ttt`,11,13)
// let ten=new Popelyska(`nnn`,33,11)
//
// let arr=[]
//
// function addPop(popelyska) {
//     arr.push(popelyska)
// }
//
// addPop(one)
// addPop(two)
// addPop(three)
// addPop(four)
// addPop(five)
// addPop(six)
// addPop(seven)
// addPop(eight)
// addPop(nine)
// addPop(ten)
//
// console.log(dan)
// console.log(arr)
// dan.find(arr)
