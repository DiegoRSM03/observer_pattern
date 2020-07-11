<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Observer Pattern</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="iconfont/font/flaticon.css">
</head>
<body>
	<div id="topbar" class="container">
		<div class="content">
			<h1>Mom's Products List <span class="flaticon-breastfeeding"></span></h1>
			<div class="add-product-bar">
				<input type="text" name="add-product-input" id="add-product-input" placeholder="Name of product to add">
				<button id="add-product-button">Add Product <span class="flaticon-add"></span></button>
			</div>
			<h2>Original Product List</h2>
			<ul id="products-list">
			</ul>
		</div>
	</div>
	<div id="other-lists-observers" class="container">
		<div class="content">
			<div class="other-list">
				<h2>Martin's Copy</h2>
				<ul id="martin-copy-products"></ul>
			</div>
			<div class="other-list">
				<h2>Uncle's Copy</h2>
				<ul id="uncle-copy-products"></ul>
			</div>
		</div>
	</div>

	<script src="js/index.js"></script>
</body>
</html>