var students = [
    {name: "John", score: 90 }, 
    {name: "Larry", score: 60 }, 
    {name: "Joseph", score: 50 }, 
];

//document.writeln(students.length);
document.write(students);

function loadData(){

    var i = 0;
    let dataList = document.getElementById("dataList");

    while (i < students.length)
    {
        var listItem = document.createElement("li");
        
        console.log(students[i]);
        listItem.innerText = students[i];

        dataList.appendChild(listItem);
        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;
    }
}