// Initialize Icons
lucide.createIcons();

let tasks = [
    { id: 1, text: "Initial Setup with Confluence Design", status: "Done" },
    { id: 2, text: "Customize Sidebar Colors", status: "In Progress" }
];

function renderTasks() {
    const list = document.getElementById('task-list');
    list.innerHTML = tasks.map(task => `
        <div class="task-item">
            <span>${task.text}</span>
            <div><span class="status-badge">${task.status}</span></div>
            <button onclick="deleteTask(${task.id})" style="border:none; color:red; background:none; cursor:pointer;">Remove</button>
        </div>
    `).join('');
}

function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value === "") return;
    
    tasks.push({
        id: Date.now(),
        text: input.value,
        status: "To Do"
    });
    
    input.value = "";
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}

function showSection(type) {
    const taskArea = document.getElementById('task-workspace');
    const calArea = document.getElementById('calendar-workspace');
    
    if (type === 'calendar') {
        taskArea.style.display = 'none';
        calArea.style.display = 'block';
        document.getElementById('page-title').innerText = "Team Calendar";
    } else {
        taskArea.style.display = 'block';
        calArea.style.display = 'none';
        document.getElementById('page-title').innerText = "Project Roadmap";
    }
}

// Admin Trigger (Triple Click Taskify Logo)
let logoClicks = 0;
document.querySelector('.logo-section').addEventListener('click', () => {
    logoClicks++;
    if (logoClicks === 3) {
        alert("Taskify Admin Terminal Activated.");
        logoClicks = 0;
    }
});

renderTasks();