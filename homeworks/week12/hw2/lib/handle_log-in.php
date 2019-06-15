<?php
session_start();
include_once('../conn.php');
include_once('utils.php');

if(isset($_POST['account']) && 
    isset($_POST['password']) && 
    !empty($_POST['account']) && 
    !empty($_POST['password'])
){
  $account = $_POST['account'];
  $password = $_POST['password'];
  $stmt = $conn->prepare("SELECT * from hi101072645_users where account=?");
  $stmt->bind_param("s", $account);

  if (!$stmt->execute()) {
    echo $conn->error;
    exit();
  }
  $result = $stmt->get_result();

  if(mysqli_num_rows($result) == ""){
    printMessage('尚未註冊唷！', '../sign-in.html');
  } else {
    $row = $result->fetch_assoc();
    if (password_verify($password,$row["password"])) {
      setToken($conn, $account);
      header("Location: ../index.php");
    }else{
      printMessage('帳號密碼有誤', '../log-in.php');
    }
  }
} else {
  printMessage('不可為空白唷', '../log-in.php');
}


?>