
function deleteAuto() {
    var name = $('#markForDelete').val();
    $.ajax({
        type: "GET",
        url: "/auto/search/deleteByMark?mark=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/auto/search/deleteAll/"
    });
}



function addNewAuto() {
    var mark = $('#mark').val();
    var color = $('#color').val();
    var engineCapacity = $('#engineCapacity').val();
    var tankCapacity = $('#tankCapacity').val();
    var wear = $('#wear').val();

    var requestJSONparametr = "{\"mark\": \"" + mark + "\"" +
        ", \"color\": \"" + color + "\", \"engineCapacity\": \"" + engineCapacity + "\", \"tankCapacity\": \"" + tankCapacity + "\"" +
        ", \"wear\": \"" + wear + "\"}";
    $.ajax({
        type: "POST",
        url: "/auto/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/auto/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.auto.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['mark'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['color'];
        var engineCapacity = document.createElement('td');
        engineCapacity.innerHTML = item['engineCapacity'];
        var tankCapacity = document.createElement('td');
        tankCapacity.innerHTML = item['tankCapacity'];
        var wear = document.createElement('td');
        wear.innerHTML = item['wear'];
        var elementRow = document.createElement('tr'); /// /создаем строку таблицы

        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        elementRow.appendChild(itemPriceElement);
        elementRow.appendChild(engineCapacity);
        elementRow.appendChild(tankCapacity);
        elementRow.appendChild(wear);
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });

};

priceRequest.send(null);
