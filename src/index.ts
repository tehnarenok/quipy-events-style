console.log('Hello ёпта')


window.onload = () => {
	let head  = document.getElementsByTagName('head')[0];
    let link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://quipy-nine.vercel.app/new_year.css'
    link.media = 'all';
    head.appendChild(link);

	let linkIcon = <HTMLLinkElement>document.querySelector("link[rel~='icon']");
    if(linkIcon) linkIcon.href = 'https://quipy-nine.vercel.app/logo.png'

    if (localStorage.getItem("newYear2021WasShown") !== "true") {
        //document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', 'document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', '<iframe id="ny2021frame" src="https://quipy-nine.vercel.app/newyear_congrats.html" style="position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 10000;"></iframe>')')
        localStorage.setItem("newYear2021WasShown", "true")
    }
}