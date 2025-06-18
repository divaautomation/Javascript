
//console.log(a)  // undefined error : var can do the hosting 
var a = 10;
console.log(a)

//console.log(b) //Cannot access 'b' before initialization
let b= 100
console.log(b)

const c =100
//c=150 // reassigning is not possible in const
console.log(c)

/* 
Var scope function level
let,const block level
*/
var aa=10
var bb=20
var cc;
function add(){
    if(bb>aa){
        cc=aa+bb;
        console.log(cc)
    }
}
console.log(aa)
console.log(bb)
console.log(cc)

add() 


function sum(){
    let pen=100
    let book=100
    if(true){
        console.log(pen)
        console.log(book)
    }
   
}

sum()

function multiple(){
    const mark1=15
    const mark2=10
    if(true){
        const total = mark1*mark2
        console.log(total)
    }
}
multiple()