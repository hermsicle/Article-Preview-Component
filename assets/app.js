const shareBtn2 = document.getElementById('share-btn-2')
const userContainer = document.getElementById('user-container')
const socials = document.getElementById('socials')

const shareBtns = document.querySelectorAll('.share-btn')

let isLinksActive = false
let isMobile = false

for(let i = 0; i < shareBtns.length; i++ ) {
    shareBtns[i].addEventListener('click', function() {

        this.classList.toggle('active')

        if(isLinksActive == false) {
            socials.style.display = 'flex'
            isLinksActive = true
        } else {
            socials.style.display = 'none'
            isLinksActive = false
        }

    })
}

