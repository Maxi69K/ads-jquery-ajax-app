<?php
$db = mysqli_connect('localhost', 'root', '', 'ads_db');
$username = $_POST['username'];
$ad = $_POST['ad'];
$sql = "INSERT INTO ads VALUES (NULL,'$username','$ad')";
$query = mysqli_query($db, $sql);

if ($query) {
    echo "<h5>You have successfully submitted your ad.</h5>";
}
mysqli_close($db);
?>