<?php
// Array with names


// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from "" 
/*if ($q !== "") {
    $q = strtolower($q);
    $len=strlen($q);
    foreach($a as $name) {
        if (stristr($q, substr($name, 0, $len))) {
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
        }
    }
}*/

// Output "no suggestion" if no hint was found or output correct values 
//echo $hint === "" ? "no suggestion" : $hint;
//new code
//echo $q;

//Enable cross domain Communication - Beware, this can be a security risk 
header('Access-Control-Allow-Origin: *');
include "../inc/dbinfo2.inc";



//new code
/* Connect to MySQL and select the database. */
  $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);
  if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();
$database = mysqli_select_db($connection, DB_DATABASE);

// Create query using SQL string
$sql_query = "SELECT *
FROM $q;";

//INNER JOIN moduleTable ON moduleTable.moduleNo=lecturerTable.moduleNo2;
//WHERE lecturerTable.lastName='Cullen'
// Query database using connection
$result = $connection->query($sql_query);

// check for empty result
if (mysqli_num_rows($result) > 0)
 {
    // Create Array for JSON response
    $response = array();
    
    // Create Array called modules inside response Array $response["database"] = array();
    
    // Loop through all results from Database
    while ($row = mysqli_fetch_array($result)) 
     {
            // Assign results for each database row, to temp module array
            $symbol = array();
             $symbol["yearA"] = $row["yearA"];
             $symbol["imgAd"] = $row["imgAd"];
            
            
             
            
           
           
             


       // push single symbol into final response array
        array_push($response["database"], $symbol);
    }
    // success
    $response["success"] = 1;

    // print JSON response
    print (json_encode($response)); // this is where the info comes from

}
else {
    // no modules found
$response["success"] = 0;
    $response["message"] = "No periods found";

    // print no modules JSON
    print (json_encode($response));
}


?>
