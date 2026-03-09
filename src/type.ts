let n:number;

n=123;

function add(a:number,b:number):number{
    return a+b;
}
add(2,4);

function wrap<T>(x:T){
        return[x];
}
wrap<string>("abc");
wrap<number>(123);


interface User{
    name:string;
    age:number;
}
let Aungthra: User;
Aungthra={name:"Aungthura",age:27};

type Student={
    name:string;
    age:number;
    gender?:"male"|"female";
}
let alice:Student;
alice={name:'alice',
    age:27,
    gender:"male"
}
function dataAdd(x:string){
    return x="aungthura";
}
dataAdd("aungthura");

function typeScript<T>(x:T){
   return [x];
}
typeScript<string>("aungthura")
typeScript<number>(235);

function data(x:number){
        return x;
}
data(1234);
function adding(a:string,b:string):string{
    return a+b;
}
console.log(adding("mg","mg"));
