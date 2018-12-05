if (localStorage.getItem('rightColor') == null) {
    localStorage.setItem('rightColor', '#43ff75');
}

if (localStorage.getItem('wrongColor') == null) {
    localStorage.setItem('wrongColor', '#ff4343');
}

if (localStorage.getItem('economicMode') == null) {
    localStorage.setItem('economicMode', false);
}

if (localStorage.getItem('economicMode') == "true") {
    $('#economic-mode').prop('checked', true);
}



function isEconomicMode() {
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
    window.location = '/panel.php';
});