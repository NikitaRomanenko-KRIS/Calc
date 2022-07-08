const calc = document.querySelector('.calc');
const result = document.querySelector('.calc__result');

calc.addEventListener('click', function(event) {
    if (!event.target.classList.contains('calc__btn')) return;
    const value = event.target.innerText;

    switch(value){
        case 'CA':
            result.innerText = '';
            break;
        case '=':
    if (result.innerText.search(/[^0-9*/+-.]/mi) != -1) return;
            result.innerText =  eval(result.innerText).toFixed(2);  
            break;
        case '.':
            return;
        default:
            result.innerText += value;
    }


});