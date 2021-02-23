export {makeProject}
export {makeTodo}
export {MyObject}

function makeProject(title){
        return {title}
}
function makeTodo(title,date,description,done,priority){
    done=false
    function toggleDone(){
        if (done){
            done==false
        }else if (done==false){
            done==true
        }
    }
    function togglePriority(){
        if (priority=='Normal'){
            priority=='important'
        }else if (priority=='important'){
            priority=='Normal'
        }
    }
    return {title,date,description,done,priority,togglePriority,toggleDone}
}

var MyObject = function() {
    let projectsArray=[];
    projectsArray.push(makeProject('default'))
    function addTodotoProject(){
        projectsArray.forEach(item=>{
            item.todo=[]
        } )
    }
    addTodotoProject()
    return {
        projectsArray
    }
}();

