
function deleteFuel() {
    var name = $('#fuelNameForDelete').val();
    $.ajax({
        type: "GET",
        url: "/fuel/search/deleteByFuelName?fuelName=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/fuel/search/deleteAll/"
    });
}



function addNewFuel() {
    var fuelName = $('#fuelName').val();
    var fuelCapacity = $('#fuelCapacity').val();
    var fuelOrder = $('#fuelOrder').val();

    var requestJSONparametr = "{\"fuelName\": \"" + fuelName + "\"" +
        ", \"fuelCapacity\": \"" + fuelCapacity + "\", \"fuelOrder\": \"" + fuelOrder + "\"}";
    $.ajax({
        type: "POST",
        url: "/fuel/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/fuel/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.fuel.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['fuelName'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['fuelCapacity'];
        var price = document.createElement('td');
        price.innerHTML = item['fuelOrder'];
        var elementRow = document.createElement('tr'); /// /создаем строку таблицы

        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        elementRow.appendChild(itemPriceElement);
        elementRow.appendChild(price);
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });

};

priceRequest.send(null);
