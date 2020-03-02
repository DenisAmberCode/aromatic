<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Валидация формы</title>
	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</head>
<body>

	<div class="container content">
<form class="form-horizontal" method="post" id="form">
	<div class="form-group">
		<label for="name" class="col-sm-2 control-label">Имя <span class="red">*</span></label>
		<div class="col-sm-6">
			<input type="text" class="form-control" id="name" name="name" placeholder="Имя" required>
		</div>
	</div>
	<div class="form-group">
		<label for="email" class="col-sm-2 control-label">Email <span class="red">*</span></label>
		<div class="col-sm-6">
			<input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
		</div>
	</div>
	<div class="form-group">
		<label for="url" class="col-sm-2 control-label">Сайт <span class="red">*</span></label>
		<div class="col-sm-6">
			<input type="url" class="form-control" id="url" name="url" placeholder="Сайт" required>
		</div>
	</div>
	<div class="form-group">
		<div class="col-sm-offset-2 col-sm-6">
			<button type="submit" id="submit" class="btn btn-primary">Отправить</button>
			<div></div>
		</div>
	</div>
</form>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="jv/dist/jquery.validate.js"></script>

	<script>
$(function(){
	$('#form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			}
		},
		messages: {
			name: {
				required: "Поле 'Имя' обязательно к заполнению",
				minlength: "Введите не менее 2-х символов в поле 'Имя'"
			},
			email: {
				required: "Поле 'Email' обязательно к заполнению",
				email: "Необходим формат адреса email"	
			},
			url: "Поле 'Сайт' обязательно к заполнению"
		}
	});
});
	</script>

</body>
</html>