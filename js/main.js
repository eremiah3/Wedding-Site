// toggle background active
const slideNavigator = name => {
    let slides = document.querySelectorAll('.bg-slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
        if (slide.classList.contains(name)) {
            slide.classList.add('active');
        }
    });
};

// switch background
window.addEventListener('load', () => {
 const slideBtnList = document.querySelectorAll('.slide-btn');
 slideBtnList.forEach(btn => {
  btn.addEventListener('click', function (e) {
   e.preventDefault();
   slideBtnList.forEach(el => {
    el.classList.remove('active');
   });
   this.classList.add('active');
   slideNavigator(this.getAttribute('data-target'));
  });
 });
});

// activate sections
const sectionNavigator = name => {
    let sections = document.querySelectorAll('section');
    let header = document.querySelector('header');
    sections.forEach(section => {
        section.classList.remove('section-show');
        if(section.classList.contains(name)) {
            section.classList.add('section-show');
            header.classList.add('active');
        }
    });
};

// navigation to sections
window.addEventListener('load', () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(nav => {
        nav.addEventListener('click', function (e) {
            e.preventDefault();
            navList.forEach(el => {
               el.classList.remove('active')
            });
            this.classList.add('active');
            sectionNavigator(this.getAttribute('data-target'));
            screen.width < 768 && toggleMenu();
        });
    });
});

// reset header to initial state 
const resetHeader = () => {
    let header = document.querySelector('header');
    header.classList.remove('active')
};

// initial navigation
const initNavigation = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'about') {
            el.classList.add('active');
        }
    });
    sectionNavigator('about');
};

// toggle menu
const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile')
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
};



/* -- Created by Tivotal -- */

function getTimeRemaining(et) {
    var t = Date.parse(et) - Date.parse(new Date());
  
    var seconds = Math.floor((t / 1000) % 60);
  
    var minutes = Math.floor((t / 1000 / 60) % 60);
  
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
  
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  
  function initializeTimer(className, endTime) {
    var clock = document.querySelector(`.${className}`);
  
    var daySpan = clock.querySelector(".days");
    var hourSpan = clock.querySelector(".hours");
    var minSpan = clock.querySelector(".minutes");
    var secSpan = clock.querySelector(".seconds");
  
    function updateTime() {
      var t = getTimeRemaining(endTime);
  
      daySpan.innerHTML = t.days;
      hourSpan.innerHTML = ("0" + t.hours).slice(-2);
      minSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secSpan.innerHTML = ("0" + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  
    updateTime();
    var timeInterval = setInterval(updateTime, 1000);
  }
  
  var deadLine = new Date("Nov 23, 2024 11:00:00");
  
  initializeTimer("wrapper", deadLine);
  