// var helloWorld = document.getElementById("mainTitle")
// var listContainer = document.getElementsByTagName('ul')
// var listItems = document.getElementsByTagName('li')

// var listContainer = document.getElementsByClassName('listContainer')
// var listItems = document.getElementsByClassName('lista')

var helloWorld = document.querySelector("#mainTitle")
var listContainer = document.querySelector('ul')
var listItems = document.querySelectorAll('.lista')
var alertBtn = document.querySelector('button.alertBtn')
var alertInput = document.querySelector('input.alertInput')
// var hoverMe = document.querySelector('.hoverMe')
var mouseCursor = document.querySelector('.mouseCursor')

var todoList = []

alertBtn.addEventListener('click',function(event){
  console.log("Event ",event)
  todoList.push({title:alertInput.value, completed:false})
  renderList(todoList)
  alertInput.value = ''
})
alertInput.onkeydown = function(event){
  console.log("Event",event)
  // controllare se ho premuto invio
  if(event.keyCode == 13){
    alertBtn.click(event)
  }

}

window.addEventListener('mousemove',function(event){
  console.log("Ti stai muovendo nella finestra",event)
  mouseCursor.style.top=(event.clientY-75)+'px'
  mouseCursor.style.left=(event.clientX-75)+'px'
})


// hoverMe.addEventListener('mouseenter',function(){
//   console.log("Mouse Enter")
//   hoverMe.classList.toggle('redBg')
// })
// hoverMe.addEventListener('mouseleave',function(){
//   hoverMe.classList.toggle('redBg')
//   console.log("Mouse Leave")
// })
// var rotX = 0;
// var rotY = 0
// hoverMe.addEventListener('mousewheel',function(event){
//   rotX += event.deltaX
//   rotY += event.deltaY
//   hoverMe.style.transform="rotateY("+rotX+"deg)"
//   hoverMe.style.transform="rotateZ("+rotY+"deg)"
// })

// window.onresize = function(event){
//   // console.log("Stai ridimensionando la finestra", event.target)
//   if(event.target.innerWidth<=600){
//     console.log("La finestra è piccola")
//   }
// }

alertBtn.onclick=function(event){
  console.log("Stai cliccando il pulsante")
}

function renderList(list){
  listContainer.innerHTML=''
  for(var i = 0; i<list.length; i++){
    var li = list[i]
    var listItem = document.createElement('li')
    var title = document.createElement('span')
    var completed = document.createElement('button')
    var edit = document.createElement('button')
    var deleted = document.createElement('button')

    title.innerHTML = "<del>"+li.title+"</del>"
    title.classList.add('flex-grow-1')
    title.classList.add(li.completed ? 'text-decoration-line-through':null)



    completed.innerHTML = "⚡️"
    completed.classList.add('btn','btn-outline-primary')
    
    
    edit.innerHTML = "🖋"
    edit.classList.add('btn','btn-outline-primary')
    
    
    deleted.innerHTML= "✖︎"
    deleted.classList.add('btn','btn-outline-primary')


    listItem.classList.add('text-primary', 'd-flex','align-items-baseline')
    listItem.classList.add('bg-light')
    // listItem.innerHTML = li 
    listItem.appendChild(title)
    listItem.appendChild(completed)
    listItem.appendChild(edit)
    listItem.appendChild(deleted)

    listContainer.appendChild(listItem)
  }
}





