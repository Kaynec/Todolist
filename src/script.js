export {makeProject}
export {makeTodo}
export {MyObject}

function makeProject(title){
        let todo=[]
        return {title,todo}
}
class makeTodo{
    constructor(title,date,description,done,priority){
        this.title=title
        this.date=date
        this.description=description
        this.done=done
        this.priority=priority
    }
    toggleDone(){
        this.done=!this.done
    }
    togglePriority(){
        if (this.priority==='Normal'){
            this.priority==='Important'
        }else if (this.priority==='Important'){
            this.priority==='Normal'
        }
    }
}

var MyObject = function() {
    let projectsArray=[];
    projectsArray.push(makeProject('default'))
    return {
        projectsArray
    }
}();