const   hourArrow   = document.querySelector('.h'),
        minuteArrow = document.querySelector('.m'),
        secondArrow = document.querySelector('.s'),
        hoursBox    = document.querySelector('.hours'),
        minutesBox  = document.querySelector('.minutes');
        
function watch() {
    
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours   = time.getHours()
        
        minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
        secondArrow.style = `transform: rotate(${seconds * 6}deg)`
        hourArrow.style = `transform: rotate(${hours * 30}deg)`
        
        hoursBox.innerHTML = hours < 10 ? '0' + hours : hours
        minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
        
        setTimeout(() => watch(), 1000)
        
}
watch()


// рекурсия - это когда функция запускает саму себя внутри
// setTimeout() - это функция которая запускает что то с указанной задержкой

// let i = 0;

// function qwerty() {
//     if(i < 10) {
//         console.log(i);
//         i++
//         setTimeout(() =>  qwerty(), 1000)
       
//     }
// }
// qwerty()


const links = document.querySelectorAll('.tabsItem') 
const tabs  = document.querySelectorAll('.tabsContentItem') 

console.log(links);

links.forEach((item,i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}



function findSmall(arr) {
    
    arr.sort((a,b) => a - b)
    return arr[arr.length - 1]
}

console.log(findSmall([34,15,88,2]));
console.log(findSmall([34,-345,-1,100]));


console.log(links);

links.forEach((item,i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}


const   hoursBlock   = document.querySelector('.stopwatch__hours'),
        minutesBlock = document.querySelector('.stopwatch__minutes'),
        secondsBlock = document.querySelector('.stopwatch__seconds'),
        btn          = document.querySelector('.stopwatch__btn'),
        span         = document.querySelector('.tabsLink__span')
        
btn.addEventListener('click', () => {
    if(btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')
        let i = 0
        setTimeout(() => secundomer(btn, i), 1000)
    }else if(btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')
    }else {
        btn.innerHTML = 'start'
        span.classList.remove('active_clear')
        minutesBlock.innerHTML =  secondsBlock.innerHTML = hoursBlock.innerHTML = 0
    }
})


function secundomer(btn, i) {
    if(btn.innerHTML == 'stop') {
        if(i == 59) {
            i = 0
            secondsBlock.innerHTML = i
            if(minutesBlock.innerHTML == 59) {
                minutesBlock.innerHTML = 0
                hoursBlock.innerHTML++
            }else {
                minutesBlock.innerHTML++
            }
        }else {
            i++
            secondsBlock.innerHTML = i
        }
        setTimeout(() => secundomer(btn, i), 100)
    }
}