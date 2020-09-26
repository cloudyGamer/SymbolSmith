<?php
// Array with names


// get the q parameter from URL
$q = $_REQUEST["q"]; //table name





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

$sql_query="CREATE TABLE `$q` ( `title`varchar(20) NOT NULL,

  `notes` varchar(150) NOT NULL,
  `stan` varchar(80) NOT NULL,
  `per` varchar(80) NOT NULL,
  `yea` varchar(80) NOT NULL,
  `duty` varchar(80) NOT NULL,
   `picture` varchar(80) NOT NULL, PRIMARY KEY 
(title) ) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains London Periods';";

$connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);
  if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();
$database = mysqli_select_db($connection, DB_DATABASE);
$result = $connection->query($sql_query);
?>