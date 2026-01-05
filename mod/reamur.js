export async function convertToReamur(base) {
    try {
      let toReamur = base * 4/5
      return toReamur
    } catch (err) {
        console.log(err)
    }
}