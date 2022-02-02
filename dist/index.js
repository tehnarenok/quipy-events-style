"use strict";
window.onload = () => {
    return;
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/new_year.css';
    link.media = 'all';
    head.appendChild(link);
    let linkIcon = document.querySelector("link[rel~='icon']");
    if (linkIcon)
        linkIcon.href = 'https://i.pinimg.com/originals/fd/71/7d/fd717d65b03bdf7416f23105917f4c02.png';
};
