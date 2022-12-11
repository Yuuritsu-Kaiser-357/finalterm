

let m = [1,2,3,4,5,6,"hh", "9",80,100]
let m2 = m.filter(item => typeof(item) == "number" )
let mSquared=m2.map(item => Math.pow(item,2))
console.log(mSquared)

//Bài 10
let string1 = " High knowledge, high return"
let string2=string1.toLowerCase()
let array1 = string2.split(' ')
let array2= array1.filter(item => item != '')
console.log(array2)





//Bài 12
class Hinh{
    constructor(_chieurong,_chieudai){
    this.chieurong=_chieurong
    this.chieudai=_chieudai}
    dthtg(){
        return this.chieurong*this.chieudai / 2
    }
    dthcn(){
        return this.chieurong*this.chieudai
    }
}
let hinh1=new Hinh(2,3)
console.log(hinh1.dthtg())
console.log(hinh1.dthcn())



