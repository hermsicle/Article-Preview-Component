const userContainer = document.getElementById('user-container')
const socials = document.getElementById('socials')
const shareBtns = document.querySelectorAll('.share-btn')

let isLinksActive = false

for(let i = 0; i < shareBtns.length; i++ ) {
    shareBtns[i].addEventListener('click', function() {
        this.classList.toggle('active')

        if(isLinksActive == false) {
            socials.style.display = 'flex'
            if(window.innerWidth >= 900) {
                userContainer.style.display = 'flex'
            } else {
                userContainer.style.display = 'none'
            }
            isLinksActive = true
        } else if (isLinksActive == true) {
            socials.style.display = 'none'
            userContainer.style.display = 'flex'
            isLinksActive = false
        }

    })
}

window.addEventListener('resize' , () => {
    if(window.innerWidth >= '900') {
        userContainer.style.display = 'flex'
    }
    if(window.innerWidth <= 900 && isLinksActive) {
        userContainer.style.display = 'none'
    }
})

