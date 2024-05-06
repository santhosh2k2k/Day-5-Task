class user {
    constructor(name,email,password){
        this.name=name
        this.email=email
        this.password=password
    }
    
    display(){
        console.log(this.name,this.email,this.password)
    }
}
let user1 = new user ("nagaraj","naga@gmail.com","4674")
let user2 = new user ("sandy","sandy@gmail.com","4654")
user1.display()
user2.display()

class UberPriceCalculator {
    constructor(basePrice, distanceInMiles, tax) {
        this.basePrice = basePrice;
        this.distanceInMiles = distanceInMiles;
        this.tax = tax;
    }

    calculateTotalPrice() {
        const total = this.basePrice + this.distanceInMiles + this.tax;
        return total;
    }
}

const price = new UberPriceCalculator(100, 10, 200);
console.log(price.calculateTotalPrice());