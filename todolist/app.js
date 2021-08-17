//UI
const form = document.getElementById('task-form');
const taskinput = document.getElementById('task');
const filter = document.getElementById('filter');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');

function addtasks(e){
    e.preventDefault();
    // if(tasklist === ''){
    //     window.alert('Add a task');
    //     return;
    // }

    if(taskinput.value == ''){
        window.alert('Add a task');
    }else{

        //create li element
        const li = document.createElement('li');

        //add class
        li.classList.add('collection-item');

        //creat text node append to li
        li.appendChild(document.createTextNode(taskinput.value));

        //create link
        const link = document.createElement('a');

        //add class
        link.className = 'delete-item secondary-content';

        link.innerHTML = `<i class='fas fa-trash-alt'></i>`;

        //append link to li
        li.appendChild(link);

        //append li to ul
        tasklist.appendChild(li);

        // console.log(li);
        // console.log(link);'

        storetaskLS(taskinput.value);
    }

    taskinput.value = '';

}

//Remove Task
function removetask(e){
    // console.log(e.target);
    const li = e.target.parentElement.parentElement;

    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are u sure??')){
            
            li.remove();
        }
        
    }

    //remove task from localStorage
    removetaskfromLS(li);
}

//Clear Tasks
function cleartasks(){
    //Method 1
    // tasklist.innerHTML = '';

    //Method 2
    // let x = 0;
    // while(x<tasklist.childElementCount){
    //     tasklist.removeChild(tasklist.firstChild);
    // }

    //Method 3
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }

    cleartasksfromLS();
}

//Store Task
function storetaskLS(task){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));

    // console.log(tasks);
}

//Get tasks from localStorage
function gettasks(){
    // console.log('hay');
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task) => {
        // console.log(task);

        //creat li element
        const li = document.createElement('li');
        //add class
        li.className = 'collection-item';
        //create text node and append to li
        li.appendChild(document.createTextNode(task));


        //create new link element
        const link = document.createElement('a');
        //add class
        link.className = 'delete-item secondary-content';
        //add icon
        link.innerHTML = `<i class='far fa-trash-alt'></i>`;
        //append link to li
        li.appendChild(link);

        //append li to ul
        tasklist.appendChild(li);

    });
}


//Remove task from localStorage
function removetaskfromLS(taskitem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task,index)=>{
        if(taskitem.textContent === task){
            //where we want to start(idex), where we want to end(how many)
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
}


//Clear All Data from localStorage
function cleartasksfromLS(){
    localStorage.clear();
}

//Filter Tasks
function filtertasks(e){
    const inputfilter = e.target.value.toLowerCase();
    // console.log(inputfilter);

    const tasks = document.querySelectorAll('.collection-item');
    tasks.forEach((task)=>{
        const item = task.firstChild.textContent.toLowerCase();
        // console.log(item);

        if(item.indexOf(inputfilter) !== -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    })
}

//Event Listener
form.addEventListener('submit',addtasks);

//Remove Task
tasklist.addEventListener('click',removetask);

//Clear All Task
clearbtn.addEventListener('click',cleartasks);

//DOM load Event
document.addEventListener('DOMContentLoaded',gettasks);

//Filter task event
filter.addEventListener('keyup',filtertasks);
