
window.onload = () => {
    return
	let head  = document.getElementsByTagName('head')[0];
    let link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://quipy-nine.vercel.app/new_year.css'
    link.media = 'all';
    head.appendChild(link);

	let linkIcon = <HTMLLinkElement>document.querySelector("link[rel~='icon']");
    if(linkIcon) linkIcon.href = 'https://quipy-nine.vercel.app/logo.png'

    let d = new Date();

    if (localStorage.getItem("newYear2021WasShown") !== "true" && ((d.getMonth() == 11 && d.getDate() == 31) || (d.getMonth() == 0 && d.getDate() <= 10))) {
        document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', '<iframe id="ny2021frame" src="https://quipy-nine.vercel.app/newyear_congrats.html" style="border:0;position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 10000;"></iframe>')
        window.addEventListener('message', event => { 
            if (event.data == "closeNY") {
                localStorage.setItem("newYear2021WasShown", "true")
                document.getElementById("ny2021frame")?.remove()
            }
        })
    }
}