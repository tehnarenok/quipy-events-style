"use strict";
console.log('Hello ёпта');
window.onload = () => {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://quipy-nine.vercel.app/new_year.css';
    link.media = 'all';
    head.appendChild(link);
    let linkIcon = document.querySelector("link[rel~='icon']");
    if (linkIcon)
        linkIcon.href = 'https://quipy-nine.vercel.app/logo.png';
};
