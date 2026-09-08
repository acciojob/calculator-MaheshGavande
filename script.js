//your code here
let second = document.getElementById("secondDiv");
let third = document.getElementById('thirdDiv');
let fourth = document.getElementById('fourthDiv');
let fifth = document.getElementById('fifthDiv');
let sixth = document.getElementById('sixthDiv');


second.addEventListener('click', function(e){
     let val = input.value;
     let back = "\u2190";
     if(e.target.textContent == back){
         input.value = val.slice(0,val.length-1);
     }
     else if(e.target.innerHTML == 'C'){
        input.value="";
    }
    else
     input.value += e.target.innerHTML;
});

third.addEventListener('click', function(e){
     input.value += e.target.innerHTML;
});

fourth.addEventListener('click', function(e){
     input.value += e.target.innerHTML;
});

fifth.addEventListener('click', function(e){
     input.value += e.target.innerHTML;
});

sixth.addEventListener('click', function(e){
    if(e.target.innerHTML == '='){
        let val = String(input.value);
      let res =  calculate(val);
      input.value= String(res);
    }else
     input.value += e.target.innerHTML;

});


function calculate (string){
    let input = string;
     let op = '';
     if(input.includes('+')){
           op = '+';
     }else if(input.includes('-')){
           op = '-';
     }else if(input.includes('*')){
           op = '*';
     }else{
           op = '/';
     }
     let n1 = 0;
     let n2 = 0;
     for(let i=0;i<input.length; i++){
          if(input.charAt(i) == op){
               n1 = Number(input.slice(0,i));
               n2 = Number(input.slice(i+1, input.length));
               if(n2==""){
                 n2 = NaN;
               }
               break;
          }
     }
     let res =0;
     if(op == '+'){
       res = add(n1,n2);
     }else if(op == '-'){
          res = min(n1,n2);
     }else if(op == '*'){
          res = mul(n1,n2);
     }else{
       res = div(n1,n2);
     }

     return res;
}

 const add= (n1 , n2)=>{
     return n1+n2;
}

function min(n1,n2){
     return n1-n2;
}
function mul(n1,n2){
     return n1*n2;
}
function div(n1,n2){
     if(n2 == 0) return "Invalid";
    
          return n1/n2;
   
}
