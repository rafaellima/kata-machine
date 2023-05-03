export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], start: number, end: number): void {
    if (start >= end) return;

    let index = partition(arr, start, end);
    qs(arr, start, index - 1);
    qs(arr, index, end);
}

function partition(arr: number[], start: number, end: number): number {
    const pivot = arr[end];
    let i = start - 1;

    for (let j = start, len = end - 1; j <= len; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }

    i++;
    [arr[i], arr[end]] = [pivot, arr[i]];

    return i;
}
