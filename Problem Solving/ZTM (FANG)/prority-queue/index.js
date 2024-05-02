class PriorityQueue {
    constructor(comparator = (a,b)=> a>b){
        this._heap = [];
        this._comparator = comparator;
    }

    size(){
        return this._heap.length;
    }

    isEmpty(){
        return this.size() === 0;
    }

    peak() {
        return this._heap[0];
    }

    _parent(idx) {
        return Math.floor((idx-1)/2);
    }

    _leftChild(idx) {
        return Math.floor((idx*2)+1);
    }

    _rightChild(idx) {
        return Math.floor((idx*2)+2);
    }

    _swap(i, j) {
        const temp = this._heap[i];
        this._heap[i] = this._heap[j];
        this._heap[j] = temp;
    }

    _compare(i,j){
        return this._comparator(this._heap[i],this._heap[j]);
    }

    push(value) {
        this._heap.push(value);
        this._siftUp();

        return this.size();
    }

    _siftUp() {
        let nodeIdx = this.size() - 1;
        
        while(nodeIdx > 0 && this._comparator(nodeIdx, this._parent(nodeIdx))) {
            this._swap(nodeIdx, this._parent(nodeIdx));
            nodeIdx = this._parent(nodeIdx);
        }
    }
}