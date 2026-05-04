//create state and some mock data
// R - READ of CRUD

let tasks = [
    {
        "id" : 1,
        "name" : "wash the car",
        "dateDue" : "2026-05-05",
        "urgency" : 3
    },
    {
        "id" : 2,
        "name" : "clean the room",
        "dateDue" : "2026-05-05",
        "urgency" : 1
    },
    {
        "id" : 3,
        "name" : "buy cat fod",
        "dateDue" : "2026-05-05",
        "urgency" : 5
    }
]
//tasks will be an array of objects and each 
// objject must have the foillowing properties - id, name, dateDue and urgency
function displayTasks(tasks) {

    let i = 0;
    while (i < tasks.length) {

    let currentTask = tasks[i];
    console.log('$(currentTask.id').$(currentTask.name) is due on $(currentTask.dateDue) with 
    urgency $(currentTask.urgency)');

    // expected output
    //1. "wash the car" (Date due: 2026-05-05, Urgency: 3)""
    // console.log(tasks[1]);
    // console.log(tasks[2]);
}

displayTasks(tasks);