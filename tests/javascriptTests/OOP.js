/*
let Person = {
    name : "halil",
    age : 20
}

Person.asd = 5
Person.work = () => console.log("working")

console.log(Person)

Person.work()
*/
/*
function Person(isim){
    this.name = isim
    this.age = 5
    console.log("olustu")


}
Person.prototype.f = function(){
    console.log("ffff")
}
Person.q = function(){
    console.log("qq")
}

const kisi = new Person("halo")
kisi.a = "sadasd"
console.log(kisi.toString())
console.log(kisi)
kisi.f()

Person.q()
*/
/*
function Person(){
    
}

Person.prototype.test1 = function(){
    console.log("test1")
}
Person.prototype.test2 = function(){
    console.log("test2")
}

function Employee(name,age){
    this.name = name
    this.age = age
}

Employee.prototype = Object.create(Person)
Employee.prototype.myTest = function(){
    console.log("myTest")
}

const emp = new Employee("halo",20)

console.log(emp)
*/



const obj1 = {
    number1 : 50,
    number2 : 20
}

function Test(obj1,n1,n2){
    console.log(obj1.number1+obj1.number2+n1+n2)
}


Test(obj1,2,5)
