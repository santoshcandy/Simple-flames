const flames =['f','l','a','m','e','s']
let answer
let btn =  document.getElementById("btn").addEventListener("click",()=>{
        


    let name1 = document.getElementById('name1').value
    let name2 = document.getElementById('name2').value
    let name01 = document.getElementById('name01').innerHTML=name1;
let name02 = document.getElementById('name02').innerHTML=name2;
    if(name01==name02){
         document.getElementById("wans").innerHTML=' name invalid'
    }else{
        document.getElementById("wans").innerHTML=''


let char = name01.length;
let fullname = name01+name02
let ans = fullname.split("")
answer = ans.filter((ele,index,arr)=> arr.indexOf(ele)===index)
console.log(ans)
console.log(answer)
console.log(answer.length)
const number = answer.length
const flame =['f','l','a','m','e','s']
for(let i=flame.length;i>0; i--){
if(number){
    if(flame.length==6){
            if(number-6===1 ||number-6==-5 || number-12===1){
                console.log(flame.splice(0,1))                    
            }else if(number-flame.length===2 || number-6==-4 || number-12===2){
                console.log(flame.splice(1,1))                    
            }else if(number-flame.length===3 || number-6==-3 || number-12===3){
                console.log(flame.splice(2,1))                    
            }else if(number-flame.length===4 || number-6==-2 || number-12===4){
                console.log(flame.splice(3,1))                    
            }else if(number-flame.length===5 || number-6==-1 || number-12===5){
                console.log(flame.splice(4,1))                    
            }else if(number-flame.length===6 ||number-6==0 || number-12===6){
                console.log(flame.splice(5,1))                    
            }
          } else if(flame.length==5){
            if(number-flame.length===1 || number-10==1 || number-5==-4){
                console.log(flame.splice(0,1))                    
            }else if(number-flame.length===2 || number-5==-3 || number-10==2){
                console.log(flame.splice(1,1))                    
            }else if(number-flame.length===3 || number-5==-2 || number-10==3){
                console.log(flame.splice(2,1))                    
            }else if(number-flame.length===4 || number-5==-1 || number-10==4){
                console.log(flame.splice(3,1))                    
            }else if(number-flame.length===5 || number-5==0 || number-10==5){
                console.log(flame.splice(4,1))                    
            } 
          }else if(flame.length==4){
            if(number-4===1 || number-8==1 || number-4==-3 || number-12===1){
                console.log(flame.splice(0,1))                    
            }else if(number-flame.length===2 || number-8==2 || number-4==-2|| number-12===2){
                console.log(flame.splice(1,1))                    
            }else if(number-flame.length===3  || number-8==3 || number-4==-1 || number-12===3){
                console.log(flame.splice(2,1))                    
            }else if(number-flame.length===4 || number-8==4 || number-4==0 || number-12===4){
                console.log(flame.splice(3,1))                    
            } 
          }else if(flame.length==3){
            if(number-3===1 || number-6==1 || number-9==1 || number-3==-2 || number-12===1|| number-15===1){
                console.log(flame.splice(0,1))                    
            }else if(number-flame.length===2 || number-6==2 || number-9==2 || number-3==-1 || number-12===2 || number-15===2){
                console.log(flame.splice(1,1))                    
            }else if(number-flame.length===3  || number-6==3 || number-9==3 || number-3==0 || number-12===3|| number-15===3){
                console.log(flame.splice(2,1))                    
            }
        }
            else if(flame.length==2){
            if(number-2===1 || number-4==1 || number-6==1 || number-8===1 || number-10==1 || number-2==-1 || number-12===1 || number-14===1 || number-16===1){
                console.log(flame.splice(0,1))                    
            }else if(number-flame.length===2 || number-4==2 || number-6==2 || number-8==2 || number-10==2 || number-2==0 || number-12===2|| number-14===2 || number-16===2){
                console.log(flame.splice(1,1))                    
            }
            }
          
        }
    
    
}
let fl = flame=="f"? " Friend" : flame=="l"?"Love" : flame=="a"?"Affection":flame=="m"?"Marriage":flame=="e"?"enimy":"Sister"
console.log(fl)
  
console.log(flame +" ---this is")
let finalanswer= document.getElementById("finalanswer")
finalanswer.innerHTML=fl;
finalanswer.style.border="1px solid palevioletred";
    }
})