export async function convertToKelvin(base) {
    try {
        let toKelvin = base + 273
        return toKelvin
    } catch (err) {
        return(err)
    }
}

