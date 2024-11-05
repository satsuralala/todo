today_list=["jhrget"];
pending_list=[];
overdue_list=[];

// const addbutton=document.getElementById

function addtask(){

    const taskContainer = document.getElementById("taskContainer");
        taskContainer.style.display = "block" ;
}
function closeTaskContainer(){
    const taskContainer = document.getElementById("taskContainer");
        taskContainer.style.display = "none" ;
}
const Titleinput = document.getElementById("lname");
const deadlineInput=document.getElementById("dateInput")
const priorityInput=document.getElementById("priorityInput")
const textInput=document.getElementById("textInput")


let list = document.getElementById("list");
      let n = 0;
      function addToOthersection() {
       
    
    
    
        
          const newTask = `
        <div clas="list-container">
        <div>
            <div class="box is-flex is-justify-content-space-between mt-4 task_cont" id="task_${n}">
                <label style="display:flex; align-items:center; gap:10px" class="radio">
                    <input  type="checkbox" "name="answer"  onchange="checke(event, ${n})"/>
                    <span class="titleinput" id = "task_name_${n}">${Titleinput.value}</span>
                </label>
                <div style="display:flex; gap:5px; align-items:center;">
                    <span class="material-symbols-outlined" id="clock_icon">schedule</span>
                    <span class="task_dl" id = "task_deadline_${n}" style="display:flex; align-items:center" >${dateInput.value}</span>              
                </div>
                
                <div class="icons">
                    <button class="button is-danger is-hovered" onclick="edittask(${n});">
                        <span class="material-symbols-outlined" >
                        edit
                        </span>
                        </button>
                    <button class="button is-danger is-hovered" onclick="deletetask(${n});">
                        <span class="material-symbols-outlined">
                            delete
                            </span>
                        </button>
                    
                    
                </div>

            </div>
            
        </div>
        </div>
        
        `;
          list.innerHTML = list.innerHTML + newTask;
          n++;
        
      
      
        document.getElementById("lname").value = null;
        document.getElementById("dateInput").value = null;
        document.getElementById("priorityInput").value = null;
        document.getElementById("textInput").value = null;
      
        taskContainer.style.display = "none" ;
        if(deadlineInput.value=null){
        clock_icon.style.display="none" 
      }else{
         clock_icon.style.display="block"
      }

      let tasks={
        name:Titleinput.value,
        dl:deadlineInput.value,
        priority:priorityInput.value,
        comment:textInput.value
      }
      if(tasks.priority==="High"){
        today_list.unshift(task);
      }else{
        today_list.push(task);
      }
      generate_today_list();




    

      }



      function deletetask(n) {
        if (confirm("are u sure to delete this task")){
          document.getElementById(`task_${n}`).remove();
          return
        }
      }

      function edittask(n) {

        const taskContainer = document.getElementById("taskContainer");
        taskContainer.style.display = "block" ;
        // Titleinput.innerText=document.getElementById("lname");

      }
      function checked(event, i) {
        if (event.target.checked) {
          document.getElementById(`task_name_${i}`).style.textDecoration =
            "line-through";
        } else {
          document.getElementById(`task_name_${i}`).style.textDecoration =
            "none"; 
        }
      }

