class QueueDataStructure {
    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 5

    }
    isEmpty() {
        return this.queueControl == 0 ? true : false
    }

    canEnqueue() {
        return this.queueControl.length < this.MAX_SIZE ? true : false
    }

    enqueue(elm) {

        if (this.queueControl.length == this.MAX_SIZE) {
            return "Queue Overflow"
        }
        this.queueControl.unshift(elm)
        return this.queueControl
    }

    dequeue(elm){
        if (this.queueControl.length == 0) {
            return "Queue Underflow"
        }
        return this.queueControl.pop(elm)

    }

}




