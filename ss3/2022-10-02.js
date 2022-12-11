class Person{
    constructor(_name,_age,_address){
     this.name=_name;
     this.age=_age
     this.address=_address   
    }
    say(){
        return `I'm a person and my name is ${this.name}`
    }
}
class Student extends Person{
    constructor(_name,_age,_address,_class,_idStudent){
        super(_name,_age,_address);
        this.class=_class
        this.idStudent=_idStudent
    }
    say(){
        super.say()
        return super.say()+`and I am a coder.`
    }
}
let TuanAnh = new Student ("Tuan Anh",14,"Lieu Giai","HDT",123);
console.log()

const PI=3.14
class HinhTron{
    constructor(_bankinh){
    this.bankinh=_bankinh}
    dtht(){
        return PI*this.bankinh*this.bankinh
    }
    cvht(){
        return PI*this.bankinh*2
    }
}
let hinhtron1=new HinhTron(3)
console.log(hinhtron1.dtht())
console.log(hinhtron1.cvht())
