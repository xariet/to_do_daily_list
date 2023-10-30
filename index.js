const Moninput=document.querySelector('.Moninp');
const Monbutton = document.querySelector('.Monbtn');
const Monlist = document.querySelector('.Monlist');

Monbutton.addEventListener('click', ()=>{

const item = document.createElement('li');
item.innerText=Moninput.value;
if (Moninput.value.length === 0) {
    return false;
    }
item.classList.add('styleList');
Monlist.appendChild(item);
Moninput.value ='';
item.addEventListener('click', ()=>{
item.classList.add('completed');
})
item.addEventListener('dblclick', ()=>
{
    Monlist.removeChild(item);
})
})

const Tusinput=document.querySelector('.Tusinp');
const Tusbutton = document.querySelector('.Tusbtn');
const Tuslist = document.querySelector('.Tuslist');

Tusbutton.addEventListener('click', ()=>{

const item = document.createElement('li');
item.innerText=Tusinput.value;
if (Tusinput.value.length === 0) {
    return false;
    }
item.classList.add('styleList');
Tuslist.appendChild(item);
Tusinput.value ='';
item.addEventListener('click', ()=>{
item.classList.add('completed');
})
item.addEventListener('dblclick', ()=>
{
    Tuslist.removeChild(item);
})
})

const Winput=document.querySelector('.Winp');
const Wbutton = document.querySelector('.Wbtn');
const Wlist = document.querySelector('.Wlist');

Wbutton.addEventListener('click', ()=>{

const item = document.createElement('li');
item.innerText=Winput.value;
if (Winput.value.length === 0) {
    return false;
    }
item.classList.add('styleList');
Wlist.appendChild(item);
Winput.value ='';
item.addEventListener('click', ()=>{
item.classList.add('completed');
})
item.addEventListener('dblclick', ()=>
{
    Wlist.removeChild(item);
})
})

const Tinput=document.querySelector('.Tinp');
const Tbutton = document.querySelector('.Tbtn');
const Tlist = document.querySelector('.Tlist');

Tbutton.addEventListener('click', ()=>{

const item = document.createElement('li');
item.innerText=Tinput.value;
if (Tinput.value.length === 0) {
    return false;
    }
item.classList.add('styleList');
Tlist.appendChild(item);
Tinput.value ='';
item.addEventListener('click', ()=>{
item.classList.add('completed');
})
item.addEventListener('dblclick', ()=>
{
    Tlist.removeChild(item);
})
})

const Finput=document.querySelector('.Finp');
const Fbutton = document.querySelector('.Fbtn');
const Flist = document.querySelector('.Flist');

Fbutton.addEventListener('click', ()=>{

const item = document.createElement('li');
item.innerText=Finput.value;
if (Finput.value.length === 0) {
    return false;
    }
item.classList.add('styleList');
Flist.appendChild(item);
Finput.value ='';
item.addEventListener('click', ()=>{
item.classList.add('completed');
})
item.addEventListener('dblclick', ()=>
{
    Flist.removeChild(item);
})
})