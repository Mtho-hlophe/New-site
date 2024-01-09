
var end = new Date('02/19/2024 10:1 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
    }
 var days = Math.floor(distance / _day);
 var hours = Math.floor((distance % _day) / _hour);
 var minutes = Math.floor((distance % _hour) / _minute);
 var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown').innerHTML = days + 'days ';
    document.getElementById('countdown').innerHTML += hours + 'hrs ';
    document.getElementById('countdown').innerHTML += minutes + 'mins ';
    document.getElementById('countdown').innerHTML += seconds + 'secs';
}

    timer = setInterval(showRemaining, 1000);


// Added new compatibility code to show and hide divs
//when clicking the ABOUT button

const aboutBtn = document.getElementById('aboutBtn');
const skills = document.querySelector('.skills');
let firstDiv = document.querySelector('.firstDiv');

let h3Tags = document.querySelectorAll('h3');
let homePageBtn = document.querySelector('#homePage')
const footer = document.querySelector('.footer')
const aboutDiv = document.querySelectorAll('.content1')

aboutBtn.addEventListener('click', showAboutOnly)

function showAboutOnly(){
    
       skills.style.display ='none'
      // firstDiv.style.display = 'none'
        
        h3Tags.forEach(h3Tags=>{h3Tags.style.display = 'none'})
        
        footer.style.display = 'none'
        homePageBtn.style.display = 'block'
        
        for(let i =0; i<aboutDiv.length; i++) {
        aboutDiv[1].style.marginTop = '0px'
        //aboutDiv[0].style.opacity = '0'
        aboutDiv[0].style.display = 'none'
        } 
        //ul.style.display = 'none'
}

homePageBtn.addEventListener('click', showHiddenDivs)

function showHiddenDivs() {
    
        skills.style.display ='flex'
        //firstDiv.style.display = 'inline'
        
        h3Tags.forEach(h3Tags=>{h3Tags.style.display = 'block'})
        
        footer.style.display = 'block'
        homePageBtn.style.display = 'none'
        
        for(let i =0; i<aboutDiv.length; i++) {
        aboutDiv[1].style.marginTop = '40px'
        //aboutDiv[0].style.opacity = '1'
        aboutDiv[0].style.display = 'flex'
        }
        showUl()
}
const menu = document.querySelector('#menu')
const ul = document.querySelector('ul')

menu.addEventListener('click', showUl)

function showUl() {
    if(ul.style.display === 'none') {
        ul.style.display = 'flex'
    }else {
        ul.style.display = 'none'
    }
}
ul.addEventListener('click', ()=>showUl)

const projectsBtn = document.querySelector('#projectsBtn')

projectsBtn.addEventListener('click', ()=>{
    window.open('https://gubevu.netlify.app/projects')
})
    
