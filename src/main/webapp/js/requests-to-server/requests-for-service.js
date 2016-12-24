
function deleteService() {
    var name = $('#descriptionForDelete').val();
    $.ajax({
        type: "GET",
        url: "/service/search/deleteByDescription?description=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/service/search/deleteAll/"
    });
}



function addNewService() {
    var description = $('#description').val();
    var price = $('#price').val();
    var date = $('#date').val();

    var requestJSONparametr = "{\"description\": \"" + description + "\"" +
        ", \"price\": \"" + price + "\", \"date\": \"" + date + "\"}";
    $.ajax({
        type: "POST",
        url: "/service/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/service/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.service.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['description'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['price'];
        var price = document.createElement('td');
        price.innerHTML = item['date'];
        var elementRow = document.createElement('tr'); /// /создаем строку таблицы

        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        elementRow.appendChild(itemPriceElement);
        elementRow.appendChild(price);
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });

};

priceRequest.send(null);
