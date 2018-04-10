// This is a JavaScript file
function addLine(ct, id, data) {
    var div_element = document.createElement("div");
    div_element.innerHTML = '<hr>サイト名: ' + ct + '<br><input type="text" name="title" size="50" value=' + id + '><br>Contents: ' + data;
    var parent_object = document.getElementById("piyo");
    parent_object.appendChild(div_element);
};
