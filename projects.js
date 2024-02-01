var buttons = document.querySelectorAll('button')
var pjInfo = document.getElementsByClassName('details')

for( let i =0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showProjectInfo)
}

function showProjectInfo(event) {
    let id = event.target.className
    
    if (pjInfo[id] &&  pjInfo[id].style) {
        if( pjInfo[id].style.display === 'none' || pjInfo[id].style.display === '') {
            pjInfo[id].style.display = 'block'
        }
        else{
            pjInfo[id].style.display = 'none'
        }
    }
}
