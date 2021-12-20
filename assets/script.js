// js phan dang nhap dang ky 
const modal = document.querySelector('.modal')
const modalLg = document.querySelector('.modal-login')
const btnRegis = document.querySelector('.js-nav__item-dk')
const btnBack = document.querySelector('.js-btn-back')
const modalBody = document.querySelector('.js-modal__body')
const btnRegisLogin = document.querySelector('.js-btn__resis-login')
const btnbacklg = document.querySelector('.js-btn-back-login')
const modalBodylg =document.querySelector('.js-modal__body-login')
const btnLoginmain = document.querySelector('.js-btn-login-main')
const btnRegislg = document.querySelector('.js-btnRegis-login')
const btnRegisdone = document.querySelector(".js-Regis")

function showModal () {
    modal.classList.add('open')
}

function hideShowmodal () {
    modal.classList.remove('open')
}

btnRegis.addEventListener('click', showModal)
btnBack.addEventListener('click', hideShowmodal)
modal.addEventListener('click', hideShowmodal)
modalBody.addEventListener('click', function (e) {
    e.stopPropagation()
})

btnRegisLogin.addEventListener('click', function(){
    modalLg.classList.add('open')
    modal.classList.remove('open')
})

function backfromlogin() {
    modalLg.classList.remove('open')
}

btnbacklg.addEventListener('click', backfromlogin)
modalLg.addEventListener('click', backfromlogin)
modalBodylg.addEventListener('click', function (e) {
    e.stopPropagation();
})
btnLoginmain.addEventListener('click',function () {
    modalLg.classList.add('open')
})
btnRegislg.addEventListener('click', function() {
    modalLg.classList.remove('open')
    modal.classList.add('open')
})
// btnRegisdone.addEventListener('click', function () {
//     alert("Đăng kí tài khoản thành công, trang fake nên ko có gì cả :v")
// })

 // bam tha tim nhung ko chuyen trang 
 const thatim = document.querySelectorAll('.js-home-product-item__like');
 const chuyentrang = document.querySelectorAll('.js-home-product-item');

 for(let i=0; i<thatim.length; i++){     
         thatim[i].addEventListener('click', function(e) {
         if(thatim[i].classList.contains('home-product-item__like--liked') == false) {        
             thatim[i].classList.add('home-product-item__like--liked')
         } else {  
             thatim[i].classList.remove('home-product-item__like--liked')
         }
                    
     })   
     for(let j=0; j<chuyentrang.length; j++)
      chuyentrang[j].addEventListener('click', function() {
             window.location.href='#';
         })   
         thatim[i].addEventListener('click', function (e) {
                 e.stopPropagation();
             })          
 }
  
//  thasao cho cai 1 
const stars = document.querySelectorAll('.star');

for(let i = 0; i<stars.length; i++) {
    stars[i].addEventListener('click', function() {
        stars[i].classList.add('home-product-item_vote')
    })
}