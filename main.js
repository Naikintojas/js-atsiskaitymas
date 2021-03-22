// kintamieji
var input = document.getElementById('todo-input');
var add = document.getElementById('add');
var tbody = document.querySelector('tbody');
var todo = [
    ['pirmas'],
]

// funkcija
function mygtukasTd(tekstas) {
    var td = document.createElement('td');
    var button = document.createElement('button');
    button.classList.add(tekstas);
    button.innerText = tekstas;
    td.appendChild(button);
    return td;
}

function printTable() {
    tbody.innerHTML = '';
    for (var i = 0; i < todo.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < todo[i].length; j++) {
            var td = document.createElement('td');
            td.innerText = todo[i][j];
            tr.appendChild(td);
        }
        tr.appendChild(mygtukasTd('Delete'));
        tr.appendChild(mygtukasTd('Done'));
        tbody.appendChild(tr);
    }
}

printTable();

// Prideti duomenis
add.addEventListener('click', function () {
    var m = [input.value];
    todo.unshift(m);
    printTable();
});