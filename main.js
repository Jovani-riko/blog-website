// interactive dropdown menus


console.log("JavaScript is linked successfully!");

document.addEventListener('DOMContentLoaded', () => {

    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        dropdownLink.addEventListener('click', (Event) => {

        })
    })



})




let bill = 10.25 + 3.99 + 7.15;
let tip = 0.15*bill;
let total=bill+tip
console.log(total)

//stupid ass you could have just multipllyyy it by 1.15 dedeb

const price = 15;
const money = 25;

if(money>price){
    console.log('you got the money and just buy the shuit');}
    else if(money = price) {
        console.log('think on it a little bit');}
    else {
        console.log('cheap basterd!');}


let a = 5;
let b = a % 2;
if (b === 0)
    console.log("the number was even");
else console.log("the number is odd");

const um = 1;

switch (um) {
    case 1:
        console.log('1st');




}

if (num === 1){
    console.log('choice is 1');
}
else if (num === 2){
    console.log('choice is 2')
}

else if (num === 3){
    console.log('choice is 3')
}

else if (num === 4){
    console.log('choice is 4')
}

else if (num === 5){
    console.log('choice is 5')
}

else if (num === 6){
    console.log('choice is 6')
}



let x = 0;

while (x <= 10){
    console.log(x);
    x = x + 1;
}



for (let y = 0; y < 6; y+=1){
    console.log('y is ' + y)
}

for (var x = 0; x < 5; x+=1){
    for(var y = 0; y <14; y+=1){
        for (var z =0; z <3; z+=1){
            console.log(x , ' ', y, ' ', z);
        }
    }
}


for (var x = 0; x <= 9; x++){
    console.log('hello ' + x);
}



function reverse (x){

    let y = '';

    for (let i = x.length; i >= 1; i -= 1 ){
        y += x[i]
    }
    return y;
}



function rev (q){
    let w = '';
    for (let i = q.length - 1; i>=0; i -=1){
        w += q[i];
    }
    return w;
}



function isPrime (num){
    for(let x = 2; x < num; x +=1){
        if (num % x === 0){
            console.log('the number ', num, 'is divisible by', x);
            return false;
        }

    }
    return true;
}


function add (x, y){
    return x + y;
}
const sum = add(5, 7);

function divby2 (u){
    return u/2;
}

const avg = divby2(sum);
console.log(sum , avg);


//fucntion expression

const catSays = function (a){
    let msg = '';
    for (let i = 0; i <= a; i++ ){
        msg = msg += 'meaw'
    }
    return msg;

}

function hellocat (a){
    return 'hello' + catSays(4);
}


const favmovies = function(a){
    console.log('my favourite movie is ' + a);
}




function movies (a, b){
    a(b);
}

movies(function jo (s){
    console.log('the movie is ' + s);
}, 'Mr Robot')

// no need for the name jo it should work the same

function moviee (z, y){
    z(y);
}

moviee (function (u){
    console.log('the thing is ' + u);
}, 'fegrgfdjhk')


const li = ['ahg', 32, 'asdjghakshg', 24224, '23jlksdghera42'];

function jo (a, b, c){
    console.log('the element ' + a + 'the index ' + b + 'the array ' + c);
}

console.log(li.forEach(jo));



for (let i = 0; i < li.length - 1; i++){
    console.log(i);
}


li.map(function jj(e){
    e += ' hello ';
    e= e.toUpperCase;
    return e;
})





// objects

typeof(34);
const yo = [];
const yoo = {};

typeof (yoo);
typeof (yo);


const umberella = {
    color : 'black',
    isOpen: false,
    open:function(){
        if (umberella.isOpen === true){
            return 'the umbrella is open';
        }
        else{
            umberella.isOpen = false
            return 'umberela is closed';
        }
    }

};


//DOM

const bla = document.getElementById('id name');

const paragraph = document.querySelectorAll('p')


typeof paragraph




for (let i = 0; i < listtt.length; i++){
    console.log('i is ' + i);
    console.log(listtt[i])
}



let el = document.createElement('p');
let thetext = document.createTextNode('this is the text ');

el.appendChild(thetext);
document.body.appendChild(thetext);


//evenlisters

mainh.addEventListener('click', function () {
    console.log('it was clicked')
})


document.addEventListener('', function(){
    console.log('yha now what');
});


const mainheading = document.querySelector('h1');



mainheading.addEventListener('mouseenter', function(){
    mainheading.innerText = 'yha we rock ma fa!';

});

mainheading.addEventListener('mouseleave', function(){
    mainheading.innerText = 'Learn ARkit'
});



const heroModule = document.querySelector('.hero__module')


function removeonce (){
    console.log ('key is pressed');
    heroModule.lastElementChild.remove();
    document.removeEventListener('keypress', removeonce);
}

document.addEventListener('keypress', removeonce)


document.addEventListener('click', function () {
    console.log('The document was clicked');
 });
 
 document.body.addEventListener('click', function () {
     console.log('The document body was clicked');
 });


 /*


const mainheading = document.querySelector('h1');



mainheading.addEventListener('mouseenter', function(){
    mainheading.innerText = 'yha we rock ma fa!';

});

mainheading.addEventListener('mouseleave', function(){
    mainheading.innerText = 'Learn ARkit'
});



const heroModule = document.querySelector('.hero__module')


function removeonce (){
    console.log ('key is pressed');
    heroModule.lastElementChild.remove();
    document.removeEventListener('keypress', removeonce);
}

document.addEventListener('keypress', removeonce)


document.addEventListener('click', function () {
    console.log('The document was clicked');
 });
 
 document.body.addEventListener('click', function () {
     console.log('The document body was clicked');
 });

 document.addEventListener('click', function(jj){
    console.log(jj)
 });
 

const jjj = document.querySelector('#my-classroom');

jjj.addEventListener('click', function(ee) {
    event.preventDefault();
    console.log('skdj')
})


const thenew = document.createElement('div');

function respondto (aa){
    console.log('a paragraph was clicked' + aa.target.textContent);
}

for (let i = 1; i <= 200; i++){
    const newele = document.createElement('p');
    newele.textContent = 'this is paragraph number ' + i;

    thenew.appendChild(newele);
}

document.body.appendChild(thenew);
document.addEventListener('click', respondto)


*/



