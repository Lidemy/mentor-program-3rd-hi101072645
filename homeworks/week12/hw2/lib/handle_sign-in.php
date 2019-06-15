<?php
require_once('../conn.php');
require_once('utils.php');
if (isset($_POST['account']) && 
    isset($_POST['nickname']) &&
    isset($_POST['password']) &&
    !empty($_POST['account']) && 
    !empty($_POST['nickname']) &&
    !empty($_POST['password'])
){
  $account = escape($conn, $_POST['account']);
  $nickname= escape($conn, $_POST['nickname']);
  $password = password_hash($_POST['password'],PASSWORD_DEFAULT);
  $password2 = $_POST['password2'];

  $sql = "
    INSERT INTO hi101072645_users
    (account, nickname, password)
    VALUE (?, ?, ?)
  ";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("sss", $account, $nickname, $password);

  if(password_verify($password2,$password)){
    if(!$stmt){
      echo "<div class='info-board' style='color:red; text-align:center;'>帳號重複了喔！！換一個吧！沒有回到註冊頁的話請點 <a href='../sign-in.html'>這裡</a></div>";
      header("Refresh: 3; url=../sign-in.html");
    }else{
      $stmt->execute();
      setToken($conn, $account);

      header("Location: ../index.php");
    }
  }else{
    echo "<div class='info-board' style='color:red;text-align:center;'>密碼不相符！沒有回到註冊頁的話請點 <a href='signup.php'>這裡</a></div>";
    header("Refresh: 1; url=../sign-in.html");
  }
} else {
  printMessage('內容欄位不可為空喔！', '../sign-in.html');
}


?>