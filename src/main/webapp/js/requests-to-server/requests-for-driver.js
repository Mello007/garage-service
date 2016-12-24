
function deleteDriver() {
    var name = $('#fioForDelete').val();
    $.ajax({
        type: "GET",
        url: "/driver/search/deleteByFio?fio=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/driver/search/deleteAll/"
    });
}



function addNewDriver() {
    var fio = $('#fio').val();
    var age = $('#age').val();
    var experience = $('#experience').val();
    var reference = $('#reference').val();

    var requestJSONparametr = "{\"fio\": \"" + fio + "\"" +
        ", \"age\": \"" + age + "\", \"experience\": \"" + experience + "\", \"reference\": \"" + reference + "\"}";
    $.ajax({
        type: "POST",
        url: "/driver/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}




var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/driver/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.driver.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['fio'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['age'];
        var experience = document.createElement('td');
        experience.innerHTML = item['experience'];
        var reference = document.createElement('td');
        reference.innerHTML = item['reference'];
        var elementRow = document.createElement('tr'); /// /создаем строку таблицы

        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        elementRow.appendChild(itemPriceElement);
        elementRow.appendChild(experience);
        elementRow.appendChild(reference);
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });

};

priceRequest.send(null);

