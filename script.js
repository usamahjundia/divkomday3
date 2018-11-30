var todo = [];
function todolist() {
    var somethingtodo = document.getElementById('somethingtodo').value;
    if (somethingtodo) {
        todo.push(somethingtodo);
        var listElement = document.getElementById('list');
        var response = '<ul>';
        i = 0;
        while (todo[i]) {
            response += '<li>' + todo[i] + ' </li>';
            i++;
        }
        response += '</ul>';
    }

    document.getElementById('somethingtodo').value = "";
    listElement.innerHTML = response;
}