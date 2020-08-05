import '../styles/styles.css'
import 'lazysizes'

const portfolioitems = document.querySelectorAll(".content__item")

portfolioitems.forEach(portfolioitems => {
    portfolioitems.addEventListener('mouseover', () => {
        console.log(portfolioitems.childNodes[1].classList);
        portfolioitems.childNodes[1].classList.add('img-darken');
    })
    portfolioitems.addEventListener('mouseout', () => {
        console.log(portfolioitems.childNodes[1].classList);
        portfolioitems.childNodes[1].classList.remove('img-darken');
    })
})


if(module.hot){
    module.hot.accept()
}



