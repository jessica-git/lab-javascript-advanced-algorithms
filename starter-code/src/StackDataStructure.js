class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 5
    }

    isEmpty() {
        return this.stackControl == 0 ? true : false
    }

    canPush() {
        return this.stackControl.length < this.MAX_SIZE ? true : false
    }

    push(elm) {

        if (this.stackControl.length == this.MAX_SIZE) {
            return "Stack Overflow"
        }

        this.stackControl.push(elm)
        return this.stackControl
    }

    pop(elm) {
        if (this.stackControl.length == 0) {
            return "Stack Underflow"
        }
        return this.stackControl.pop(elm)
    }
}
