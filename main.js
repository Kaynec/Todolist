(()=>{"use strict";const e=()=>{localStorage.setItem("array",JSON.stringify(r.projectsArray))};function t(e){return{title:e,todo:[]}}class n{constructor(e,t,n,r,o){this.title=e,this.date=t,this.description=n,this.done=r,this.priority=o}toggleDone(){this.done=!this.done}togglePriority(){("Normal"===this.priority||"Important"===this.priority)&&this.priority}}var r=function(){let e=[];return e.push(t("default")),{projectsArray:e}}(),o=JSON.parse(localStorage.getItem("array"));o&&(r.projectsArray=o),function(){document.addEventListener("DOMContentLoaded",(e=>{r.projectsArray.forEach((e=>{"default"===e.title&&T(e.todo)}))}));var o=new Date,a=String(o.getDate()).padStart(2,"0"),l=String(o.getMonth()+1).padStart(2,"0"),i=o.getFullYear();o=l+"/"+a+"/"+i;let d=document.getElementById("todolistHolder"),c=document.querySelector("body"),m=document.getElementById("for-select"),s=document.querySelector(".form"),u=document.querySelector(".TEXT");const p=document.querySelector(".paraText");function E(e){m.innerHTML="",e.forEach((e=>{let t=document.createElement("OPTION");t.setAttribute("value",`${e.title}`),t.innerText=e.title,m.append(t),t.setAttribute("id",m.length-1),T(e.todo)}))}function T(t){e(),d.innerHTML="",t.forEach((e=>{let t=document.createElement("DIV");t.classList.add("innerdiv");let n=document.createElement("DIV");n.setAttribute("id","namedate");let r=document.createElement("SPAN");r.innerText=e.title;let o=document.createElement("INPUT");o.setAttribute("id","date"),o.setAttribute("value",e.date),o.setAttribute("type","date"),o.setAttribute("readonly",!0),n.append(r,o);let a=document.createElement("DIV");a.setAttribute("id","paraeditdone");let l=document.createElement("P");l.innerText=e.description;let i=document.createElement("BUTTON"),c=document.createElement("BUTTON"),m=document.createElement("BUTTON");i.setAttribute("id","edit"),i.innerText="Edit",c.setAttribute("id","done"),c.innerText="Not Done Yet",m.setAttribute("id","Xtodo"),m.innerText="X",a.append(l,i,c,m),t.append(n,a),d.append(t);let s=document.getElementsByClassName("innerdiv").length-1;t.setAttribute("id",s),1==e.done?t.style.background="#CDCDCD":"Normal"==e.priority?t.style.background="#a1cae2":"Important"==e.priority&&(t.style.background="#91091e")})),e()}E(r.projectsArray),m.addEventListener("change",(e=>{r.projectsArray.forEach((e=>{e.title==m.value&&T(e.todo)}))})),c.addEventListener("click",(e=>{let a=e.target.parentElement.parentElement;if("Xtodo"===e.target.id&&(e.target.parentElement.parentElement.parentElement.removeChild(a),r.projectsArray.forEach((e=>{m.value==e.title&&e.todo.splice(a.id,1)}))),"X"==e.target.className)u.value="",s.style.display="none";else if("edit"==e.target.id)!function(e){let t=e.target.parentElement.parentElement.id,n=document.createElement("DIV");n.classList.add("todoform");let a=document.createElement("LABEL");a.innerText="Title";let l=document.createElement("INPUT");l.setAttribute("type","text");let i=document.createElement("LABEL");i.innerText="DATE";let d=document.createElement("INPUT");d.setAttribute("type","date"),d.setAttribute("min",o),document.createElement("LABEL").innerText="Priority";let s=document.createElement("LABEL");s.innerText="Description";let u=document.createElement("TEXTAREA");u.setAttribute("maxlength","150");let E=document.createElement("LABEL");E.innerText="Priority";let y=document.createElement("SELECT"),g=document.createElement("OPTION");g.value="Normal",g.innerText="Normal";let v=document.createElement("OPTION");v.value="Important",v.innerText="Important",y.append(g,v);let A=document.createElement("DIV"),x=document.createElement("button");x.innerText="Save",x.setAttribute("id","save"),x.addEventListener("click",(e=>{r.projectsArray.forEach((e=>{var r=0==y.selectedIndex?"Normal":"Important";console.log(r,y.selectedIndex),m.value===e.title&&(l.value&&d.value&&u.value?(e.todo[t].title=l.value,e.todo[t].date=d.value,e.todo[t].description=u.value,e.todo[t].priority=r,console.log(e.todo[t]),T(e.todo),c.removeChild(n)):(p.innerText="Please Fill All Information",setTimeout((()=>{p.innerText=""}),2e3)))}))}));let f=document.createElement("button");f.innerText="Cancel",A.append(x,f),f.addEventListener("click",(e=>{c.removeChild(n)})),n.append(a,l,i,d,s,u,E,y,A),c.append(n)}(e);else if("ADD"==e.target.className){let e=!1;for(let t=0;t<r.projectsArray.length;t++)if(r.projectsArray[t].title==u.value){e=!0;break}if(e||0==u.value||u.value.length>25)if(u.value.length>25)p.innerText="Please Enter a Name Less than 25 Letters",setTimeout((()=>{p.innerText=""}),2e3);else{var l=0==u.value==1?"Please Enter Something ":"Please Choose a Different Project Name";p.innerText=l,setTimeout((()=>{p.innerText=""}),1500)}else{var i=t(u.value);r.projectsArray.push(i),E(r.projectsArray),s.style.display="none",m.value=u.value}}else if("addproject"===e.target.id)s.style.display="flex";else if("addtodo"===e.target.id)!function(){let e=document.createElement("DIV");e.classList.add("todoform");let t=document.createElement("LABEL");t.innerText="Title";let a=document.createElement("INPUT");a.setAttribute("type","text");let l=document.createElement("LABEL");l.innerText="DATE";let i=document.createElement("INPUT");i.setAttribute("type","date"),i.setAttribute("min",o),document.createElement("LABEL").innerText="Priority";let d=document.createElement("LABEL");d.innerText="Description";let s=document.createElement("TEXTAREA");s.setAttribute("maxlength","150");let E=document.createElement("LABEL");E.innerText="Priority";let y=document.createElement("SELECT"),g=document.createElement("OPTION");g.value="Normal",g.innerText="Normal";let v=document.createElement("OPTION");v.value="Important",v.innerText="Important",y.append(g,v);let A=document.createElement("DIV"),x=document.createElement("button");x.innerText="Save",x.setAttribute("id","save"),x.addEventListener("click",(t=>{r.projectsArray.forEach((t=>{t.title==m.value&&(a.value.length>25?(p.innerText="Please Enter a Name Less than 25 Letters",setTimeout((()=>{p.innerText=""}),2e3)):(t.todo.push(new n(a.value,i.value,s.value,!1,y.value)),c.removeChild(e),T(t.todo)),console.log(p.innerText),console.log(u.value.length),console.log(a.value.length))}))}));let f=document.createElement("button");f.innerText="Cancel",A.append(x,f),f.addEventListener("click",(t=>{c.removeChild(e)})),e.append(t,a,l,i,d,s,E,y,A),c.append(e)}();else if("removeproject"===e.target.id){let e=document.getElementById("for-select").selectedIndex;0===e?(p.innerText="Cannot Remove The Default Project",setTimeout((()=>{p.innerText=""}),1500)):(p.innerText=`Succesfully removed project ${r.projectsArray[e].title}`,setTimeout((()=>{p.innerText=""}),1500),r.projectsArray.splice(e,1),E(r.projectsArray))}else if("done"==e.target.id){let t=a.id;r.projectsArray.forEach((n=>{if(m.value==n.title)if("Not Done Yet"===e.target.innerText)n.todo[t].done=!0,a.style.background="#CDCDCD",e.target.innerText="Done",e.target.style.background="grey";else if("Done"===e.target.innerText){n.todo[t].done=!1;var r="Important"==n.todo[t].priority?"#91091e":"#a1cae2";e.target.innerText="Not Done Yet",e.target.style.background="#4a47a3",a.style.background=r}}))}}))}(),JSON.parse(localStorage.getItem("current"))})();