document.getElementById("task-btn").addEventListener("click", function () {
    const inputArea = document.getElementById("input-value").value;

    const header = document.getElementById("content-container");

    const createElement = document.createElement("tr");
    createElement.innerHTML = inputArea;
    header.appendChild(createElement)

    const clear = document.getElementById("clear-btn").addEventListener("click",() => {
        header.innerHTML = '';
    })
    document.getElementById("input-value").value = '';
})