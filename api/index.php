<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$conn = new mysqli('localhost', 'root', '', 'word_etymology');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT word, etymology FROM words";
$result = $conn->query($sql);

$words = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $words[] = $row;
    }
}
echo json_encode($words);
$conn->close();
