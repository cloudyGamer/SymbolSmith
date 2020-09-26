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



//

/*$sql_query= "
CREATE TABLE `$q` ( `title`varchar(20) NOT NULL,

  `notes` varchar(150) NOT NULL,
  `stan` varchar(80) NOT NULL,
  `per` varchar(80) NOT NULL,
  `yea` varchar(80) NOT NULL,
  `duty` varchar(80) NOT NULL,
   `picture` varchar(80) NOT NULL, PRIMARY KEY 
(title) ) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains London Periods';



";*/

/*$sql_query="INSERT INTO `$w` (`title`, `notes`,`stan`,`per`,`yea`,`duty`,`picture`,`IMGURI`) 
        VALUES('$q','$r','$s','$t','$u','$v','$x','$y'); ";*/
/*$sql_query= "
CREATE TABLE IF NOT EXISTS `myKey` ( `title`varchar(20) NOT NULL,

  `notes` varchar(150) NOT NULL,
  `stan` varchar(80) NOT NULL,
  `per` varchar(80) NOT NULL,
  `yea` varchar(80) NOT NULL,
  `duty` varchar(80) NOT NULL,
   `picture` varchar(80) NOT NULL, PRIMARY KEY 
(title) ) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains London Periods';
 ";*/

$sql_query="INSERT INTO `$w` (`title`, `notes`,`stan`,`per`,`yea`,`duty`,`picture`,`IMGURI`) 
        VALUES('$q','$r','$s','$t','$u','$v','$x','$y'); ";
$connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);
  if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();
$database = mysqli_select_db($connection, DB_DATABASE);
$result = $connection->query($sql_query);
?>
 
