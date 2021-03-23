// function child(block){
//     document.body.appendChild(block)
// }
// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let btn=document.createElement(`button`)
// child(btn)

// btn.onclick=()=> {
//     let vova = document.getElementById(`text`)
//     vova.hidden = true
// }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// btn.onclick=()=>{
//     btn.hidden=true
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let txt=document.getElementById(`txt`)
// btn.onclick=()=>{
//     let age=txt.value
//     if(age<18){
//         alert(`Go HOME`)
//     }
//     txt.value=null
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menu=document.getElementById(`mainBtn`)
// let men=document.getElementsByClassName(`men`)
// console.log(men);
// menu.onclick=()=>{
//     for (const man of men) {
//        if (man.hidden===false){
//            man.hidden=true
//        } else {
//            man.hidden=false
//        }
//     }
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let coment=[
//     {title:`Vova`,body:`ME`},
//     {title:`Mikel`,body:`Bro`},
//     {title:`Sveta`,body:`MOM`},
//     {title:`Roman`,body:`DAD`}
// ]
// for (let com of coment) {
//     let {title,body}=com
//     let divka=document.createElement(`div`)
//     let click=document.createElement(`button`)
//     divka.innerHTML=title+`----`+body
//     click.style.margin=`20px`
//     click.style.height=`20px`
//     click.style.width=`20px`
//     click.onclick=()=>{
//         divka.hidden=true
//     }
//     divka.appendChild(click)
//     document.body.appendChild(divka)
// }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// let forma1=document.forms.forma1
// let forma2 = document.forms.forma2;
// let butt=document.getElementById(`butt`)
// butt.onclick=(cv)=>{
//    let text1= forma1.text1.value
//    let text2= forma1.text2.value
//    let text3= forma2.text3.value
//    let text4= forma2.text4.value
//     console.log(text1)
//     console.log(text2)
//     console.log(text3)
//     console.log(text4)
// }

//
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//
// function table(row,srting,div) {
//     let table = document.createElement(`table`);
//         for (let i=0;i<srting;i++){
//             let str=document.createElement(`tr`)
//             for (x=0;x<row;x++){
//                 let roww=document.createElement(`td`)
//                 str.appendChild(roww)
//             }
//         table.appendChild(str)
//         }
//         div.appendChild(table)
// }
// let vova=document.createElement("div")
// document.body.appendChild(vova)
//  table(2,5,vova)

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// function table(row,srting,div,text) {
//     let table = document.createElement(`table`);
//     for (let i=0;i<srting;i++){
//         let str=document.createElement(`tr`)
//         for (x=0;x<row;x++){
//             let roww=document.createElement(`td`)
//             roww.innerText=text
//             str.appendChild(roww)
//         }
//
//         table.appendChild(str)
//
//     }
//     div.appendChild(table)
// }
// let vova=document.createElement("div")
// document.body.appendChild(vova)
//
// let forma=document.forms.forma1
// let butt=document.getElementById(`butt`)
// butt.onclick=(cv)=>{
//    let text1= forma1.text1.value
//    let text2= forma1.text2.value
//    let text3= forma1.text3.value
//     table(text1,text2,vova,text3)
// }


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let btn=document.getElementById(`butt`)
// let forma1=document.forms.forma1
//
// let badWords=[]
// function badWord(slovo) {
//     badWords.push(slovo)
//     return badWords
// }
// badWord(`vova`)
// badWord(`prystaiko`)
// badWord(`roman`)
// console.log(badWords);
//
// btn.onclick=()=>{
//    let text1= forma1.text1.value
//     for (const badWord1 of badWords) {
//         if (badWord1==text1){
//             alert(`GO OUT`)
//         }
//     }
// }
//

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
// let btn=document.getElementById(`butt`)
// let forma1=document.forms.forma1
//
// let badWords=[]
// function badWord(slovo) {
//     badWords.push(slovo)
//     return badWords
// }
// badWord(`vova`)
// badWord(`prystaiko`)
// badWord(`roman`)
// console.log(badWords);
//
// btn.onclick=()=>{
//     let text1= forma1.text1.value
//     let slova=text1.split(` `)
//     for (const badWord1 of badWords) {
//         for (const slovo of slova) {
//             if (badWord1==slovo){
//                 alert(`GO OUT`)
//             }
//         }
//
//     }
// }


//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//


// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// let check1 = document.getElementById(`check1`);
// check1.onclick=()=>{
//     if (check1.checked){
//         let user=usersWithAddress.filter((value => {
//             return  value.status===false
//
//          }))
//         console.log(user)
//         // alert(`22`)
//     }
// }
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//

// *****(Прям овердоз с рекурсией) Создать функц// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)ию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//
//






















