const input=document.getElementById("inp")
const button=document.querySelectorAll(".btn")
let button_array=Array.from(button);
let string=""
button_array.forEach(element => {
    element.addEventListener('click',(e)=>{
        
        let click_btn =e.target.innerHTML;
        
        if(click_btn=="AC"){
            input.value="";
            string="";
        }
        else if(click_btn=="DEL"){
             string=string.substring(0,string.length-1)
            input.value=string;
        }
        else if(click_btn=="="){
            string=Math.floor(eval(string))
            input.value=string
        }
        else{
        string+=click_btn;
        input.value=string;
        }
    })
});
