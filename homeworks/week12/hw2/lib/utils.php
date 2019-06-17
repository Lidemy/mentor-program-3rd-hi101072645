<?php
  function printMessage($msg, $redirect) {
    echo '<script>';
    echo "alert('" . htmlentities($msg, ENT_QUOTES) . "');";
    echo "window.location = '" . $redirect ."'";
    echo '</script>';
  }

// 安全存取並避免XSS
  function escape($conn, $string) {
    return htmlspecialchars(mysql_fix_string($conn, $string), ENT_QUOTES, 'utf-8');
  };
  
  function mysql_fix_string($conn, $string) {
    if (get_magic_quotes_gpc()) $string = stripslashes($string);
    return $conn->real_escape_string($string);
  };


  function setToken($conn, $username) {
    $token = $_COOKIE['PHPSESSID'];
    $sql = "DELETE FROM hi101072645_users_certificate where username='$username'";
    $conn->query($sql);
    $sql = "INSERT INTO hi101072645_users_certificate (account, token) VALUES('$username', '$token')";
    $conn->query($sql);
    setcookie('token', $token, time()+3600*24 , '/');
  }

  function getUserByToken($conn, $token) {
    if (isset($token) && !empty($token)) {
      $sql = "SELECT * FROM hi101072645_users_certificate WHERE token='$token'";
      $result = $conn->query($sql);
      if (!$result || $result->num_rows <= 0) {
        return null;
      }
      $row = $result->fetch_assoc();
      $account = $row['account'];

      $sql = "SELECT * FROM hi101072645_users WHERE account = '$account'";
      $result = $conn->query($sql);
      $row = $result->fetch_assoc();
      return array($row['id'], $row['nickname']);
    } else {
      return null ;
    };
  }

  function renderDelAndEditButton($id,$uid) {
    echo "
    <form class='update-mesg' method='POST' action='edit.php'>
      <input type='hidden' value='$id' name='id'/>
      <button class='btn-edit' type='submit'>編輯</button>
    </form>
    <form class='update-mesg' method='POST' action='delete.php'>
      <input type='hidden' value='$uid' name='uid'/>
      <input type='hidden' value='$id' name='id'/>
      <button class='btn-del' type='submit'>刪除</button>
    </form>";
  };

?>

