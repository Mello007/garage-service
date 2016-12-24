
function deleteDimensions() {
    var name = $('#lengthForDelete').val();
    $.ajax({
        type: "GET",
        url: "/dimensions/search/deleteByLength?length=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/dimensions/search/deleteAll/"
    });
}



function addNewDimensions() {
    var length = $('#length').val();
    var width = $('#width').val();
    var height = $('#height').val();

    var requestJSONparametr = "{\"length\": \"" + length + "\"" +
        ", \"width\": \"" + width + "\", \"height\": \"" + height + "\"}";
    $.ajax({
        type: "POST",
        url: "/dimensions/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/dimensions/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.dimensions.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['length'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['width'];
        var price = document.createElement('td');
        price.innerHTML = item['height'];
        var elementRow = document.createElement('tr'); /// /создаем строку таблицы

        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        elementRow.appendChild(itemPriceElement);
        elementRow.appendChild(price);
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });

};

priceRequest.send(null);
