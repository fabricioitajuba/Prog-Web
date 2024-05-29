var text=`[
    {
        "name": "Michael",
        "age": "30",
        "birthday": "11/10/1989"
    },
    {
        "name": "Francine",
        "age": "38",
        "birthday": "03/12/1981"
    }
]`;

var textAsArray = JSON.parse(text);

console.log(textAsArray); // Will print the object array you asked for
console.log(textAsArray[1].age); // Will print 38