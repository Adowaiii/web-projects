


const buttonOne = document.querySelector(".button-one");

buttonOne.addEventListener('click', () =>{
    const isOpened = buttonOne.getAttribute('aria-expanded');
    console.log(isOpened);
    if (isOpened === 'false'){
        buttonOne.setAttribute('aria-expanded', 'true');
    }else{
        buttonOne.setAttribute('aria-expanded', 'false');
    }
});