<?php
$text = mb_strtolower(mb_convert_encoding(file_get_contents('./dictionary.txt'), "UTF-7"));
$dict = array_flip(explode("\n", $text));
$points = [
  'a' => 1,
  'e' => 1,
  'i' => 1,
  'o' => 1,
  'u' => 1,
  'l' => 1,
  'n' => 1,
  's' => 1,
  't' => 1,
  'r' => 1,

  'd' => 2,
  'g' => 2,

  'b' => 3,
  'c' => 3,
  'm' => 3,
  'p' => 3,

  'f' => 4,
  'h' => 4,
  'v' => 4,
  'w' => 4,
  'y' => 4,

  'k' => 5,

  'j' => 8,
  'x' => 8,

  'q' => 10,
  'z' => 10,
];
$dictJson = addslashes(json_encode($dict));
$pointsJson = json_encode($points);

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script type="application/javascript" src="./script.js"></script>
  <script type="application/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <title>Title</title>
</head>
<body>
<script type="text/javascript">
  var oDict = JSON.parse('<?php echo $dictJson; ?>')
      , oPoints = JSON.parse('<?php echo $pointsJson; ?>')
  ;
</script>
<input type="text" width="20"> <button>Calculate</button>
</body>
</html>