import readline from 'readline';
import { add, subtract } from './rumus.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Kalkulator Sederhana");
console.log("Pilih operasi:");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");

rl.question("Masukkan pilihan (1/2): ", (choice) => {
    if (choice !== '1' && choice !== '2') {
        console.log("Pilihan tidak valid.");
        rl.close();
        return;
    }

    rl.question("Masukkan angka pertama: ", (num1) => {
        rl.question("Masukkan angka kedua: ", (num2) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);

            if (isNaN(a) || isNaN(b)) {
                console.log("Input harus berupa angka.");
            } else {
                if (choice === '1') {
                    console.log(`Hasil penjumlahan: ${add(a, b)}`);
                } else if (choice === '2') {
                    console.log(`Hasil pengurangan: ${subtract(a, b)}`);
                }
            }
            rl.close();
        });
    });
});

    