import { convertToReamur } from "./mod/reamur.js"
import { convertToFahrenheit } from "./mod/fahrenheit.js"
import { convertToKelvin  } from "./mod/kelvin.js"

function main(base){
    console.log(`hasil konversi ${base} celcius ke reamur =`, convertToReamur(base))
    console.log(`hasil konversi ${base} celcius ke fahrenheit =`, convertToFahrenheit(base))
    console.log(`hasil konversi ${base} celcius ke kelvin =`, convertToKelvin(base))
}

main(32)