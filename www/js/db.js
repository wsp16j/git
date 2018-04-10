// This is a JavaScript file

//時・分・秒を取得する
function getTime(){
    var jikan= new Date();
    var hour = jikan.getHours();
    var minute = jikan.getMinutes();
    var second = jikan.getSeconds();
    var logtime = hour+":" + minute + ":" + second;
    return logtime;
}

//    tx.executeSql('INSERT INTO TestTable (id, data) VALUES (1, "あいうえお")');

function insertQuery(tx){
    console.log(getTime() + "insertQuery");
    var siteName = document.getElementById("id001").value;
    var siteID = document.getElementById("id002").value;
    var sitePW = document.getElementById("id003").value;
    if(siteID != "" && sitePW != ""){
        console.log("id:" + siteID + " / pw:" + sitePW);
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (?, ?)', [siteID, sitePW]);
    }else{
        window.alert("idまたはPWがnullです");
    }
}

function deleteQuery(tx){
    tx.executeSql('DROP TABLE IF EXISTS TestTable');
    tx.executeSql('CREATE TABLE IF NOT EXISTS TestTable (ct integer primary key autoincrement, id text, data text)');
}

function queryDB(tx) {
    console.log(getTime() + "queryDB");
    tx.executeSql('SELECT * FROM TestTable ORDER BY ct', [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
    console.log(getTime() + " querySuccess");
    var len = results.rows.length;
    console.log("There are " + len + " rows of records in the database.");
    for (var i=0; i<len; i++){
        console.log(results.rows.item(i).ct + " " + results.rows.item(i).id + " " + results.rows.item(i).data);
//        showTodo(row.id, row.data); 
    }
}

//Callback function when the transaction is failed.
function errorCB(err) {
    window.alert("error");
    console.log(getTime() + "errorCB");
    console.log("Error occured while executing SQL: "+err.code);
}

// Callback function when the transaction is success.
function successCB() {
    window.alert("success");
    console.log(getTime() + "successCB");
    var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
    db.transaction(queryDB, errorCB);
}

function deleteDB(){
    console.log(getTime() + "deleteDB");
    var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
    db.transaction(deleteQuery, errorCB, successCB);
} 

function insertDB(){
    console.log(getTime() + "insertDB");
    var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
    db.transaction(insertQuery, errorCB, successCB);
}