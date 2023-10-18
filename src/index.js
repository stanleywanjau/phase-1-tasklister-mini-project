document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function fetchBooks() {
    // To pass the tests, don't forget to return your fetch!
    return fetch('https://anapioficeandfire.com/api/books')
    .then((response)=> response.json())
    .then((json) => renderBooks(json)) 
  
  }
  
  function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
    });
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();
  });
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
