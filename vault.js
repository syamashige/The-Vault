'use strict';
module.exports = function() {
    const secretVault = {};
    const setValue = function (key, value) {
        secretVault[key] = value;
    }
    const getValue = function (key) {
        if (secretVault[key] === undefined) {
            return null;
         } else {
            return secretVault[key];
        }
    }

    return {
        getValue: getValue,
        setValue: setValue
    }

};