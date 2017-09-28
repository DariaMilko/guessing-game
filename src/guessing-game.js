class GuessingGame {
    constructor() {
        this.less=0;
        this.half=0;
        this.more=0;
    }

    setRange(min, max) {
        this.less=min;
        this.more=max;
    }

    guess() {
        this.half=Math.round((this.less+this.more)/2); //num.toFixed() ?
        return this.half; 
    }

    lower() {
        this.more=this.half; 
        return this;
    }

    greater() {
        this.less=this.half; 
        return this;
    }
}

module.exports = GuessingGame;
