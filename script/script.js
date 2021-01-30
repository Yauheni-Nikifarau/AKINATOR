let mask = confirm("Цвет масти чёрный?"),
    color;
if (mask) {
    mask = confirm("Это пика?");
    if (mask) {
        mask = 'pika';
        color = 'black';
    }
    else {
        mask = 'kresta';
        color = 'black';
    }
}
else {
    mask = confirm("Это буба?");
    if (mask) {
        mask = 'buba';
        color = 'red';
    }
    else {
        mask = 'chirva';
        color = 'red';
    }
}

let rang = confirm('Карта высшего ранга?');

if (rang) {
    rang = confirm('На карте изображен мужчина?');
    if (rang) {
        rang = confirm('Это король?');
        if (rang) {
            rang = 'K';
        }
        else {
            rang = 'V';
        }
    }
    else {
        rang = confirm('Это дама?');
        if (rang) {
            rang = 'Q';
        }
        else {
            rang = 'A';
        }
    }
}
else {
    rang = confirm('Это простое число?');
    if (rang) {
        rang = '7';
    }
    else {
        rang = confirm('Число делится на 3 без остатка?');
        if (rang) {
            rang = confirm('Это 9?');
            if (rang) {
                rang = '9';
            }
            else {
                rang = '6';
            }
        }
        else {
            rang = confirm('Это 8?');
            if (rang) {
                rang = '8';
            }
            else {
                rang = '10';
            }
        }
    }
}

document.write(`<div class="${color}">
        <span>${rang}</span>
        <img src="../img/${mask}.png" alt="Mask" />
</div>`);

