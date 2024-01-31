$(document).ready(function(){
    $('.switch').click(function(){
$('.menu').toggleClass('visible');
    })
});

const wrapper = document.querySelector('.wrapper');
const modal1= document.getElementById('modal1');
const modal2= document.getElementById('modal2');
const modal3= document.getElementById('modal3');
const modal4 = document.getElementById('modal4');

document.getElementById('handleOpenModalButton').addEventListener('click', () => {
    wrapper.classList.add('hidden');
    modal1.classList.remove('hidden');
    console.log(wrapper);
    console.log(modal1);
})

document.getElementById('close-modal-1').addEventListener('click', () => {
    wrapper.classList.remove('hidden');
    modal1.classList.add('hidden');
})
document.getElementById('close-modal-2').addEventListener('click', () => {
    wrapper.classList.remove('hidden');
    modal2.classList.add('hidden');
})
document.getElementById('close-modal-3').addEventListener('click', () => {
    wrapper.classList.remove('hidden');
    modal3.classList.add('hidden');
})
document.getElementById('close-modal-4').addEventListener('click', () => {
    wrapper.classList.remove('hidden');
    modal4.classList.add('hidden');
})

let answer = {};

document.querySelectorAll('.answer1').forEach((ans) => {
    ans.addEventListener('click', (e) => {
        answer.area = e.target.innerText;
        modal1.classList.add('hidden');
        modal2.classList.remove('hidden');
    })
});
document.querySelectorAll('.answer2').forEach((ans) => {
    ans.addEventListener('click', (e) => {
        answer.floors = e.target.innerText;
        modal2.classList.add('hidden');
        modal3.classList.remove('hidden');
    })
});
document.querySelectorAll('.answer3').forEach((ans) => {
    ans.addEventListener('click', (e) => {
        answer.add = e.target.innerText;
        modal3.classList.add('hidden');
        modal4.classList.remove('hidden');
    })
});
