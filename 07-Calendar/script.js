"use strict";
//date and Time Section
var todaysDate = new Date();
document.getElementById('today-date').innerHTML = todaysDate.getDate();
var weekDayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById('today-day').innerHTML=weekDayArray[todaysDate.getDay()];

document.getElementById('CurrentYear').innerHTML=todaysDate.getFullYear();

//Events
let eventList=[];
    

//create event
var createEventElement=document.getElementById('create-event');
var createEventTitleElement=document.getElementsByClassName('create-event-title')
var originalElement=document.getElementById('original');

//swap pages
function swapPages12(){
    originalElement.classList.add('hide');
    createEventElement.classList.remove('hide');
    createEventElement.classList.add("display-flex");
}

function swapPages21(){
    createEventElement.classList.remove("display-flex");
    createEventElement.classList.add('hide');
    originalElement.classList.remove('hide');
}

//adding event 


// display events 
var showPostElement = document.getElementById('showPost');
var currentEventselement=document.querySelector('.CurrentEvents');
var hidePostElements=document.getElementById('hidePost');
var eventListULelement= document.querySelector(".eventListUL");

function showAllPost(){
    currentEventselement.style.height='125px';
    showPostElement.classList.remove('display-block');
    showPostElement.classList.add('hide'); 
    hidePostElements.classList.remove('hide');
    hidePostElements.classList.add('display-block');
}
function hidePost(){
    currentEventselement.style.height='40px';
    showPostElement.classList.remove('hide');
    showPostElement.classList.add('display-block'); 
    hidePostElements.classList.remove('display-block');
    hidePostElements.classList.add('hide');
}


const submitButton = document.querySelector(".create-event form");
      submitButton.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(submitButton);
        const newEvent = Array.from(formData.entries()).reduce((acc, item) => {
          acc[item[0]] = item[1];
          return acc;
        }, {});
        saveEventData(newEvent);
        swapPages21();
      });

const saveEventData =  (newEvent) => {
    const request = new Request('http://localhost:3000/events', {
        method: 'POST',
        body: JSON.stringify(newEvent),
        headers: {
        'Content-Type': 'application/json',
        }
    });
    fetch(request)
        .then(res => res.json())
        .then(data => {
            eventList.push(data);
            renderEventList();
        })
}
const renderEventList = () => {
    eventListULelement.innerHTML = "";
    if(eventList.length==0){
        const eventElement = document.createElement("li");
        eventElement.innerText = "NO events Exist";
        eventListULelement.appendChild(eventElement);
    }
    else{
    eventList.forEach((event) => {
      const eventElement = document.createElement("li");
      eventElement.innerText = event.eventname;
      eventListULelement.appendChild(eventElement);
    });
}
};
renderEventList();