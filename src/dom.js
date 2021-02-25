import {makeProject} from './script'
import {makeTodo} from './script'
import {MyObject} from './script'
export {buttonEvents}
// The Main Module That Manages The Dom Section
let buttonEvents=function(){
// date of today
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
// Cache Dom
let container=document.getElementById('todolistHolder')
let body = document.querySelector('body')
let select = document.getElementById('for-select')
let form = document.querySelector('.form');
let addproject =document.getElementById('addproject')
let text=document.querySelector('.TEXT')
// Initial Loop Through Array
loopthroughProject(MyObject.projectsArray)
// Event Listeners For The Edit And Adding A Project And Closing A Project And Toggling Done Status
addproject.addEventListener('click',(e)=>{
    form.style.display='flex'
})
form.addEventListener('click',(e)=>{
    if (e.target.className=='X'){
        text.value=''
        form.style.display='none'
    }else if (e.target.className=='ADD'){
        var push = makeProject(text.value)
        MyObject.projectsArray.push(push)
        loopthroughProject(MyObject.projectsArray)
        form.style.display='none'
        select.value=text.value
    }
})
// Fucntion for displaying the Elements To Screen
function loopthroughProject(array){
    select.innerHTML=''
    array.forEach(element => {
        let option = document.createElement('OPTION')
        option.setAttribute('value',`${element.title}`)
        option.innerText=element.title
        select.append(option)
        option.setAttribute('id',select.length-1)
    });   
}
// Looping Through Every Project And Showing It's Todos
function loopthroughTodolist(element){
    container.innerHTML=''
    element.forEach(item =>{
    let div=document.createElement('DIV')
    div.classList.add('innerdiv')
    let namedate = document.createElement('DIV')
    namedate.setAttribute('id','namedate')
    let span = document.createElement('SPAN')
    span.innerText=item.title
    let input = document.createElement('INPUT')
    input.setAttribute('id','date')
    input.setAttribute('value',item.date)
    input.setAttribute('type','date')
    input.setAttribute('readonly',true)
    namedate.append(span,input)
    let div2 = document.createElement('DIV')
    div2.setAttribute('id','paraeditdone')
    let para = document.createElement('P')
    para.innerText=item.description
    let button=document.createElement('BUTTON')
    ,button2=document.createElement('BUTTON')
    ,button3=document.createElement('BUTTON')
    button.setAttribute('id','edit')
    button.innerText='Edit'
    button2.setAttribute('id','done')
    button2.innerText='Not Done Yet'
    if (item.done===true){
        innerDiv.style.background='#CDCDCD'
        button2.innerText='Done'
        button2.style.background='grey'
    }
    button3.setAttribute('id','Xtodo')
    button3.innerText='X'
    div2.append(para,button,button2,button3)
    div.append(namedate,div2)
    container.append(div)
    let length=document.getElementsByClassName('innerdiv').length-1
    div.setAttribute('id',length)
// Deciding The Background Of The Div
    if (item.priority=='Normal'){
        div.style.background='#a1cae2'
    }else if (item.priority=='Important'){
        div.style.background='#91091e'
    }
})
}
// The Form For Adding A Todo , changing The Todos According To The Selected Option 
select.addEventListener('change',(e)=>{
    MyObject.projectsArray.forEach(item=>{
        if (item.title==select.value){
            loopthroughTodolist(item.todo)
        }
    })
})
// Event Listener For Changing Editing And Removing Todo Lists And Creating A Todo And The TodoForm
body.addEventListener('click',(e)=>{
    let innerDiv=e.target.parentElement.parentElement
    if (e.target.id==='Xtodo'){
    e.target.parentElement.parentElement.parentElement.removeChild(innerDiv)
    MyObject.projectsArray.forEach(item=>{
        if (select.value==item.title){
            item.todo.splice(innerDiv.id,1)
        }
    })
    }
    else if (e.target.id==='edit'){
        changeTodoInformation(e)
        MyObject.projectsArray.forEach(item=>{
            console.log(item.todo)
            loopthroughTodolist(item.todo)
        })
    }else if (e.target.id==='addtodo'){
        todoForm()
    }
    else if (e.target.id==='removeproject'){     
    const p = document.createElement('P')
    body.append(p)
    let option = document.getElementsByTagName('option')
     for (let i =0 ;i<option.length;i++){
     MyObject.projectsArray.forEach(item=>{
    if (item.title===option[i].value){
    if (item.title==='default'){
        p.innerText=`You Can't Remove The Default Project`
        p.classList.toggle('paraText')
        setTimeout(()=>{
        p.innerText=''
        },2000)
    } else {
        MyObject.projectsArray.splice(option[i].id,1)
        loopthroughProject(MyObject.projectsArray)
        p.innerText=`Succesfully Deleted The Project ${item.title}`
        p.classList.add('paraText')
        setTimeout(()=>{
            p.innerText=''
            },2000)
        }
    }
    })
}
}
else if (e.target.id=='done'){
let check=innerDiv.style.background==='#a1cae2'?'#a1cae2':'#91091e'
let id = innerDiv.id
    MyObject.projectsArray.forEach(item=>{
    if(item.todo[id].done===false){
        innerDiv.style.background='#CDCDCD'
        e.target.innerText='Done'
        e.target.style.background='grey'
        item.todo[id].toggleDone()
    }else if (item.todo[id].done===true){
        e.target.innerText='Not Done Yet'
        e.target.style.background='#4a47a3'
        innerDiv.style.background=check
        item.todo[id].toggleDone()
    }
    })
}
})
// Displays The Todoform Responsible For Adding Todos
function todoForm(){
    let div = document.createElement('DIV')
    div.classList.add('todoform')
    let label = document.createElement("LABEL")
    label.innerText='Title'
    let input = document.createElement('INPUT')
    input.setAttribute('type','text')
    let label2= document.createElement('LABEL')
    label2.innerText='DATE'
    let input2=document.createElement('INPUT')
    input2.setAttribute('type','date')
    input2.setAttribute('min',today)
    let label3 = document.createElement('LABEL')
    label3.innerText='Priority'
    let label4 = document.createElement('LABEL')
    label4.innerText='Description'
    let description=document.createElement('TEXTAREA')
    description.setAttribute('maxlength','150')
    let label5=document.createElement("LABEL")
    label5.innerText='Priority'
    let selectPriority=document.createElement('SELECT')
    let option=document.createElement('OPTION')
    option.value='Normal'
    option.innerText='Normal'
    let option2=document.createElement('OPTION')
    option2.value='Important'
    option2.innerText='Important'
    selectPriority.append(option,option2)
    let innerdiv=document.createElement('DIV')
    let add=document.createElement("button")
    add.innerText='Save'
    add.setAttribute('id','save')
    add.addEventListener('click',(e)=>{
    MyObject.projectsArray.forEach(item=>{
    if (item.title==select.value){
        item.todo.push(new makeTodo(input.value,input2.value,description.value,false,selectPriority.value))
        body.removeChild(div)
        loopthroughTodolist(item.todo)
        }
    })
})
    let cancel= document.createElement('button')
    cancel.innerText='Cancel'
    innerdiv.append(add,cancel)
    cancel.addEventListener('click',(e)=>{
        body.removeChild(div)
    })
    div.append(label,input,label2,input2,label4,description,label5,selectPriority,innerdiv)
    body.append(div)
}

// function changeTodoInformation(e){
//     let div = document.createElement('DIV')
//     div.classList.add('todoform')
//     let label = document.createElement("LABEL")
//     label.innerText='Title'
//     let input = document.createElement('INPUT')
//     input.setAttribute('type','text')
//     let label2= document.createElement('LABEL')
//     label2.innerText='DATE'
//     let input2=document.createElement('INPUT')
//     input2.setAttribute('type','date')
//     input2.setAttribute('min',today)
//     let label3 = document.createElement('LABEL')
//     label3.innerText='Priority'
//     let label4 = document.createElement('LABEL')
//     label4.innerText='Description'
//     let description=document.createElement('TEXTAREA')
//     description.setAttribute('maxlength','150')
//     let label5=document.createElement("LABEL")
//     label5.innerText='Priority'
//     let selectPriority=document.createElement('SELECT')
//     let option=document.createElement('OPTION')
//     option.value='Normal'
//     option.innerText='Normal'
//     let option2=document.createElement('OPTION')
//     option2.value='Important'
//     option2.innerText='Important'
//     selectPriority.append(option,option2)
//     let innerdiv=document.createElement('DIV')
//     let save=document.createElement("button")
//     save.innerText='Save'
//     save.setAttribute('id','save')
//     // This Is Selecting The Innerdiv
//     let id = e.target.parentElement.parentElement.id
//     save.addEventListener('click',(e)=>{
//     var check = selectPriority.selectedIndex==0?'Normal':'Important' 
//     MyObject.projectsArray.forEach(item=>{
//     item.todo[id].title=input.value
//     item.todo[id].date=input2.value
//     item.todo[id].description=description.value
//     item.todo[id].priority=check
//     body.removeChild(div)
//     })
//     })
//     let cancel= document.createElement('button')
//     cancel.addEventListener('click',e=>body.removeChild(div))
//     cancel.innerText='Cancel'
//     innerdiv.append(save,cancel)
//     div.append(label,input,label2,input2,label4,description,label5,selectPriority,innerdiv)
//     body.append(div)
// }

}();