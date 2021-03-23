// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let mom={
//     fullName:{
//       name:`Svets`,
//       surname:`Prystaiko`},
//     age:41,
//     skills:[`cooking`,`washing`]
// }
// let dad={
//     fullName:{
//         name:`Roman`,
//         surname:`Prystaiko`},
//     age:41,
//     car:[`Chevrolet`,`Honda`]
// }

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (let momKeys in mom){
//     console.log(momKeys);
// }
// console.log(`-------`)
// for (let dadKeys in dad){
//     console.log(dadKeys)
// }

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let momKeys=Object.keys(mom)
// console.log(momKeys);
// let dadKeys=Object.keys(dad)
// console.log(dadKeys)

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let autoPark=[
//     {brand:`Chevrolet`,year:2008,automat:false},
//     {brand:`Honda`,year:2018,automat:true},
//     {brand:`Golf`,year:2010,automat:false},
//     {brand:`Mersedes`,year:2001,automat:false},
//     {brand:`BMW`,year:2015,automat:true},
//     {brand:`Deo`,year:2011,automat:false},
//     {brand:`Lada`,year:1999,automat:false},
//     {brand:`Tesla`,year:2018,automat:true},
//     {brand:`Infinity`,year:2017,automat:true},
//     {brand:`Lexus`,year:2007,automat:false}
// ]

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// let cities=[
//     {city: 'Lviv', country: 'Ukraine', populatoin:1433243},
//     {city: 'New York', country: 'USA', populatoin:3245674},
//     {city: 'Budapest', country: 'Hungary', populatoin:334434},
//     {city: 'Prague', country: 'Czech', populatoin:235535},
//     {city: 'Istanbul', country: 'Turkey', populatoin:4353448},
//     {city: 'Rio', country: 'Brasil', populatoin:478222},
//     {city: 'Montreal', country: 'Canada', populatoin:123476},
//     {city: 'Cairo', country: 'Egypt', populatoin:234564}
// ]

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let fullCar=[
//     {brand:`Chevrolet`,year:2008,driver:{name:`John`,age:22,exp:true}},
//     {brand:`Honda`,year:2018,driver:{name:`Mike`,age:18,exp:false}},
//     {brand:`Golf`,year:2010,driver:{name:`Terry`,age:43,exp:true}},
//     {brand:`Mersedes`,year:2001,driver:{name:`Fill`,age:20,exp:false}},
//     {brand:`BMW`,year:2015,driver:{name:`Paul`,age:66,exp:true}},
//     {brand:`Deo`,year:2011,driver:{name:`Merry`,age:19,exp:false}},
//     {brand:`Lada`,year:1999,driver:{name:`Diana`,age:29,exp:true}},
//     {brand:`Tesla`,year:2018,driver:{name:`Steve`,age:35,exp:true}},
//     {brand:`Infinity`,year:2017,driver:{name:`Alex`,age:60,exp:true}},
//     {brand:`Lexus`,year:2007,driver:{name:`Andrew`,age:55,exp:true}}
// ]

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i=0
// while (i<autoPark.length){
//     console.log(autoPark[i])
//     i++
// }
// while (i<cities.length){
//     console.log(cities[i])
//     i++
 // }
// while (i<fullCar.length){
//     console.log(fullCar[i])
//     i++
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < autoPark.length; i++) {
//     let autoParkElement = autoPark[i];
//     console.log(autoParkElement)
// }
// console.log(`========================`)
// for (let i = 0; i < cities.length; i++) {
//     let cityElement = cities[i];
//     console.log(cityElement)
// }
// console.log(`======================`)
// for (let i = 0; i < fullCar.length; i++) {
//     let fullCarElement = fullCar[i];
//     console.log(fullCarElement)
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (let parkEl of autoPark) {
//   console.log(parkEl)
// }
// console.log(`=====================`)
// for (let cityEl of cities) {
//   console.log(cityEl)
// }
// console.log(`=====================`)
// for (let carEl of fullCar) {
//   console.log(carEl)
// }

// - взять объекты из задания 1 и превратить каждый в json.
// let jsonMom=JSON.stringify(mom)
// console.log(jsonMom)
// let jsonDad=JSON.stringify(dad)
// console.log(jsonDad);

// // - взять json из задания 11 и превратить их обратно в объекты.
// let notJsonMom=JSON.parse(jsonMom)
// console.log(notJsonMom)
// let notJsonDad=JSON.parse(jsonDad)
// console.log(notJsonDad)

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let autoParkElement of autoPark) {
//     let autoJson=JSON.stringify(autoParkElement)
//     console.log(autoJson);
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (let cityEl of cities) {
//     let cityJson=JSON.stringify(cityEl)
//     console.log(cityJson);
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newCar=[]
// for (let carElement of fullCar) {
//     let carJson=JSON.stringify(carElement)
//     newCar.push(carJson)
// }console.log(newCar)

// - Создать массив пользователей.
// У каждого пользователя обязательно должено быть поле skills которое является массивом.
// let users = [
    // {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    // {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    // {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
    // {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    // {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];

// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// for (i=0;i<users.length;i++) {
//     let userSkills=users[i].skills
//     console.log(users[i].name,users[i].age)
//     for (let userSkill of userSkills) {
//         console.log(userSkill)
//     }
// }

// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let newUsers=[]
// for (i=0;i<users.length;i++) {
//     let userSkills=users[i].skills
//     for (let userSkill of userSkills) {
//         newUsers.push(userSkill)
//     }
// }
// console.log(newUsers);

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let newUsers=[]
// for (let user of users) {
//     newUsers.push(user.address)
// }
// console.log(newUsers);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// let bigDiv=document.createElement(`div`)// НЕ ЗРОБИВ ЦЕ
// for (let user of users) {
//     let userDiv=document.createElement(`div`)
//     userDiv.innerHTML=JSON.stringify(user)
//     console.log(userDiv)
//     // bigDiv.appendChild(userDiv)// НЕ ЗРОБИВ ЦЬОГО
// }
// // document.body.appendChild(bigDiv)// НЕ ЗРОБИВ ЦЬОГО

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// let bigDiv=document.createElement(`div`)
// for (let user of users) {
//     let userDiv=document.createElement(`div`)
//     let userInfo=document.createElement(`div`)
//     for (let userElement of user) {
//         let info=JSON.stringify(userElement)
//         userInfo.innerHTML=info
//     }
//
//     userDiv.appendChild(userInfo)
//     bigDiv.appendChild(userDiv)
// }
// document.body.appendChild(bigDiv)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// let usersWithCities=[]
// for (let user of usersWithId) {
//     for (let city of citiesWithId) {
//         if (user.id===city.user_id){
//             user.address=city
//             let newUser=user
//             usersWithCities.push(newUser)
//
//         }
//     }
// }
//
// console.log(usersWithCities)
// console.log(usersWithId);

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let byId=document.getElementById(`vova`)
// // console.log(byId);
// let byClass=document.getElementsByClassName(`prystaiko`)
// // console.log(byClass)
// let byTeg=document.getElementsByTagName(`div`)
// // console.log(byTeg)

// - змінити цей текст використовуючи селектори id, class,  tag
// byId.innerText=`HELLO BARTATIV`
// console.log(byId)
// byClass[0].innerHTML=`HELLO VOVA`
// console.log(byClass)
// byTeg[0].innerText=`Hello `
// console.log(byTeg)

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// byId.style.width=`33%`
// byId.style.height=`50px`
// byId.style.backgroundColor=`red`
// byClass[0].style.width=`50%`
// byClass[0].style.height=`500px`

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table = document.createElement(`table`);
// document.body.appendChild(table)
// let string = document.createElement(`tr`);
// table.appendChild(string)
// let box1=document.createElement(`th`)
// let box2=document.createElement(`th`)
// let box3=document.createElement(`th`)
// string.appendChild(box1)
// string.appendChild(box2)
// string.appendChild(box3)
// box1.innerText=`VOVA`
// box2.innerText=`PRYSTAiKO`
// box3.innerText=`19`

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table = document.createElement(`table`);
// document.body.appendChild(table)
// for (let i=0;i<10;i++){
//     let tr=document.createElement(`tr`)
//     table.appendChild(tr)
//     for (let i=0;i<3;i++){
//         let th=document.createElement(`th`)
//         tr.appendChild(th)
//     }
// }

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table = document.createElement(`table`);
// document.body.appendChild(table)
// for (let i=0;i<10;i++){
//     let tr=document.createElement(`tr`)
//     table.appendChild(tr)
// }
// let trr=document.getElementsByTagName(`tr`)
// for (let trrElement of trr) {
//     for (i=0;i<3;i++){
//         let th=document.createElement(`th`)
//         trrElement.appendChild(th)
//     }
// }


// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let table = document.createElement(`table`);
// let n=+prompt(`ENTER n`)
// let m=+prompt(`ENTER m`)
// document.body.appendChild(table)
// for (let i=0;i<n;i++){
//     let tr=document.createElement(`tr`)
//     table.appendChild(tr)
// }
// let trr=document.getElementsByTagName(`tr`)
// for (let trrElement of trr) {
//     for (i=0;i<m;i++){
//         let th=document.createElement(`th`)
//         trrElement.appendChild(th)
//     }
// }

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//     - знайти всі div та змінити ім колір на червоний
//


// ====class===
//     ============
//


//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))


// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту























