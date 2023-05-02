const num = 16;
var res = false

for(var i=0; i<num; i++){
    if(i*4 === num){
        res = true
    }
    
};
console.log(res)


const x = 5;
const y = 10;
const max = 15;

while( p=1 ){
    
for(var i=x; i<y; i++){

    for(var j=x; j<=y; j++){
        
        let cal = ((i**p - j**p)/ i*j);
         if(cal<max && cal>0){
            console.log(i,j);
        }
            
    }
}
p++
break
}


// duplicate functions

const function1 = (a,b)=>{
return a+b
}

const function2 = (a,b)=>{
return a+b
}
    
let a = function1.toString().replace(/\n/g, '').replace(/\s{2}/g, ' ');
let b = function2.toString().replace(/\n/g, '').replace(/\s{2}/g, ' ');

if(a == b){
    console.log("duplicate functions present")
}