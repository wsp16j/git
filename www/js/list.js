// This is a JavaScript file
function addTodo(camera_url) {
    // 入力データを取得
    var title = $("#todo-title").val();
    var body = $("#todo-body").val();
    $.mobile.changePage($("#list-page"));
 
    // データ追加のSQL実行
    db.executeSql("INSERT INTO Todo (title, body) values (?, ?)", [title, body], function(res) {
      // SQL成功。表示処理に
      showTodo(title, body);
    }, function(error) {
      // SQL失敗
      alert(error.message);
    });
};

function showTodo(title, body) {
  $("#todo-list").append("<li><h3>" + title + "</h3><p>" + body + "</p></li>")
  $("#todo-list").listview('refresh');
}
