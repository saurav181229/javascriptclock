var wakeUp=8;
var noon=12;
var evening=17;
var lunchTime=13;
var naptime=lunchTime+2;
var partytime;

//console.log('hello');

//clock function
function startTime(){
let time=new Date();
var h=time.getHours();
var m=time.getMinutes();
var s=time.getSeconds();
m=checkTime(m);
s=checkTime(s);
day=DayOrNight(h);
h=clock12(h);
h=checkTime(h);

document.getElementById('onlytime').innerHTML=h +":"+ m +":" + s +" "+ day;
var t=setTimeout(startTime,500);;


}


// to append zeros if minutes hours and seconds are less than 10
function checkTime(i){
    if (i<10){
        i="0"+i;
    }
   return i;
}
//to append am or pm with the time
function DayOrNight(i){
    if(i<=12 ){
        return "Am";
    }
    else{
        return "PM"
    }

}

//to convert the 24 hr clock into 12 hr clock
function clock12(h){
    if(h>12){
      h=h-12;
    }

    
    return h;
}

//to load the image according to the time
var updateTime= function () {
let time1=new Date();
var hr=time1.getHours();
console.log(hr);
Img='afternoon.jpeg';
let txt=document.getElementById('text');
let msg;

//image=document.createAttribute('img');
    if(hr==wakeUp) {
        
   img='goodmrng';
   msg=`"good morning get up"`;

}

else if (hr==lunchTime){
    img='food.jpeg';
    msg=`"its lunch time"`;


}
else if(hr==naptime){
   img= 'nap.jpeg';
   msg=`"its nap time"`;
}

else if(hr>evening){
    img='evening.jpeg'
    msg=`"good evening"`;
}
else if(hr<noon){
    img='goodmrng.jpeg';
    msg=`"good morning"`;
}

else {
    img='afternoon.jpeg';
    msg=`"good afternoon"`;
}
image.src=img;
txt.innerText=msg;
}
updateTime();

document.getElementById('wakeup').addEventListener('change',wakeUP);

function wakeUP()
{

    let img='goodmrng.jpeg';
    msg=`"good morning get up"`;
    document.getElementById('image').src=img;
    document.getElementById('text').innerText=msg;
}
document.getElementById('lunch').addEventListener('change',Lunch);
function Lunch(){

    let img='food.jpeg';
    let msg=`"its lunch time"`;
    document.getElementById('image').src=img;
    document.getElementById('text').innerText=msg;
}

document.getElementById('napTime').addEventListener('click',napTime);

function napTime(){

    let img= 'nap.jpeg';
   let msg=`"its nap time"`;
   document.getElementById('image').src=img;
   document.getElementById('text').innerText=msg;
   
}

document.getElementById('party').addEventListener('click',function(){
   
    if(document.getElementById('party').innerText==`party time!!`){
  let img="party.jpeg";
  let txt=`"its party time"`;
  document.getElementById('image').src=img;
   document.getElementById('text').innerText=txt;
   document.getElementById('party').innerText=`party over!!`;
    }
    else{
    document.getElementById('party').innerText=`party time!!`;
    updateTime();
    }
   
})

