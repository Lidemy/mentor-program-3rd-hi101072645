<?php
  require_once('conn.php');
  include_once('lib/check_login.php');
  require_once('lib/utils.php');


if ($_POST['uid'] == $user[0] && isset($_POST['id']) && !empty($_POST['id'])) {
	$id=$_POST['id'];
    $sql = "
    UPDATE  hi101072645_messages
    SET is_deleted = '1'
    WHERE id = $id AND user_id = $user[0]
    ";

    if($conn->query($sql)){
        header('Location: ./index.php');
    } else {
        printMessage($conn->error, './index.php'); 
    }
	
} else {
    printMessage('錯誤', './index.php'); 
}

?>