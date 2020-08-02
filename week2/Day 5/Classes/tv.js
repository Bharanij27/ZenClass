class TV{
    constructor(...args){
        [this.brand, this.channel = 1, this.price, this.inches, this.OnOFFStatus, this.volume = 50] = args;
    }

    increaseVolume(){
        if(this.volume < 100) this.volume++;
    }

    decreaseVolume(){
        if(this.volume > 0) this.volume--;
    }

    reset(){
        this.volume = 50;
        this.channel = 1
    }

    status(){
        return this.brand + ' at channel ' + this.channel + ', volume' + this.volume;
    }

    setChannel(){
        if(value > 50) this.channel = value;
    }
}

class LED_TV{
    constructor(screenThickness, energyUse, lifeSpan, refreshRate, ...args){
        super(args);
        this.screenThickness = screenThickness;
        this.energyUse = energyUse;
        this.lifeSpan = lifeSpan;
        this.refreshRate = refreshRate;
    }

    viewingAngel(){ return this.viewingAngel;}
    backLight(){ return this.backLight;}
    display(){ return }
}

class PlasmaTV{
    constructor(screenThickness, energyUse, lifeSpan, refreshRate, ...args){
        super(args);
        this.screenThickness = screenThickness;
        this.energyUse = energyUse;
        this.lifeSpan = lifeSpan;
        this.refreshRate = refreshRate;
    }

    viewingAngel(){ return this.viewingAngel;}
    backLight(){ return this.backLight;}
    display(){ return }
}