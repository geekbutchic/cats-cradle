function challenge1(str) {
    let i = 0;
    while (i < str.length) {
        console.log(str[i]);
        i = i + 1;
    }
}
console.log('Challenge 1:');
challenge1('Hello.');
challenge1('Oh hi.');

function challenge2(str) {
    let i = 0;
    while (i < str.length) {
        console.log (str[i]);
        i = i + 3;
    }
}

console.log('Challenge 2:');
challenge2 ('I am the alfalfa and the omelette');

function challenge3 (str) {
    let i = str.length -1;
    while (i >= 0) {
        console.log (str[i]);
        i = i - 1;
    }
} 

console.log('Challenge 3:');
challenge3 ('Hello');
challenge3 ('Oh hi');

function challenge4(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            console.log(str[i]);
        }
    }
}

console.log('Challenge 4:');
challenge4('Regular expressions are for term 2.');

function challenge5 (str, startIndex) {
    let index = startIndex;
    for (i = 0; i < str.length-startIndex; i++) {
        console.log(str[index]);
        index++;
    }
}

console.log('Challenge 5 (Part 1):');
challenge5('slaughter', 1);
console.log('Challenge 5 (Part 2):');
challenge5("I don't love you!", 7);

function challenge6 (str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'u') {
            console.log(i);
        }
    }
}

console.log('Challenge 6:');
challenge6('You picked the wrong house, bub.');

function challenge7(str) {
    let count = 0;
    for (i = 0; i < str.length; i++) {
        if ((str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') && count <= 4) {
            console.log(str[i]); 
            count++;
        }
    } 
}
console.log('challenge 7 part 1:');
challenge7("Regular expressions are for term 2.");

console.log('challenge 7 part 2:');
challenge7("Hello");

function challenge8(str) {
    let index = 0;
    while (i < str.length) {
        if (str[i] === 'u') {
        console.log(i);
        return;
        }
        index++;
    }
}

console.log('challenge 8:');
challenge8("You picked the wrong house, bub.");
