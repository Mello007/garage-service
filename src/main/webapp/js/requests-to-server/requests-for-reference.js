
function deleteReference() {
    var name = $('#dateOfIssueForDelete').val();
    $.ajax({
        type: "GET",
        url: "/reference/search/deleteByDateOfIssue?dateOfIssue=" + name.replace("/ /g", "%20"),
        contentType: "application/json",
        dataType: 'json'
    });
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: "/reference/search/deleteAll/"
    });
}



function addNewReference() {
    var ophthalmologist = $('#ophthalmologist').val();
    var surgeon = $('#surgeon').val();
    var psychologist = $('#psychologist').val();
    var lor = $('#lor').val();
    var dateValidity = $('#dateValidity').val();
    var dateOfIssue = $('#dateOfIssue').val();

    var requestJSONparametr = "{\"ophthalmologist\": \"" + ophthalmologist + "\"" +
        ", \"surgeon\": \"" + surgeon + "\", \"psychologist\": \"" + psychologist + "\", \"lor\": \"" + lor + "\"" +
        ", \"dateValidity\": \"" + dateValidity + "\", \"dateOfIssue\": \"" + dateOfIssue + "\"}";
    $.ajax({
        type: "POST",
        url: "/reference/",
        contentType: "application/json",
        dataType: 'json',
        data: requestJSONparametr
    });
}



var priceRequest = new XMLHttpRequest();
priceRequest.open("GET", "/reference/", true);   //Указываем адрес GET-запроса
priceRequest.onload = function (){             //Функция которая отправляет запрос на сервер для получения всех студентов
    var parsedItem = JSON.parse(this.responseText);
    var itemsTable = document.getElementById('all-items'); //получаем элемент по Id
    itemsTable.innerHTML = '';      //очищаем таблицу от устаревших данных
    parsedItem._embedded.reference.forEach(function(item)  {
        var itemNameElement = document.createElement('td'); //создаем элемент ячейку с названием для таблицы
        itemNameElement.innerHTML =  item['ophthalmologist'] ;     //внедряем название предмета, полученное с сервера
        var itemPriceElement = document.createElement('td');
        itemPriceElement.innerHTML = item['surgeon'];
        var psychologist = document.createElement('td');
        psychologist.innerHTML = item['psychologist'];
        var lor = document.createElement('td');
        lor.innerHTML = item['lor'];
        var dateValidity = document.createElement('td');
        dateValidity.innerHTML = item['dateValidity'];
        var dateOfIssue = document.createElement('td');
        dateOfIssue.innerHTML = item['dateOfIssue'];
        var elementRow = document.createElement('tr'); /// /создаем строку таблицы

        elementRow.appendChild(itemNameElement);      //помещаем обе ячейки в строку
        elementRow.appendChild(itemPriceElement);
        elementRow.appendChild(psychologist);
        elementRow.appendChild(lor);
        elementRow.appendChild(dateValidity);
        elementRow.appendChild(dateOfIssue);
        itemsTable.appendChild(elementRow);           //помещаем строку в таблицу
    });

};

priceRequest.send(null);
