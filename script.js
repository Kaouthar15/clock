const one= document.querySelector('.one')
const two= document.querySelector('.two')
const three= document.querySelector('.three')
const four= document.querySelector('.four')
const five= document.querySelector('.five')
const six= document.querySelector('.six')
const seven= document.querySelector('.seven')
const eight= document.querySelector('.eight')
const nine= document.querySelector('.nine')
const ten=document.querySelector('.ten')
const eleven= document.querySelector('.eleven')
const twelve= document.querySelector('.twelve') 
// 
// fonctionnement de la montre
const minutes=document.querySelector('.minutes');
const hours=document.querySelector('.hours');
const seconds=document.querySelector('.seconds');
const root=document.querySelector(':root');
const dot=document.querySelector('.dot');
setInterval(() => {
  const date = new Date;
  const second= date.getSeconds()*6;
  const minute= date.getMinutes()*6;
  const hour= date.getHours()* 30; 
  seconds.style.transform = `rotate(${second}deg)`;
  minutes.style.transform = `rotate(${minute}deg)`;
  hours.style.transform = `rotate(${hour}deg)`;
},1000) 
//light mode-dark mode 
const toggle= document.getElementById('toggleDark');
const body= document.querySelector('.container');

toggle.addEventListener('click', function()
{
  this.classList.toggle('bi-moon-fill');  
  if(this.classList.toggle('bi-brightness-high-fill'))
  {
    body.style.fontSize='3em';
    body.style.background = '#091921'; 
    body.style.color ='#878484';
    body.style.transition= '1s'
    minutes.style.border=" 2px solid  #878484";
    hours.style.border=" 2px solid #878484";
    dot.style.color="#878484"
    one.innerHTML="13" 
    two.innerHTML="14"
    three.innerHTML="15"
    four.innerHTML="16"
    five.innerHTML="17"
    six.innerHTML="18"
    seven.innerHTML="19"
    eight.innerHTML="20"
    nine.innerHTML="21"
    ten.innerHTML="22";
    eleven.innerHTML="23";
    twelve.innerHTML="00" ; 
  }
  else
  {
    body.style.fontSize='3.5em'
    body.style.background = '#878484';
    body.style.color ='#091921';
    body.style.transition= '1s';
    minutes.style.border=" 2px solid #091921";
    hours.style.border=" 2px solid #091921";
    dot.style.color="#091921"
    one.innerHTML="1"
    two.innerHTML="2"
    three.innerHTML="3"
    four.innerHTML="4"
    five.innerHTML="5"
    six.innerHTML="6"
    seven.innerHTML="7"
    eight.innerHTML="8"
    nine.innerHTML="9"
    ten.innerHTML="10"
    eleven.innerHTML="11"
    twelve.innerHTML="12" 
  }
})









