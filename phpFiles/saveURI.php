<?php
// Array with names


// get the q parameter from URL
$q = $_REQUEST["q"]; //title
$r = $_REQUEST["r"]; //notes
$s = $_REQUEST["s"]; //stan
$t = $_REQUEST["t"]; //per
$u = $_REQUEST["u"]; //yea
$v = $_REQUEST["v"]; //duty
$w = $_REQUEST["w"]; //unique key
$x = $_REQUEST["x"]; //picture
$y = $_REQUEST["y"]; //image URI





//Enable cross domain Communication - Beware, this can be a security risk 
header('Access-Control-Allow-Origin: *');
include "../inc/dbinfo2.inc";



$sql_query="INSERT INTO `$w` (`title`, `notes`,`stan`,`per`,`yea`,`duty`,`picture`) 
        VALUES('$q','$r','$s','$t','$u','$v','$x','$y'); ";


$sql_query="INSERT INTO `$w` (`title`, `notes`,`stan`,`per`,`yea`,`duty`,`picture`) 
        VALUES('$q','$r','$s','$t','$u','$v','$x','$y'); ";



/* Connect to MySQL and select the database. */
  $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);
  if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();
$database = mysqli_select_db($connection, DB_DATABASE);

// Create query using SQL string





$result = $connection->query($sql_query);


?>

