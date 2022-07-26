let darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', makeEverythingDark);
function makeEverythingDark() {
    document.getElementsByTagName('body')[0].style.background = '#000';
    document.getElementsByTagName('body')[0].style.color = '#000000';
    let header = document.getElementById('header');
    let logo = document.getElementsByClassName('logo')[0];
    header.style.background = '#212121';
    header.style.color = '#ffffff';
    logo.style.color = 'white';
    document.getElementsByClassName('offcanvas')[0].style.backgroundColor = '#212121';
    document.getElementById('floatingInputSearch').style.background = '#000';
    document.getElementById('floatingInputSearch').style.boxShadow = 'none';
    const darkHeading = document.querySelectorAll('.darkHeading');
    
    darkHeading[0].style.color = '#fff';
    darkHeading[1].style.color = '#fff';
    darkHeading[2].style.color = '#fff';
    darkHeading[3].style.color = '#fff';
    darkHeading[4].style.color = '#fff';
    darkHeading[5].style.color = '#fff';
    darkHeading[6].style.color = '#fff'; 
    darkHeading[7].style.color = '#fff'; 
    darkHeading[8].style.color = '#fff'; 
    darkHeading[9].style.color = '#fff'; 
    darkHeading[10].style.color = '#fff'; 

    darkHeading[11].style.color = '#fff'; 
    darkHeading[12].style.color = '#fff'; 
    darkHeading[13].style.color = '#fff'; 
    darkHeading[14].style.color = '#fff'; 
    darkHeading[15].style.color = '#fff'; 
    darkHeading[16].style.color = '#fff'; 
    darkHeading[17].style.color = '#fff'; 
    darkHeading[18].style.color = '#fff'; 
    darkHeading[19].style.color = '#fff'; 
    darkHeading[20].style.color = '#fff'; 
    darkHeading[21].style.color = '#fff'; 
    darkHeading[22].style.color = '#fff'; 
    darkHeading[23].style.color = '#fff'; 
    darkHeading[24].style.color = '#fff';
    darkHeading[25].style.color = '#fff'; 
    darkHeading[26].style.color = '#fff'; 
    darkHeading[27].style.color = '#fff'; 
    darkHeading[28].style.color = '#fff'; 
    darkHeading[29].style.color = '#fff'; 
    darkHeading[30].style.color = '#fff'; 
    darkHeading[31].style.color = '#fff'; 
    darkHeading[32].style.color = '#fff'; 
    darkHeading[33].style.color = '#fff'; 
    darkHeading[34].style.color = '#fff'; 
    darkHeading[35].style.color = '#fff'; 
    darkHeading[36].style.color = '#fff'; 
    darkHeading[37].style.color = '#fff'; 
    darkHeading[38].style.color = '#fff'; 
    darkHeading[39].style.color = '#fff'; 

    darkHeading[40].style.color = '#fff'; 
    darkHeading[41].style.color = '#fff'; 
    darkHeading[42].style.color = '#fff'; 
    darkHeading[43].style.color = '#fff'; 
    darkHeading[44].style.color = '#fff'; 
    darkHeading[45].style.color = '#fff'; 
    darkHeading[46].style.color = '#fff'; 
    darkHeading[47].style.color = '#fff'; 

    darkHeading[48].style.color = '#fff'; 
    darkHeading[49].style.color = '#fff'; 
    darkHeading[50].style.color = '#fff'; 
    darkHeading[51].style.color = '#fff'; 
    darkHeading[52].style.color = '#fff'; 
    darkHeading[53].style.color = '#fff'; 
    darkHeading[54].style.color = '#fff'; 
    darkHeading[55].style.color = '#fff'; 
    darkHeading[56].style.color = '#fff'; 
    darkHeading[57].style.color = '#fff'; 
    darkHeading[58].style.color = '#fff'; 
    darkHeading[59].style.color = '#fff'; 
    darkHeading[60].style.color = '#fff'; 
    darkHeading[61].style.color = '#fff'; 
    // case study 
    let caseStudy1 = document.getElementById('caseStudy1');
    let caseStudy2 = document.getElementById('caseStudy2');
    let caseStudy3 = document.getElementById('caseStudy3');
    caseStudy1.style.backgroundColor = '#000000';
    caseStudy2.style.backgroundColor = '#000000';
    caseStudy3.style.backgroundColor = '#000000';


    //about us
    document.getElementById('aboutUs').style.background = '#27272E';
    document.getElementsByClassName('contact-form')[0].style.background = '#212121';

    document.getElementsByClassName('aboutus-bubble')[0].style.filter = 'brightness(0.3)';

   //pricing plan
   document.getElementById('pricingPlan').style.background = '#292930';
   document.getElementsByClassName('pricing-table')[0].style.background = '#212121';
   document.getElementsByClassName('pricing-table')[1].style.background = '#212121';
   document.getElementsByClassName('pricing-table')[2].style.background = '#212121';
   
   document.getElementsByTagName('footer')[0].style.background = '#212121';
//    call to action
    document.getElementById('callToAction').style.background = '#292930';
    document.getElementsByClassName('bubble12')[0].style.filter = 'brightness(0.5)';
//    footer
    document.getElementsByClassName('noBoxShadow')[0].style.boxShadow = 'none';
    document.getElementsByClassName('noBoxShadow')[1].style.boxShadow = 'none';
}

