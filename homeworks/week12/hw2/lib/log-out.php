<?php
  include_once('../conn.php');

  $token = $_COOKIE['token'];
  session_destroy();
  $sql = "DELETE FROM hi101072645_users_certificate where token='$token'";
  $conn->query($sql);
  setcookie('token', '', time()-3600*24 , '/');
  header("Location: ../index.php");
?>