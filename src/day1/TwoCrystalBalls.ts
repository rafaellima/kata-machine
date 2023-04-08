export default function two_crystal_balls(breaks: boolean[]): number {
    // e.g [false, false, false, false, false, false, false, true, true] n = 9
    const jmpAmount = Math.floor(Math.sqrt(breaks.length)); // 3

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount; // 6

    for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
