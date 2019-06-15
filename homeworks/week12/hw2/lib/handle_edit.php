<?php
require_once('../conn.php');
require_once('utils.php');

$user = getUserByToken($conn, $_COOKIE['token']);

if (isset($_POST['edit-mesg']) && 
    !empty($_POST['edit-mesg']) 
){
  $id = $_POST['id'];
  $message = escape($conn, $_POST['edit-mesg']);
	$sql = "
			UPDATE hi101072645_messages 
			SET message = (?)
      WHERE id = '$id'
			";
	$stmt = $conn->prepare($sql);
  $stmt->bind_param("s",$message);
  if ($stmt->execute() !== TRUE) {
    echo "Error: "  . $conn->error;
    header('Location: ../index.php?status=更新失敗');
  }else{
    header("Location: ../index.php");
  }
}else{
  printMessage('留言內容不可以空白喔！', '../index.php');
}


?>