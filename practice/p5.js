//pattern printing alphabets as a hollow diamond

for ( i = 0; i < 16; i++) {
    str = '';
    for ( j = 0; j < 16 - i - 1; j++) {
        str += ' ';
    }
    str += String.fromCharCode(65 + i); 
    if (i > 0) {
        for ( k = 0; k < (2 * i) - 1; k++) {
            str += ' ';
        }
        str += String.fromCharCode(65 + i);
    }
    console.log(str);
}

for ( i = 16 - 2; i >= 0; i--) {
     str = '';
    for (let j = 0; j < 16 - i - 1; j++) {
        str += ' ';
    }
    str += String.fromCharCode(65 + i);
    if (i > 0) {
        for ( k = 0; k < (2 * i) - 1; k++) {
            str += ' ';
        }
        str += String.fromCharCode(65 + i);
    }
    console.log(str);
}
