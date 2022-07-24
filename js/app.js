AOS.init();

// pricing plan
let yearlyBtn = document.getElementById('yearlyBtn');
let monthlyBtn = document.getElementById('montylyBtn');
let professionalPrice = document.getElementById('professionalPrice');
let stadardPrice = document.getElementById('standardPrice');
let ultimatePrice = document.getElementById('ultimatePrice');

let yearlyBtnBG = yearlyBtn.style.backgroundColor = '#ffffff';
let yearlyBtnTextColor = yearlyBtn.style.color = '#000000';

yearlyBtn.addEventListener('click', changeEverything);
function changeEverything()
{
    console.log('clicked')
    yearlyBtn.style.backgroundColor = '#5956e9';
    yearlyBtn.style.color = '#ffffff'
    professionalPrice.innerHTML = '119.99';
    stadardPrice.innerHTML = '219.99';
    ultimatePrice.innerHTML = '519.99';

    monthlyBtn.style.backgroundColor = '#fff';
    monthlyBtn.style.color = '#000'
}
monthlyBtn.addEventListener('click', changeTheMonthlyPlan);
function changeTheMonthlyPlan(e){
    console.log('clicked2')
    monthlyBtn.style.backgroundColor = '#5956e9';
    monthlyBtn.style.color = '#ffffff'
    professionalPrice.innerHTML = '10.99';
    stadardPrice.innerHTML = '30.99';
    ultimatePrice.innerHTML = '59.99';

    yearlyBtn.style.backgroundColor = '#fff';
    yearlyBtn.style.color = '#000'
}
    
