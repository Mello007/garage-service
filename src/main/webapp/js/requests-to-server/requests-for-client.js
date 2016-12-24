
function deleteClient() {
    var name = $('#nameForDelete').val();
    $.ajax({
        type: "GET",
        url: "/client/search/deleteByFio?fio=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/client/search/deleteAll/"
    });
}



function addNewClient() {
    var fio = $('#fio').val();
    var numberPhone = $('#numberPhone').val();
    var address = $('#address').val();

    var requestJSONparametr = "{\"fio\": \"" + fio + "\"" +
        ", \"numberPhone\": \"" + numberPhone + "\", \"address\": \"" + address + "\"}";
    $.ajax({
        type: "POST",
        url: "/client/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/client/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.client.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['name'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['numberPhone'];
        var price = document.createElement('td');
        price.innerHTML = item['address'];
        var elementRow = document.createElement('tr'); /// /создаем строку таблицы

        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        elementRow.appendChild(itemPriceElement);
        elementRow.appendChild(price);
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });

};

priceRequest.send(null);
