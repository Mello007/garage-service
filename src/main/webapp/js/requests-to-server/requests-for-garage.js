
function deleteGarage() {
    var name = $('#nameForDelete').val();
    $.ajax({
        type: "GET",
        url: "/garage/search/deleteByName?name=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/garage/search/deleteAll/"
    });
}



function addNewGarage() {
    var name = $('#name').val();

    var requestJSONparametr = "{\"name\": \"" + name + "\"}";
    $.ajax({
        type: "POST",
        url: "/garage/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/garage/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.garage.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML = item['name'];
        var elementRow = document.createElement('tr'); /// /создаем строку таблицы

        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });

};

priceRequest.send(null);

