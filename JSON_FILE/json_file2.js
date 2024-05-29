/*function fetchJSONData() {

    fetch("./sample.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => 
              console.log(data))
        .catch((error) => 
               console.error("Unable to fetch data:", error));

        //sdocument.getElementById("tela").innerHTML = data.users;
}
fetchJSONData();
*/
/*
$.getJSON('sample.json', function (json) {
    var array = [];
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            var item = json[key];
            array.push({
                name: item.Name,
                surname: item.Surname,
                mobile: item.mobile,
                email: item.email
            });            
        }
    }
    });
*/

var array = [];

fetch("./sample.json")
.then((response) => response.json())
.then((data) => {
    //document.getElementById("tela").innerHTML = data.text;
    //console.log(data)
    var item = json[data];
    array.push({
        name: item.Name,
        surname: item.Surname,
        mobile: item.mobile,
        email: item.email
    });
});