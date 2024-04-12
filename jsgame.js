<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verbos en Inglés - Juego</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="container">
    <h1>¡a jugar princesa ZAHIRA Verbos en Inglés!</h1>
    <p>Escribe el verbo en pasado de: <span id="presentVerb"></span></p>
    <input type="text" id="answerInput">
    <button onclick="checkAnswer()">Verificar</button>
    <p id="feedback"></p>
    <p id="score">Puntaje: 0</p>
    <p id="lives">Vidas restantes: 8</p>
  </div>
  <script src="js/game.js"></script>
</body>
</html>