// // - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

//ГОДИННИК ПРАЦЮЄ ДЛЯ БУДЬ-ЯКОГО ЧАСУ
let Hours=+prompt('ENTER HOURS')
let Minutes=+prompt('ENTER MINUTES')
let Seconds=+prompt('ENTER SECONDS')
if (Seconds>=60) {
    let z = Math.round(Seconds / 60)
    Minutes = Minutes + z
    let u = Seconds % 60
    Seconds = u
}

if (Minutes>=60) {
    let x = Math.round(Minutes / 60)
    Hours = Hours + x
    let y = Minutes % 60
    Minutes = y
}
if (Minutes==0 && Seconds==0){
    document.write(Hours,' ','hours','::',Minutes,' ','min','::',Seconds,' ','sec')
    document.write('<br>')
}
if (Seconds==0 && Minutes!=0){
    document.write(Hours,' ','hours','::',Minutes,' ','min','::',Seconds,' ','sec')
    document.write('<br>')
}
if (Seconds>0){
    for (let sec=Seconds;sec>=0;sec--){
        console.log(Hours,'::',Minutes,'::',sec)
        document.write(Hours,' ','hours','::',Minutes,' ','min','::',sec,' ','sec')
        document.write('<br>')
    }
}
if (Minutes>0){
    for (let min=Minutes-1;min>=0;min--){
        for (let sec=60-1;sec>=0;sec--){
            console.log(Hours,'::',min,'::',sec)
            document.write(Hours,' ','hours','::',min,' ','min','::',sec,' ','sec')
            document.write('<br>')


        }
    }
}

for (let hour=Hours-1;hour>=0;hour--){
    for (let min=59;min>=0;min--){
        if (Minutes==0 && Seconds==0){
        }
        for (let sec=59;sec>=0;sec--){
            console.log(hour,'::',min,'::',sec)
            document.write(hour,' ','hours','::',min,' ','min','::',sec,' ','sec')
            document.write('<br>')


        }
    }
}

