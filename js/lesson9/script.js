// // let money=0
// // function clearHouse(isJobDone,cb) {
// //     setTimeout(()=>{
// //         if (isJobDone){
// //             money=500
// //             cb(null,money)
// //         }else {
// //             cb(`ERRORRRRRR`)
// //         }
// //     },1000)
// // }
// // function byJeans(reward,cb) {
// //     setTimeout(()=>{
// //         if (reward<200){
// //             cb(`WROOOONG`)
// //         }else {
// //             reward=reward-200
// //             cb(null,reward)
// //         }
// //     },2000)
// // }
// // function goEat(reward,cb){
// //     if (reward<100){
// //         cb(`NO money`)
// //     }else {
// //         cb(null,`MMM...Tasty`)
// //     }
// // }
// //
// //
// // clearHouse(true,(err,reward)=>{
// //     if (err){
// //         console.log(err)
// //     }else {
// //         console.log(`HOHO..I HAVE `+reward)
// //         byJeans(reward,(err,change)=>{
// //             if (err){
// //                 console.log(err)
// //             }else {
// //                 console.log(`WOW.. I have just  `+change)
// //                 goEat(change,(err,mon)=>{
// //                     if (err){
// //                         console.log(err)
// //                     }else {
// //                         console.log(mon)
// //                     }
// //                 })
// //             }
// //         })
// //
// //     }
// // })
//
//
function getUp(isGet,cb){
    setTimeout(()=>{
        if (isGet){
            let time=+prompt(`Коли проснувся`)
                cb(null,time)
        }else {
            cb(`ТИ ПРОСПАВ ДЕНЬ`)
        }
    },1000)
}

function eatBreakfast(time,cb) {
    setTimeout(()=>{
        if (time>8){
            cb(`ТИ проспав і залишився без cніданку`)
        }else {
            time=time+0.30
            if (time-0.6>=Math.floor(time)){
                time=time-0.6+1
                time= +time.toFixed(2)
            }
            cb(null,time)
        }
    },1000)
}

function wash(time,cb) {
    setTimeout(()=>{
        if (time>8.30){
            cb(`Часу не залишилось...Тобі час поспішити на роботу`)
        }else {
            time=time+0.10
            if (time-0.6>=Math.floor(time)){
                time=time-0.6+1
                time= +time.toFixed(2)
            }
            cb(null,time)
        }
    },1000)
}

function goWork(time,cb) {
    setTimeout(()=>{
        let  car = confirm(`Їдеш на робту машиною?`)
        if (car) {
            time = time + 0.40
            if (time - 0.6 >= Math.floor(time)) {
                time = time - 0.6 + 1
                time = +time.toFixed(2)
            }
            cb(null, time)
        }else {
            cb(`Мусиш йти на маршутку`)
        }
    },1000)
}

function work(time,cb){
    setTimeout(()=>{
        if (time>10){
            cb(`Ти запізнився`)
        }else {
            time = 18
            cb(null,time)
        }
    },1000)
}

function goHome(time,cb){
    setTimeout(()=>{
        let car=confirm(`Їдеш додому машиною?`)
        if (car){
            time = time + 0.40
            if (time - 0.6 >= Math.floor(time)) {
                time = time - 0.6 + 1
                time = +time.toFixed(2)
            }
            cb(null, time)
        }else {
            cb(`Мусиш йти на маршутку`)
        }
    },1000)
}

function eatDinner(time,cb){
    setTimeout(()=>{
        if (time>21){
            cb(`Вже пізно..Ти не повечеряв`)
        }else {
            time=time+0.30
            if (time-0.6>=Math.floor(time)){
                time=time-0.6+1
                time= +time.toFixed(2)
            }
            cb(null, time)
        }
    },1000)
}

function eatDinner(time,cb){
    setTimeout(()=>{
        if (time>22){
            cb(`Вже пізно..Ти не повечеряв`)
        }else {
            time=time+0.30
            if (time-0.6>=Math.floor(time)){
                time=time-0.6+1
                time= +time.toFixed(2)
            }
            cb(null, time)
        }
    },1000)
}

function goWalking(time,cb){
    setTimeout(()=>{
        if (time>22){
            cb(`Вже пізно..Ти йдеш спати`)
        }else {
            let walk=+prompt(`Скільки часу гуляєш?`)
            walk=walk*0.01
            time=time+walk
            if (time-0.6>=Math.floor(time)){
                time=time-0.6+1
                time= +time.toFixed(2)
            }
            cb(null, time)
        }
    },1000)
}

function goToBed(time,cb){
    setTimeout(()=>{
        if (time<22){
            cb(`Ще не пізно..Ти можеш піти відпочити `)
        }else {
            cb(null,time)
        }
    },1000)
}

getUp(true,(err,getUpTime)=>{
    if (err){
        console.log(err)
    }else{
        console.log(`ТИ проснувся...Зараз  `+getUpTime.toFixed(2))
        eatBreakfast(getUpTime,(err,eatBreakfastTime)=>{
            if (err){
                console.log(err)
            }else {
                console.log(`Ти поснідав...Зараз `+ eatBreakfastTime.toFixed(2))
                wash(eatBreakfastTime,(err,washTime)=>{
                    if (err){
                        console.log(err)
                    }else {
                        console.log(`Ти вмився...Зараз `+washTime.toFixed(2))
                        goWork(washTime,(err,goWorkTime)=>{
                            if (err){
                                console.log(err)
                            }else {
                                console.log(`Ти добрався на роботу в `+goWorkTime.toFixed(2))
                                work(goWorkTime,(err,workTime)=>{
                                    if (err){
                                        console.log(err)
                                    }else {
                                        console.log(`Ти провів час на роботі...Зараз `+workTime.toFixed(2))
                                        goHome(workTime,(err,homeTime)=>{
                                            if (err){
                                                console.log(err)
                                            }else {
                                                console.log(`Ти вже вдома..Зараз `+homeTime.toFixed(2))
                                                eatDinner(homeTime,(err,eatTime)=>{
                                                    if (err){
                                                        console.log(err)
                                                    }else {
                                                        console.log(`Ти повечеряв...Зараз `+eatTime.toFixed(2))
                                                        goWalking(eatTime,(err,walkTime)=>{
                                                            if (err){
                                                                console.log(err)
                                                            }else {
                                                                console.log(`Ти погуляв...Зараз `+walkTime.toFixed(2))
                                                                goToBed(walkTime,(err,bedTime)=>{
                                                                    if (err){
                                                                        console.log(err+`зараз лише `+walkTime.toFixed(2))
                                                                        walkTime=walkTime+1
                                                                        goToBed(walkTime,(err,bedTime)=>{
                                                                            if (err){
                                                                                console.log(err)
                                                                            }else {
                                                                                console.log(`Ти пішов спати в`+ bedTime.toFixed(2))
                                                                            }
                                                                        })
                                                                    }else {
                                                                        console.log(`Ти пішов спати в`+ bedTime.toFixed(2))
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
