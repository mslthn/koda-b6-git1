import readline from 'readline'
import { convertToReamur } from "./mod/reamur.js"
import { convertToFahrenheit } from "./mod/fahrenheit.js"
import { convertToKelvin  } from "./mod/kelvin.js"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const input = (question) => new Promise((resolve) => rl.question(question, resolve))

async function inputTempBase() {
    const inTemp = await input("Nilai awal: ")
    const tempBase = parseInt(inTemp)
    return tempBase
}

async function main(){
    // const inTemp = await input("Nilai awal: ")
    // const base = parseInt(inTemp)
    const base = await inputTempBase()

    if(isNaN(base)){
        console.log("Error: Input harus angka")
        rl.close()
        return
    }

    console.log("\nPilih target konversi")
    console.log("1. Celcius ke reamur")
    console.log("2. Celcius ke Fahrenheit")
    console.log("3. Celcius ke kelvin")
    console.log("0. Keluar")
    const choice = await input("Pilih opsi (1-3): ")

    switch (choice) {
        case '1':
            let reamur = await convertToReamur(base)
            console.log(`hasil konversi ${base} celcius ke reamur =`, reamur)
            break
        case '2':
            let fahrenheit = await convertToFahrenheit(fahrenheit)
            console.log(`hasil konversi ${base} celcius ke fahrenheit = `, fahrenheit)
            break
        case '3':
            const kelvin = await convertToKelvin(base)
            console.log(`hasil konversi ${base} celcius ke kelvin = `, kelvin)
            break
        case '4':
            rl.close()
            return
        default:
            console.log("Pilihan tidak valid.")
    }
    rl.close()
}

main()