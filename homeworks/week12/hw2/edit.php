<?php
include_once('lib/check_login.php');
require_once('conn.php');
require_once('lib/utils.php');

$id = $_POST['id'];

if (isset($user) && !empty($user)) {
  $sql = "
    SELECT message FROM hi101072645_messages
    WHERE id = '$id'
  ";
  $stmt = $conn->prepare($sql);
  $stmt->execute();
  $result = $stmt->get_result();
  $row = $result->fetch_array(MYSQLI_NUM);
  $content = str_replace('\r\n', "\r\n",$row[0]);
echo <<<_END
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>編輯留言</title>
    <link href="https://fonts.googleapis.com/css?family=Mukta:300|Noto+Sans+TC:300&amp;display=swap" rel="stylesheet"/>
    <link href="lib/css.css" rel="stylesheet"/>
  </head>
  <body>
    <div class="wrapper side-page">
      <h1>編輯文章</h1>
      <div class="mesg">
        <div class="mesg-poster"><img class="poster-img" src="" alt=""/>
          <div class="poster-name">$user[1]</div>
        </div>
        <div class="mesg-content">$content</div>
      </div>
      <form class="add" method="post" action="lib/handle_edit.php">
        <label for="nick-name">更新留言內容：</label>
        <textarea id="new-msg" name="edit-mesg">$content</textarea>
        <input type="hidden" value='$user[0]' name="user-id"/>
        <input type="hidden" value='$id' name="reply-id"/>
        <input type="hidden" value='$id' name="id"/>
        <button class="btn btn-add" type="submit">送出留言</button><a class="btn btn-other" href="index.php">取消修改</a>
      </form>
    </div>
  </body>
</html>
_END;

} else {
  header('Location: index.php');
}

?>