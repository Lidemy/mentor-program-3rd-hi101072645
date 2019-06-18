<?php
  include_once('conn.php');
  include_once('lib/utils.php');
echo <<<_END
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>註冊</title>
    <link href="https://fonts.googleapis.com/css?family=Mukta:300|Noto+Sans+TC:300&amp;display=swap" rel="stylesheet"/>
    <link href="lib/css.css" rel="stylesheet"/>
  </head>
  <body>
    <div class="wrapper side-page">
      <div class="banner">
        <h1>你好！歡迎加入小樹洞</h1>
      </div>
      <form class='add' id="sign-in" method="post" action="lib/handle_sign-in.php">
        <label for="account">帳　　號：
          <input type="text" name="account" placeholder="限填英數字" onkeyup="value=value.replace(/[\W]/g,'') "
          onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"/>
        </label>
        <label for="nickname">暱　　稱：
          <input type="text" name="nickname"/>
        </label>
        <label for="password">密　　碼：
          <input id="password" type="password" name="password" autocomplete="set-password" placeholder="限填英數字" onkeyup="value=value.replace(/[\W]/g,'') "
          onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"/>
        </label>
        <label for="password2">密碼確認：
          <input id="passche" type="password" name="password2" autocomplete="check-password" placeholder="限填英數字" onkeyup="value=value.replace(/[\W]/g,'') "
          onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"/>
        </label>
        <button class="btn" type="submit">確認送出</button>
        <a class="btn btn-other" href="log-in.php">沒有帳號我要登入</button>
      </form>
    </div>
    <script src="lib/formCheck.js" type="text/javascript"></script>
  </body>
</html>

_END;
?>