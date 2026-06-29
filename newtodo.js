let a=[];
function add(){
    let input=document.querySelector(".input").value.trim();
    if(input===""){
        alert("Please Add Tasks");
    }else{
        document.querySelector(".input").value=""
        a.push(input);
    }
}
function list(){
    let lists=document.querySelector(".taskslist");
    lists.innerHTML="";
    if(a.length=== 0){
        lists.innerHTML="<li>No Tasks Are avaialbale</li>";

    }else{
        for(let ele of a){
                    let li=document.createElement("li");

            li.textContent=ele+"    ";
          
            let complete=document.createElement("button");
            complete.textContent="✅ completed";
            complete.onclick=function(){
                li.style.textDecoration="line-through";
                li.style.color="green";
            };
            let cancelbtn=document.createElement("button");
            cancelbtn.textContent="❌ Cancel";
            cancelbtn.onclick=function(){
                li.remove();
                a.pop();
            }
 lists.appendChild(li);
        li.appendChild(complete);
        li.appendChild(cancelbtn);
        }
       
    }
}