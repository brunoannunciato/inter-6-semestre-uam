function isEconomicMode() {;
    if ($('#economic-mode').is(':checked')) {
        return true
    } else {
        return false
    }
}

function setRightColor() {;
    return $('.right-color-select:checked').val();
}

function setWrongColor() {
    return $('.wrong-color-select:checked').val();
}

$('.button.save').click(() => {
    localStorage.setItem('rightColor', setRightColor());
    localStorage.setItem('wrongColor', setWrongColor());
    localStorage.setItem('economicMode', isEconomicMode());
    window.location = '/';
})

console.log(isEconomicMode());
console.log(setRightColor());
console.log(setWrongColor());