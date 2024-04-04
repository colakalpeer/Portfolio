'use strict';


// add Event on multiple element

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0; i < elements, length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


// PRELOADING

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
    loadingElement.classList.add("loaded");
    document.body.classList.remove("active");
});