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
    


// contact form
let name = document.getElementById('name');
let email = document.getElementById('email');
let tel = document.getElementById('tel');

const freeQuoteBtn = document.getElementById('freeQuoteBtn');
freeQuoteBtn.addEventListener('click', statusUpdate);
function statusUpdate(e){
   if(name.value!='' && email.value!='' && tel.value!=''){
    document.getElementById('custom-toast').style.display = 'block';
    document.getElementById('custom-toast').style.color = '#21b321';
    document.getElementById('custom-toast').style.fontSize = '16px';

    document.getElementById('custom-toast').innerHTML = 'We recieved your information. Catch up with you soon.';
    document.getElementById('custom-toast').style.transition="all 0.3s linear";
    setTimeout(() => {
        const element = document.getElementById('custom-toast');
      
        element.style.display = 'none';
      
      }, 2500); 
    name.value = '';
    email.value = '';
    tel.value = '';


   }
   else{
    document.getElementById('custom-toast').style.display = 'block';
    document.getElementById('custom-toast').style.color = 'red';
    document.getElementById('custom-toast').style.fontSize = '16px';
    document.getElementById('custom-toast').style.transition="all 0.3s linear";

    document.getElementById('custom-toast').innerHTML = 'Required information missed';
    setTimeout(() => {
        const element = document.getElementById('custom-toast');
      
        
        element.style.display = 'none';
      
      }, 2500); 
    name.value = '';
    email.value = '';
    tel.value = '';

   }
}
//countUp plugin intialize
$('.counter').countUp({
  'time': 1000,
  'delay': 10
});