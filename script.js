let inputLen = document.getElementById('inputLenght');
let inputPass = document.getElementById('inputPassword');
let savePassword = document.getElementById('savePassword');

const huruf = "abcdefghijklmnopqrstuvwxyz"
const hurufUpp = huruf.toUpperCase();
const angka = "1234567890";
const symbol = "`~!@#$%^&*()-_+={[}]:;'<,>.?/";
const data = huruf + hurufUpp + angka + symbol;
function getPass() {
    if (inputLen.value <= 1000 && inputLen.value) {

        let generator = '';
        for (let index = 0; index < inputLen.value; index++) {
            generator += data[~~(Math.random() * data.length)];
        }
        inputPass.value = generator;
        return inputPass.value;
    } else if (inputLen.value > 1000 && !inputLen.valu) {
        alert('MAKSIMAL KARAKTER ADALAH 1000 KARAKTER')
        return location.reload();
    } else {
        alert('SILAHKAN ISI PANJANG PASSWORD TERLEBIH DAHULU');
        return location.reload();
    }

}

function savePass() {
    if (inputPass.value) {
        savePassword.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`hasil password generate adalah ${inputPass.value}`))
        savePassword.setAttribute('download', 'hasilPasswordGenerator');
    } else {
        alert('SILAHKAN ISI PANJANG PASSWORD DAN KLIK GENERATE TERLEBIH DAHULU');
        return location.reload();
    }
}