
function deleteProvider() {
    var name = $('#descriptionForDelete').val();
    $.ajax({
        type: "GET",
        url: "/provider/search/deleteByDescription?description=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/provider/search/deleteAll/"
    });
}



function addNewProvider() {
    var name = $('#name').val();
    var numberPhone = $('#numberPhone').val();
    var address = $('#address').val();
    var requestJSONparametr = "{\"name\": \"" + name + "\"" +
        ", \"numberPhone\": \"" + numberPhone + "\", \"address\": \"" + address + "\"}";
    $.ajax({
        type: "POST",
        url: "/provider/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/provider/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.provider.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['name'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['numberPhone'];
        var address = document.createElement('td');
        address.innerHTML = item['address'];
        var elementRow = document.createElement('tr'); /// /создаем строку таблицы

        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        elementRow.appendChild(itemPriceElement);
        elementRow.appendChild(address);
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });

};

priceRequest.send(null);

