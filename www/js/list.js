// This is a JavaScript file
/*
angular.module('MyApp', []);
angular.module('MyApp', ['angular-clipboard'])
    .controller('MyController', ['$scope', function ($scope) {
        $scope.supported = false;
 
        $scope.textToCopy = 'I can copy by clicking!';
 
        $scope.success = function () {
            console.log('Copied!');
        };
 
        $scope.fail = function (err) {
            console.error('Error!', err);
        };
    }]);
*/
function addLine(ct, id, data) {
    var div_element = document.createElement("div");
    div_element.innerHTML = '<p style="text-align:center;"> <input type="radio" id=' + ct + ' name="radio"/> サイト名: ' + id + ' アカウント名: ' + data + '</p>';
    var parent_object = document.getElementById("piyo");
    parent_object.appendChild(div_element);
};

function addbutton(){
    var div_element = document.createElement("div");
    div_element.innerHTML = '</br> <p style="text-align:center;"> <input type="button" value="ID" style="widht:50px; height:20px;" onclick="testID()"/> <input type="button" value="PW" onclick="testPW()"/></p>';  
    var parent_object = document.getElementById("hoge");
    parent_object.appendChild(div_element);
}

function testID(){
    window.alert("IDをコピーしました");
}

function testPW(){
    window.alert("PWをコピーしました");
}