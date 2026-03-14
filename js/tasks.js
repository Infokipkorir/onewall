const tasks = [

{
title:"Follow Facebook Page",
reward:"$0.10",
time:"2 mins"
},

{
title:"Subscribe YouTube Channel",
reward:"$0.12",
time:"3 mins"
},

{
title:"Visit Website",
reward:"$0.05",
time:"1 min"
}

];

const container = document.getElementById("taskList");

tasks.forEach(task=>{

const div=document.createElement("div");

div.innerHTML=`

<h3>${task.title}</h3>
<p>Time: ${task.time}</p>
<p>Reward: ${task.reward}</p>
<button>Start Task</button>

`;

container.appendChild(div);

});
