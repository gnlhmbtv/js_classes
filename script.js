// 2. Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.         
// var result = new CustomMatch(100).plus(6).minus(30).multiply(3).divide(2)
//  resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile (riyazi prinsibi unudun,vurma
//   bolme onceliyine ehtiyac yoxdu) 114 olmalidi;

class CustomMatch{
    constructor(num){
    this.num=num;
    }
        plus(plus){
            this.num=this.num+plus;
            return this;
        }
        minus(minus){
            this.num=this.num-minus;
            return this;
        }
        multiply(multiply){
            this.num=this.num*multiply;
            return this;
        }
        divide(divide){
            this.num=this.num/divide;
            return this;
        }
}
var result = new CustomMatch(100).plus(6).minus(30).multiply(3).divide(2);
console.log(result);