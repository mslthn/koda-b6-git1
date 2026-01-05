export async function convertToFahrenheit(base) {
    try {
        let toFahrenheit = (base * 9/5) + 32
        return toFahrenheit
    } catch (err) {
        return(err)
    }
}