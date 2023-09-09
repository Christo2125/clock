




setInterval(time,1000);

function time(){

const time = new Date();


// hours
const hours = document.querySelector(".hrs")
if(hours < 12){
    hours.textContent = time.getHours()-12;
}
else{
    hours.textContent = time.getHours();
}

// am and pm 
const AmPm = document.querySelector(".AmPm") 
if(hours < 12 )
{
AmPm.textContent = "AM"
}
else
{
    AmPm.textContent = "PM"
}

// date
const date = document.querySelector(".date")
date.textContent = time.getDate()

// minutes 
const minutes = document.querySelector(".mins")
minutes.innerHTML = time.getMinutes();

// seconds
const seconds = document.querySelector(".secs")
seconds.innerHTML = time.getSeconds();

// days
const days = document.querySelector(".days")

if(time.getDay() == 5)
{
    days.textContent = "friday"
}
else if(time.getDay() == 4)
{
    days.textContent = "thursday"
}

else if(time.getDay() == 3)
{
    days.textContent = "wednesday"
}

else if(time.getDay() == 2)
{
    days.textContent = "tuesday"
}

else if(time.getDay() == 1)
{
    days.textContent = "monday"
} 

else if(time.getDay() == 6)
{
    days.textContent = "saturday"
}

else{
    days.textContent = "sunday"
}

// month
const month = document.querySelector(".month")
month.textContent = time.getMonth();

if(time.getMonth() == 1){
    month.textContent = "january"
}

else if(time.getMonth() == 2){
    month.textContent = "feburary";
}

else if(time.getMonth() == 3){
    month.textContent = "march";
}
else if(time.getMonth() == 4){
    month.textContent = "april";
}
else if(time.getMonth() == 5){
    month.textContent = "may";
}
else if(time.getMonth() == 6){
    month.textContent = "june";
}
else if(time.getMonth() == 7){
    month.textContent = "july";
}
else if(time.getMonth() == 8){
    month.textContent = "august";
}
else if(time.getMonth() == 9){
    month.textContent = "septmber";
}
else if(time.getMonth() == 10){
    month.textContent = "october";
}
else if(time.getMonth() == 11){
    month.textContent = "novermber";
}
else {
    month.textContent() = "december";
}


}
