export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) return -1;

        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return out;
    }

    private heapifyDown(idx: number): void {
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);

        if (idx >= this.length || leftIdx >= this.length) return;

        const left = this.data[leftIdx];
        const right = this.data[rightIdx];
        const curr = this.data[idx];

        if (left > right && curr > right) {
            this.data[idx] = right;
            this.data[rightIdx] = curr;
            this.heapifyDown(rightIdx);
        } else if (right > left && curr > left) {
            this.data[idx] = left;
            this.data[leftIdx] = curr;
            this.heapifyDown(leftIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) return;

        const parentIdx = this.parent(idx);
        const parent = this.data[parentIdx];
        const curr = this.data[idx];

        if (parent > curr) {
            this.data[idx] = parent;
            this.data[parentIdx] = curr;
            this.heapifyUp(parentIdx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    // private children(idx: number): [number, number] {
    //     return [idx * 2 + 1, idx * 2 + 2];
    // }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
