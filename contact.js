// mobile toggle
const trigger = document.querySelector('.trigger');
const toggle = document.querySelector('.mobileToggle');
const mobileNav = document.querySelector('nav');
const navList = document.querySelector('div.navList');
const navPortfolio = document.querySelector('.navPortfolio');

trigger.addEventListener('click', function(){
  toggle.classList.toggle('active');
});

window.addEventListener('click', function(e){
  if (e.target !== trigger && e.target !== mobileNav && e.target !== navList &&  e.target !== navPortfolio) {
    mobileNav.classList.remove('active');
    toggle.classList.remove('active');
  }
});



// desktop portfolio nav toggle
const portfolioTrigger = document.querySelector('.navPortfolio');
const portfolioToggle = document.querySelector('.portfolioToggle');
const navBar = document.querySelector('nav');


portfolioTrigger.addEventListener('click', function(){
  portfolioToggle.classList.toggle('active');
  portfolioTrigger.classList.toggle('active');
});



window.onclick = function(event) {
  if (event.target !== portfolioTrigger) {
    portfolioToggle.classList.remove('active');
    portfolioTrigger.classList.remove('active');
  }
}



// parallax animation 
window.addEventListener('scroll', function(e) {

  const target = document.querySelectorAll('#scroll');


  var index = 0, length = target.length;
  for(index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;

    if(target[index].dataset.direction === 'vertical'){
      target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
    
    } else if (target[index].dataset.direction === 'horizontal') {
      var posX = window.pageYOffset * target[index].dataset.ratex;
      target[index].style.transform = 'translate3d('+pos+'px, 0px, 0px)';

    } else if (target[index].dataset.direction === 'opacityAndScale') {
      var posX = window.pageYOffset * target[index].dataset.ratex;
      target[index].style.opacity = 'calc(1 - '+pos+')';
      //target[index].style.transform = 'scale(calc(1 + '+pos+' * 0.3), calc(1 + '+pos+' * 0.3))';
    
    } else {
      return
    }
  }

});




// burger menu toggle
const nav = document.querySelector('nav');

trigger.addEventListener('click', function(){
  nav.classList.toggle('active');
});




// intersection observer
const portfolio = document.querySelector('.portfolio');
const animationLine = document.querySelectorAll('.lineAnimationContainer');
const sections = document.querySelectorAll('section');
const options = { 
  root: null, // it is the viewport.
  threshold: 0.15, // 0 to 1 scale.
  rootMargin: "-50px"
};
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      observer.unobserve(entry.target);
      entry.target.classList.toggle('active');
    }
  });
}, options);


sections.forEach(section => {
  observer.observe(section);
});


// scroll on click
const footerLogo = document.querySelector('div.logo');
const desktopLogo = document.querySelector('.desktopLogo');
const mobileLogo = document.querySelector('.mobileLogo');
const myWork = document.querySelector('button.myWork');
const portfolioSection = document.querySelector('#scroll.portfolio');

footerLogo.addEventListener('click', function(){
window.scrollTo({
  top:0,
  left:0,
  behavior: 'smooth'
});
});

desktopLogo.addEventListener('click', function(){
window.scrollTo({
  top:0,
  left:0,
  behavior: 'smooth'
});
});

mobileLogo.addEventListener('click', function(){
window.scrollTo({
  top:0,
  left:0,
  behavior: 'smooth'
});
});


/*
const mediaQuery01 = window.matchMedia("(max-width: 1024px) and (min-width: 651px)");
const mediaQuery02 = window.matchMedia("(max-width: 650px)");


const yOffset01 = -250; 
const y01 = portfolioSection.getBoundingClientRect().top + window.pageYOffset + yOffset01;

const yOffset02 = -170; 
const y02 = portfolioSection.getBoundingClientRect().top + window.pageYOffset + yOffset02;
*/


function navigateFourth(e) {
if (mediaQuery01.matches) {
  window.scrollTo({top: y01, behavior: 'smooth'});
} else if (mediaQuery02.matches) {
  window.scrollTo({top: y02, behavior: 'smooth'});
} else {
  portfolioSection.scrollIntoView({behavior: 'smooth', top:0});
}
}

const scrollUp = document.querySelector('.portfolioBelow');



// disable / enable contact button 
const submit = document.querySelector('button.contactButtonTwo');

function isEmpty() {
    const nameContainer = document.querySelector('input#name').value;
    const emailContainer = document.querySelector('input#email').value;
    const companyContainer = document.querySelector('input#company').value;
    const enquiryContainer = document.querySelector('input#enquiries').value;

    if (nameContainer !== '' && emailContainer !== '' && companyContainer !== '' && enquiryContainer !== '') {
        submit.classList.add('active');
    } else if (nameContainer == '' || emailContainer == '' || companyContainer == '' || enquiryContainer == '') {
        submit.classList.remove('active');
    }
}
isEmpty();