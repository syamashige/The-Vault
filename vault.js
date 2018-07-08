'use strict';
module.exports = function() {
    const secretVault = {};
    const setValue = function (key, value) {
        secretVault[key] = value;
    }
    
    //One way of writing it
    const getValue = function (key) {
        if (secretVault[key] === undefined) {
            return null;
         } else {
            return secretVault[key];
        }
    }

    //Alternative way of writing it: using hasOwnProperty
    // const getValue = function (key) {
    //     if (secretVault.hasOwnProperty(key)) {
    //         return secretVault[key];
    //     } else {
    //         return null;
    //     }
    // }

    //A third way of writing it 
    // const getValue = function (key) {
    //     if (key in secretVault) {
    //         return secretVault[key];
    //     } else {
    //         return null;
    //     }
    // }


    return {
        getValue: getValue,
        setValue: setValue
    }

};