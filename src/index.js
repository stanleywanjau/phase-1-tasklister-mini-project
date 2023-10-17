document.addEventListener("DOMContentLoaded", () => {
  // your code here
 const form = document.querySelector(`form`)
 form.addEventListener(`submit`,(ev) =>{
  ev.preventDefault()
  taskAdder(ev.target.new_task_description.value)
 })
});

function taskAdder(task){
  let listitem= document.createElement(`li`)
  let p = document.createElement(`p`)
  p.textContent=` ${task}`
  let btn = document.createElement(`button`)
  btn.textContent=`X`
  btn.addEventListener(`click`,deleteTask)
  p.appendChild(btn)
  listitem.appendChild(p)
  document.querySelector(`#tasks`).appendChild(listitem)
}
function deleteTask(ev){
  ev.target.parentNode.remove()
}