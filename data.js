var students = [
    {name: "John", score: 90 }, // 0 {Object} => students[0] => students[0].score => total  
    {name: "Larry", score: 60 }, // 1
    {name: "Joseph", score: 50 }, // 2
];

//document.writeln(students.length);
document.write("<pre>");
document.write(JSON.stringify(students, undefined, 2));
document.write("</pre>");

var names = [];

students.forEach(student => {
    names.push(student.name);
});

document.writeln(names);

document.write("<pre>");
document.writeln("Average: " + calculateAverage());
document.writeln(`Average: ${calculateAverage()}`);
document.write("</pre>");

function calculateAverage(){

    var average = 0;
    students.forEach(student => {
        average = average + student.score;
    });
    average = average / students.length;

    return average;
}

function loadData(){

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < students.length)
    {
        var listItem = document.createElement("li");
        
        console.log(students[i]);
        listItem.innerText = students[i].name;

        dataList.appendChild(listItem);
        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;
    }
}

function displayAverage()
{
    var resultSection = document.getElementById("resultSection");
    var paragraph = document.createElement("p");
        
    paragraph.innerText = "Average: " + calculateAverage();

    resultSection.appendChild(paragraph);
}

function myReplacer(name, val) {
    if (typeof val === 'string') {
        return val.toString().toUpperCase();  
     } else {
        return val; // return as is
    }
};