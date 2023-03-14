let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left= value * 0.25 + 'px';
    moon.style.top= value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})

const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

//toggle var
var fade_state = true;
//on btn click
function fade() {
  //get the button and div
  let div = document.getElementById("DsT");
  let btn = document.getElementById("fade");
  //if faded in or out
  if (fade_state == true) {
    //trigers animation
    div.style.animation = "fade-out 2s forwards";
    //sets the text
    btn.innerHTML = "fade-in";
    //sets fade_state
    fade_state = false;
  } else if (fade_state == false) {
    //trigers animation
    div.style.animation = "fade-in 2s forwards";
    //sets the text
    btn.innerHTML = "fade-out";
    //sets fade_state
    fade_state = true;
  }
}