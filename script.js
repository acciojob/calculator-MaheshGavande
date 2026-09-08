//your code here
let input = document.getElementById("input");
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
        console.log(val);
      let res =  calculate(val);
      //console.log(String(res));
      input.value= String(res);
    }else
     input.value += e.target.innerHTML;

});

function calculate (string){
   let flag = true;
  
   while(flag){
      let op= "";
     for(let i=0;i<string.length; i++){
          if(string.charAt(i)=='*' || string.charAt(i)=='/'){
                op = string.charAt(i);
                string = Solve(string , op , i);
                break;
          }
     }
     if(op==""){
          flag = false;
     }
   }

   flag = true;
   while(flag){
      let op= "";
     for(let i=0;i<string.length; i++){
          if(string.charAt(i)=='+' || string.charAt(i)=='-'){
                op = string.charAt(i);
                string = Solve(string , op , i);
          }
     }
     if(op==""){
          flag = false;
     }
   }
   return string;
}


function Solve(string , op , indx){
     console.log(string);
    let s1 ="";
    let s2 ="";
    let n1 ="";
    let n2 ="";

    for(let i=indx-1; i>=0; i--){
       if(string.charAt(i)<='9' && string.charAt(i)>='0'){
          n1+=string.charAt(i);
       }else{
          s1 = string.slice(0,i+1);
          break;
       }
    }
    console.log(n1);
    console.log(n2);
    for(let i=indx+1; i<string.length; i++){
       if(string.charAt(i)<='9'&& string.charAt(i)>='0'){
          n2+=string.charAt(i);
       }else{
          s2 = string.slice(i, string.length);
          break;
       }
    }
    n1 = n1.split("").reverse().join("");
    n1 = Number(n1);
    n2 = Number(n2);
    let val=0;
    if(op == '*'){
      val = n1 * n2;
    }else if(op == '/'){
     val = n1/n2;
    }else if(op=='+'){
     val = n1+n2;
    }else{
     val = n1-n2;
    }

    let ans = `${s1}${val}${s2}`; console.log(ans);
    return ans;
}

 
