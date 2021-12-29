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
        window.open('https://quipy-nine.vercel.app/newyear_congrats.html', '_blank', 'location=yes,height=600,width=850,scrollbars=yes,status=yes');
        localStorage.setItem("newYear2021WasShown", "true")
    } 
}