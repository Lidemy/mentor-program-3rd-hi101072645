<?php
  session_start();
  include_once('lib/check_login.php');
  require_once('conn.php');
  require_once('lib/utils.php');

echo <<<_END
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>\(偷偷說)/</title>
    <link href="https://fonts.googleapis.com/css?family=Mukta:300|Noto+Sans+TC:300&amp;display=swap" rel="stylesheet"/>
    <link href="lib/css.css" rel="stylesheet"/>
  </head>
  <body>
    <div class="banner">
      <div class="wrapper">
        <div class="eye">
          <div class="eyee"></div>
        </div>
        <div class="eye">
          <div class="eyee"></div>
        </div>
        <div class="nose"></div>
        <h1>這是一個小樹洞</h1><span>你知道國王有雙驢耳朵嗎？</span>
      </div>
    </div>
    <div class="content">
      <div class="wrapper">
_END;
if (isset($user) && !empty($user)) {
  echo "
  <form class='add' method='post' action='lib/handle_add.php'>
    <p>哈囉！ $user[1] 你好呀 :)</p>
    <textarea id='message' name='message' placeholder='在這邊留下想和小樹洞說的事情吧：Ｄ'></textarea>
    <input type='hidden' value='$user[0]' name='user-id'>
    <input type='hidden' value='0' name='reply-id'>
    <button class='btn btn-add' type='submit'>送出留言</button>
    <a class='btn btn-other' href='lib/log-out.php'>留言完成我要登出</a>

  </form>
  <div class='messages'>";
} else {
  echo "
  <div class='member'>
    <p>為了保護你的小秘密，想和小樹洞說話的話請<a class='btn log-in' href='log-in.php'>登 入</a>或者<a class='btn sign-in' href='sign-in.php'>註 冊</a></p>
  </div>
  <div class='messages'>";
}

$page = 1;
if (isset($_GET['page']) && !empty($_GET['page'])) {
  $page = (int) $_GET['page'];
}
$sql_pages = "
  SELECT *
  FROM hi101072645_messages
  WHERE reply_id=0 and is_deleted=0
";

$stmt_pages = $conn->prepare($sql_pages);
$stmt_pages->execute();
$result_pages = $stmt_pages->get_result();

$mainMesg = $result_pages->num_rows;

$size = 20;  
$start = $size * ($page - 1);


if ($mainMesg > 0) {
  $total_page = ceil($mainMesg / $size);
  echo "<div class='page'>
        <ul>";
  if ($page == 1){
    echo "<li class='this-page'><a href='javascript:;'><<</a></li>";
  }else{
    $page_prev = $page - 1;
    echo "<li><a href='./index.php?page=$page_prev'><<</a></li>";
  }
  for($i=1; $i<=$total_page; $i++) {
    if ($page == $i){
      echo "<li class='this-page'><a href='javascript:;'>$i</a></li>";
    } else {
      echo "<li><a href='./index.php?page=$i'>$i</a></li>";
    }
  }
  if ($page == $total_page){
    echo "<li class='this-page'><a href='javascript:;'>>></a></li></ul></div>";
  }else{
    $page_next = $page + 1;
    echo "<li><a href='./index.php?page=$page_next'>>></a></li></ul></div>";
  }
}

$sql = "
  SELECT 
    msg.id,
    msg.user_id,
    msg.message,
    msg.created_at,
    users.nickname
  FROM hi101072645_messages AS msg
  LEFT JOIN hi101072645_users as users ON msg.user_id = users.id
  WHERE msg.reply_id=0 and msg.is_deleted=0
  ORDER BY msg.created_at DESC
  LIMIT ?
";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $size);
$stmt->execute();
$result = $stmt->get_result();


function br2nl($text){
    return preg_replace('/<br\\s*?\/??>/i','',$text);
}

if ($result->num_rows > 0) {
  while ($row = $result->fetch_array(MYSQLI_NUM)) {
    // print_r($row);
    $nickname = htmlspecialchars($row[4]);
    $content = str_replace('\r\n', "<br />",$row[2]);
    $time = htmlspecialchars($row[3]);
    $id = $row[0];
    echo "<div class='mesg'>
    <div class='mesg-poster'>
      <img class='poster-img' src='' alt=''/>
      <div class='poster-name'>" . $nickname .  "</div></div>
    <div class='mesg-content'>" . $content . "</div>
    <div class='created-time'>" . $time;
    if (isset($user) && $user[1] == $nickname ) {
      renderDelAndEditButton($row[0]);
    }
    echo "</div>";
    $sql_sub = "
      SELECT 
        msg.id,
        msg.user_id,
        msg.message,
        msg.created_at,
        users.nickname
      FROM hi101072645_messages AS msg
      LEFT JOIN hi101072645_users as users ON msg.user_id = users.id
      WHERE msg.reply_id='$id' and msg.is_deleted=0
      ORDER BY msg.created_at
    ";
    $stmt_sub = $conn->prepare($sql_sub);
    $stmt_sub->execute();
    $result_sub = $stmt_sub->get_result();
    while ($row_sub = $result_sub->fetch_array(MYSQLI_NUM)) {
      $nickname_sub = htmlspecialchars($row_sub[4]);
      $content_sub = str_replace('\r\n', "<br />",$row_sub[2]);
      $time = htmlspecialchars($row_sub[3]);
      $id_sub = $row_sub[0];
      if ($nickname == $nickname_sub) {
        echo "<div class='sub-mesg ori-poster'>";
      } else {
        echo "<div class='sub-mesg'>";
      }
      echo "
      <div class='mesg-poster'>
        <img class='poster-img' src='' alt=''/>
        <div class='poster-name'>" . $nickname_sub .  "</div></div>
        <div class='sub-mesg-content'>" . $content_sub . "</div>
        <div class='created-time'>" . $time;
      if (isset($user) && $user[1] == $nickname_sub ) {
        renderDelAndEditButton($row_sub[0]);
      }
      echo "</div></div>";
    }
    if (isset($user) && !empty($user)) {
      echo "
      <div class='sub-mesg'>
        <form class='add' method='post' action='lib/handle_add.php'>
          <textarea id='message' name='message' placeholder='回覆留言'></textarea>
          <input type='hidden' value='$user[0]' name='user-id'>
          <input type='hidden' value='$id' name='reply-id'>
          <button class='btn btn-add' type='submit'>送出留言</button>
        </form>
      </div>";
    }
    echo "</div>";
  }
}


if ($mainMesg > 0) {
  $total_page = ceil($mainMesg / $size);
  echo "<div class='page'>
        <ul>";
  if ($page == 1){
    echo "<li class='this-page'><a href='javascript:;'><<</a></li>";
  }else{
    echo "<li><a href='./index.php?page=$page_prev'><<</a></li>";
  }
  for($i=1; $i<=$total_page; $i++) {
    if ($page == $i){
      echo "<li class='this-page'><a href='javascript:;'>$i</a></li>";
    } else {
      echo "<li><a href='./index.php?page=$i'>$i</a></li>";
    }
  }
  if ($page == $total_page){
    echo "<li class='this-page'><a href='javascript:;'>>></a></li></ul></div>";
  }else{
    echo "<li><a href='./index.php?page=$page_next'>>></a></li></ul></div>";
  }
}

        
        
echo <<<_END
        </div>
      </div>
    </div>
    <script src="lib/js.js" type="text/javascript"></script>
  </body>
</html>
_END;
$result->close();
$conn->close();

?>
