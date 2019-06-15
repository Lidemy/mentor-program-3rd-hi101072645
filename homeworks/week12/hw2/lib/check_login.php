<?php
  include_once('./conn.php');
	include_once('lib/utils.php');
  if (isset($_COOKIE['token'])) {
		$user = getUserByToken($conn, $_COOKIE['token']);
	}
?>