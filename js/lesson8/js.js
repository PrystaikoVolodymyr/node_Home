// Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
//
// let textarea = document.getElementById(`text`);
// textarea.oninput=()=>{
//     localStorage.setItem(`key`,textarea.value)
// }
//
// let item = localStorage.getItem(`key`);
//
// setTimeout(()=>{
//     textarea.value=item
// },3000)

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
//

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// let textarea=document.getElementById(`text`)
// let button=document.getElementById(`btn`)
// let down=document.getElementById(`btn1`)
// let up=document.getElementById(`btn2`)
//
// let i=0
// let x=0
// let y=0
// function save(){
//     i+=1
//     localStorage.setItem(`key${i}`, textarea.value)
//     let item = localStorage.getItem(`key${i}`);
//     textarea.value = item
//     x=i
// }
//
// function downHistory(){
//     x=x-1
//     let item2=localStorage.getItem(`key${x}`)
//     textarea.value=item2
//     y=x
// }
// function upHistory(){
//     y=y+1
//     let item3=localStorage.getItem(`key${y}`)
//     textarea.value=item3
//     x=y
// }
//
// button.onclick=()=> {
//   save()
// }
// down.onclick=()=>{
//     downHistory()
// }
// up.onclick=()=>{
//     upHistory()
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
// let name = document.getElementById(`name`)
// let age = document.getElementById(`age`);
// let num = document.getElementById(`num`);
// let btn = document.getElementById(`btn`);
// let contact=Object.keys(localStorage);
// for (const person of contact) {
//     let con=localStorage.getItem(person)
//     let div=document.createElement(`div`)
//     let button=document.createElement(`button`)
//     let button2=document.createElement(`button`)
//     button.innerText=`DELETE`
//     button2.innerText=`RED`
//     div.innerHTML=con
//     div.appendChild(button)
//     div.appendChild(button2)
//     document.body.appendChild(div)
//     button.onclick=()=>{
//         localStorage.removeItem(person)
//         location.reload()
//     }
//     button2.onclick=()=>{
//         let newAge=document.createElement("input")
//         let newNumber=document.createElement("input")
//         let reload=document.createElement("button")
//         newAge.value=`age`
//         newNumber.value=`number`
//         newAge.onclick=()=>{
//             newAge.value=null
//         }
//         newNumber.onclick=()=>{
//             newNumber.value=null
//         }
//         reload.innerText=`RELOAD`
//         reload.onclick=()=>{
//             localStorage.setItem(person,person+` `+newNumber.value+` `+newAge.value)
//             location.reload()
//         }
//         let br=document.createElement("br")
//         div.appendChild(br)
//         div.appendChild(newAge)
//         div.appendChild(newNumber)
//         div.appendChild(reload)
//
//     }
// }
// btn.onclick=()=>{
//        localStorage.setItem(name.value,name.value+` `+num.value+` `+age.value)
//         location.reload()
// }
// //







