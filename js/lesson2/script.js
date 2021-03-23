// --створити масив та вивести його в консоль:
// - з 5 числових значень
// let numARR=[1,4,5,7,9]
// // - з 5 стічкових значень
// let strArr=[`vova`,`vasya`,`dog`,`cat`,`Ukraine`]
// // - з 5 значень стрічкового, числового та булевого типу
// let differentArr=[`vova`,23,2001,true,false]

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArr=[]
// emptyArr[0]=`prystaiko`
// emptyArr[1]=false
// emptyArr[2]=19
// console.log(emptyArr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for ( let i=0;i<=10;i++){
//     document.write(`<div>text</div>`)
//     document.write(`</br>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for ( let i=0;i<=10;i++){
//     document.write(`<div>text</div>`+i)
//     document.write(`</br>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0
// while (i<=20){
//     i++
//     document.write(`<h1>VOVA</h1>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=0
// while (i<=20){
//     i++
//     document.write(`<h1>VOVA ${i}</h1>`)
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let tenArr=[1,5523,65,34,676,536,25,44,62,532]
// for (i=0;i<tenArr.length;i++){
//     console.log(tenArr[i])
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let tenArr=[1,false,65,false,676,true,25,44,62,532]
// for (let i=0;i<tenArr.length;i++){
//        if (typeof tenArr[i]=="boolean") {
//            console.log(tenArr[i])
//            console.log(`----`)
//        }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr=[]
// for (i=0;i<=10;i++){
//     let element=prompt()
//     arr[i]=element
//
// }
// console.log(arr)
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (i=0;i<=100;i+=2){
//     console.log(i)
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (i=0;i<=100;i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши  2 години 20 \
// let Hours=+prompt('ENTER HOURS')
// let Minutes=+prompt('ENTER MINUTES')
// let Seconds=+prompt('ENTER SECONDS')
// if (Seconds>=60) {
//     let z = Math.round(Seconds / 60)
//     Minutes = Minutes + z
//     let u = Seconds % 60
//     Seconds = u
// }
//
// if (Minutes>=60) {
//     let x = Math.round(Minutes / 60)
//     Hours = Hours + x
//     let y = Minutes % 60
//     Minutes = y
// }
// if (Minutes==0 && Seconds==0){
//     document.write(Hours,' ','hours','::',Minutes,' ','min','::',Seconds,' ','sec')
//     document.write('<br>')
// }
// if (Seconds==0 && Minutes!=0){
//     document.write(Hours,' ','hours','::',Minutes,' ','min','::',Seconds,' ','sec')
//     document.write('<br>')
// }
// if (Seconds>0){
//     for (sec=Seconds;sec>=0;sec--){
//         console.log(Hours,'::',Minutes,'::',sec)
//         document.write(Hours,' ','hours','::',Minutes,' ','min','::',sec,' ','sec')
//         document.write('<br>')
//     }
// }
// if (Minutes>0){
//     for (min=Minutes-1;min>=0;min--){
//         for (sec=60-1;sec>=0;sec--){
//             console.log(Hours,'::',min,'::',sec)
//             document.write(Hours,' ','hours','::',min,' ','min','::',sec,' ','sec')
//             document.write('<br>')
//
//
//         }
//     }
// }
//
// for (hour=Hours-1;hour>=0;hour--){
//     for (min=59;min>=0;min--){
//         for (sec=59;sec>=0;sec--){
//             console.log(hour,'::',min,'::',sec)
//             document.write(hour,' ','hours','::',min,' ','min','::',sec,' ','sec')
//             document.write('<br>')
//
//
//         }
//     }
// }

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let word =[`a`,`b`,`c`]
// let slovo=``
// for (i=0;i<word.length;i++){
//     slovo=slovo+word[i]
//
// }   console.log(slovo)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//

// =================
// =================
// =================
// =================

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr=['a', 'b', 'c']
// for (i=1;i<=3;i++){
//     arr.push(i)
// } console.log(arr)

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr=[1,2,3]
// let newArr=[]
// for (i=arr.length-1;i>=0;i--){
//     newArr.push(arr[i])
// }console.log(newArr)

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr=[1,2,3]
// for (i=4;i<=6;i++){
//     arr.push(i)
// }
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//1 ВАРІАНТ [6,5,4,1,2,3]
// let arr=[1,2,3]
// for (let i=4;i<=6;i++){
//     arr.unshift(i)
// }console.log(arr)
// // 2 ВАРІАНТ[4,5,6,1,2,3]
// for (let i=6;i>=4;i--){
//     arr.unshift(i)
// }console.log(arr)

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr=['js', 'css', 'jq']
// let firstEll=arr.shift()
// console.log(firstEll);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr=['js', 'css', 'jq']
// let lastEll=arr.pop()
// console.log(lastEll)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr=[1, 2, 3, 4, 5,6]
//  let shortArr=arr.slice(3,5)
// console.log(shortArr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr=[1, 2, 3, 4, 5]
// let newArr=arr.slice(0,2)
// console.log(newArr)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arr=[1, 2, 3, 4, 5]
// arr.splice(1,2)
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr=[1, 2, 3, 4, 5]
// arr.splice(3,0,`a`,`b`,`c`)
// console.log(arr);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr=[1,5345,6546,23,5,6344,1313,435,362,53423]
// console.log(arr)
// for (i=0;i<arr.length;i++){
//     if (arr[i]%3==0){
//         console.log(arr[i])
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr=[15,345,6546,23,5,6344,1313,435,362,53423]
// let newArr=[]
// for (i=0;i<arr.length;i++){
//     newArr.push(arr[i])
//     console.log(newArr)
// }
// console.log(newArr)

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr=[15,345,6546,23,5,6344,1313,435,362,53423]
// let newArr=[]
// for (i=0;i<arr.length;i++){
//    newArr[i]=arr[i]
//     console.log(newArr)
// }
//
//

// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let arr=[2,17,13,6,22,31,45,66,100,-18]
//     1. перебрати його циклом while
// let i=0
// while (i<arr.length){
//     console.log(arr[i])
//     i++
// }
//     2. перебрати його циклом for
// for ( i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i=1
// while (i<arr.length){
//     console.log(arr[i])
//     i+=2
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for ( i = 1; i < arr.length; i+=2) {
//     console.log(arr[i]);
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i=0
// while (i<arr.length){
//     if (arr[i]%2==0){
//         console.log(arr[i])
//
//     }
//     i++
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// for (i=0;i<arr.length;i++){
//     if (arr[i]%3==0){
//         arr[i]=`okten`
//     }
// }console.log(arr)
// 8. вивести масив в зворотньому порядку.
// for (i=arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1
// створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.
// let arr=[]
// for (let i=0;;i++){
//     let num=Math.round(Math.random()*100)
//     if (num%2==0){
//         arr.push(num)
//     }
//     if (arr.length==50){
//         break
//     }
// }
// console.log(arr)
// 2. заповнити його 50 непарними числами за допомоги циклу.

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let arr= [];
// for(i=0;i<10;i++){
//    let a=Math.round(Math.random()*724)+8
//     arr[i]=a
// }
// console.log(arr)
// 2. вывести на консоль  каждый третий елемент
// for (i=3;i<arr.length;i+=3){
//     console.log(arr[i]);
// }
// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
// for (i=3;i<arr.length;i+=3){
//     if (arr[i]%2==0){
//         console.log(arr[i]);
//     }
//
// }
// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив..
// let newArr=[]
// for (i=3;i<arr.length;i+=3){
//     if (arr[i]%2==0){
//         newArr.push(arr[i]);
//     }
//
// }console.log(newArr)
// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// for (i=0;i<arr.length;i++){
//     if (arr[i+1]%2==0){
//         console.log(arr[i])
//     }
// }

// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let arr=[100,250,50,168,120,345,188]
// let sum=0
// for (i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }
// let everage=sum/arr.length
// console.log(everage);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив
// let arr= [];
// for(i=0;i<10;i++){
//    let a=Math.round(Math.random()*724)+8
//     arr[i]=a
// }
// console.log(arr)
// let newArr=[]
// for (i=0;i<arr.length;i++){
//     newArr[i]=arr[i]*5
// }console.log(newArr)

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
// let arr=[1,`vova`,true,undefined,null,3,7,`bartativ`,78,false]
// let newArr=[]
// for (i=0;i<arr.length;i++){
//     if (typeof arr[i]=="number"){
//         newArr.push(arr[i])
//     }
// }console.log(newArr)

