function smoothSectionOpen() {
    document.addEventListener('DOMContentLoaded', () => {
        const menuLinkCollection = document.querySelectorAll(`[href*='#']`)

        for (let item of menuLinkCollection) {
            item.addEventListener('click', (e) => {
                e.preventDefault()

                if (item.hash.length) {
                    const block = document.querySelector(item.hash)

                    block.scrollIntoView({behavior: "smooth"})
                }
            })
        }
    })
}
smoothSectionOpen()

function startFormPopUp() {
    const popUpFormBlock = document.querySelector('.pop-up--form')
    const buttonCollection = document.querySelectorAll('button')
    for (let item of buttonCollection) {
        item.addEventListener('click', () => {
            popUpFormBlock.classList.add('pop-up--form--active')


        })
    }
    closePopupOnClick(popUpFormBlock, 'pop-up--form--active')
    startFeedbackPopup(popUpFormBlock)
}
startFormPopUp()

function startFeedbackPopup(popUpFormBlock) {
    const form = document.querySelector('.pop-up__form')

    const popUpFeedbackBlock = document.querySelector('.pop-up--feedback')

    form.addEventListener("submit", (event) => {
        event.preventDefault()


        popUpFormBlock.classList.remove('pop-up--form--active')
        popUpFeedbackBlock.classList.add('pop-up--feedback--active')

        setTimeout(() => {
            popUpFeedbackBlock.classList.remove('pop-up--feedback--active')
        }, 3000)
    })
    closePopupOnClick(popUpFeedbackBlock, 'pop-up--feedback--active')


}
startFeedbackPopup()

function closePopupOnClick(popUpItem, className) {
    document.addEventListener('click', (event) => {

        if (event.target.classList.contains('pop-up')) {
            popUpItem.classList.remove(className)

        }
    })
}


function checkInputValidity() {

    document.addEventListener('DOMContentLoaded', () => {
        const numberInput = document.getElementById('number')
        const nameInput = document.getElementById('name')
        const phoneMask = {
            mask: '+46 000 000 000'
        }
        IMask(numberInput, phoneMask)

        nameInput.addEventListener('input', () => {
            nameInput.value = nameInput.value.replace(/\d+/, '')
        })
    })
}

checkInputValidity()


function burgerMenu() {
    const burgerButton = document.querySelector('.burger')
    const navMenu = document.querySelector('.nav-menu')

    burgerButton.addEventListener('click',()=>{
        burgerButton.classList.toggle('burger--active')
        navMenu.classList.toggle('nav-menu--active')
    })

    document.addEventListener('click',(event)=>{

        if(!event.target.closest('.burger') && !event.target.closest('.nav-menu')){
            burgerButton.classList.remove('burger--active')
            navMenu.classList.remove('nav-menu--active')
        }
    })

}
burgerMenu()

function updateHeader() {
    const header = document.querySelector('.header')

    document.addEventListener('scroll',(event)=>{
        if(window.scrollY > 300)
            header.classList.add('header--active')
        else header.classList.remove('header--active')
    })
}

updateHeader()