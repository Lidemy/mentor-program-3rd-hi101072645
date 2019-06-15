<?php
require_once('../conn.php');
require_once('utils.php');

$user = getUserByToken($conn, $_COOKIE['token']);


if (isset($_POST['message']) && 
    !empty($_POST['message']) 
){
  print_r($_POST);
  $user_id = $_POST['user-id'];
  $message = escape($conn, $_POST['message']);
  $reply_id = $_POST['reply-id'];
  $is_deleted = 0;
	$sql = "
			INSERT INTO hi101072645_messages 
			(user_id, message, reply_id, is_deleted)
			VALUES (?, ?, ?, ?)
			";
	$stmt = $conn->prepare($sql);
	$stmt->bind_param("isii",$user_id ,$message ,$reply_id,$is_deleted);
  if ($stmt->execute() !== TRUE) {
    echo "Error: "  . $conn->error;
    header('Location: ../index.php?status=留言失敗');
  }else{
    header("Location: ../index.php");
  }
}else{
  echo "<script>alert('內容欄位不可為空喔！')</script>";
  header("Refresh: 0; url=../index.php");
}


?>