export {makeProject}
export {makeTodo}
export {MyObject}

function makeProject(title){
        let todo=[]
        return {title,todo}
}
function makeTodo(title,date,description,done,priority){
    done=false
    function toggleDone(){
        if (done){
            return done===false
        }else if (done===false){
            return done===true
        }
    }
    function togglePriority(){
        if (priority==='Normal'){
            priority==='important'
        }else if (priority=='important'){
            priority==='Normal'
        }
    }
    return {title,date,description,done,priority,togglePriority,toggleDone}
}

var MyObject = function() {
    let projectsArray=[];
    projectsArray.push(makeProject('default'))
    return {
        projectsArray
    }
}();