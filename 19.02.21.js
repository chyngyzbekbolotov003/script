// //GET
// personalbar.name.full

// let person = {
//     name: {
//         full: "Test"
//     }
// }
// console.log(person.name.full);

// function getPerson() {
//     return {
//         getName: function () {
//             return {
//                 getFull() {
//                     return "Test";
//                 }
//             }
//         }
//     }
// }

// let person = getPerson();
// let name = person.getName();
// let full = name/grtFull();

// let full2 = getPerson().getName().getFull()

// fetch('./data.json');
// let response = fetch.then()
// let json = response.then()
// let error = json.cath();

// document.querySelector('body').querySelector('div').querySelector('h1').style.
// color = 'red';



// GET - получет
fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
    })
    .catch(function (reason) {
        console.log(reason);
    });
// POST - создает
fetch('./data.json', { method: "POST" })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(reason => console.log(reason));
    
// POST - добавляет
fetch('./data.json', { method: "PUT" })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {

    })
    .catch(function (reason) {
        
    });
// POST - обновляет
fetch('./data.json', { method: "PATCH" })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {

    })
    .catch(function (reason) {
        
    });
// POST - удаляет
fetch('./data.json', { method: "DELETE" })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {

    })
    .catch(function (reason) {
        
    });