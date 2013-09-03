<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script type="text/javascript" charset="utf-8">
	var answer;
	var guesses = 0;
	var hint = '';

	function randomNumber(seed) {
		seed = seed || 10;
		return Math.floor(Math.random() * seed + 1);
	}

	function checkGuess(guess) {
		var hint = '';
		var parsedGuess = parseInt(guess, 10);

		guesses++;

		if(parsedGuess == answer) {
			hint = 'You win!';
		} else if (parseGuess < answer) {
			hint = 'Higher...';
		} else {
			hint = 'Lower...';
		}

		return hint;
	}

	$(document).ready(function() {
		answer = randomNumber(10);

		$("form a#guess").click(function() {
			var guess = $("input:first").val();
			var guessHint = checkGuess(guess);

			$('.hint').html(guessHint)
			$('guesscount').html(guesses)
		});
	});
</script>
</head>
<body>
<div class="hint">Guess a Number</div>
<div class="guesscount">0</div>
<form id="game_form" name="game_form">
<label for="guess">Guess</label>
<input type="text" name="guess" />
<a href="#" value="Guess!" id="guess" class="button">Guess</a>
</form>
</body>
</html>
