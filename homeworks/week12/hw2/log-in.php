<?php 
include_once('conn.php');
include_once('lib/utils.php');

if (isset($_COOKIE['token']) && !empty($_COOKIE['token'])){
  header("Location: index.php");
}

echo <<<_END
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>登入</title>
    <link href="https://fonts.googleapis.com/css?family=Mukta:300|Noto+Sans+TC:300&amp;display=swap" rel="stylesheet"/>
    <link href="lib/css.css" rel="stylesheet"/>
  </head>
  <body>
    <div class="wrapper side-page">
      <h1>你好呀老友！帶來新的小秘密了嗎？</h1>
      <form class='add' id="log-in" method="post" action="lib/handle_log-in.php">
        <label for="account">帳　　號：
          <input type="text" name="account"/>
        </label>
        <label for="password">密　　碼：
          <input type="password" name="password" autocomplete="password"/>
        </label>
        <button class="btn" type="submit">登　　入</button>
        <a class="btn btn-other" href="sign-in.html">沒有帳號我要註冊</button>
      </form>
    </div>
    // <script src="lib/formCheck.js" type="text/javascript"></script>
  </body>
</html>
_END;


?>