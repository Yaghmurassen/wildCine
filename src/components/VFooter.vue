<template>
	
	<footer class="page-footer">
		<div class="container">
			<div class="row rowFooter">
				<div class="col l6 s12">
					<p class="grey-text text-lighten-4">“Le cinéma, c’est l’écriture moderne dont l’encre est la lumière.” - Jean Cocteau</p>
					<a href="https://www.codewars.com/users/Yagh/completed" target="_blank"><img src="https://www.codewars.com/users/Yagh/badges/small"></a>
				</div>
				<div class="col l4 offset-l2 s12">
					<ul>
						<li>
							<a href="https://www.facebook.com/allocine" target="_blank">
							<img src="https://img.icons8.com/ios-glyphs/104/000000/facebook.png"></a>
						</li>
						<li>
							<a href="https://twitter.com/allocine" target="_blank">
							<img src="https://img.icons8.com/ios-glyphs/104/000000/twitter.png"></a>
						</li>
						<li>
							<a href="https://www.linkedin.com/company/allocine/?originalSubdomain=fr" target="_blank">
							<img src="https://img.icons8.com/ios-glyphs/104/000000/linkedin.png"></a>
						</li>
						<li>
							<a href="https://www.instagram.com/allocine_off/?hl=fr" target="_blank">
							<img src="https://img.icons8.com/ios-glyphs/104/000000/instagram.png"></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer-copyright">
			<div class="container">
				© 2018 Copyright Yaghmurassen Sainson
				<a class="grey-text text-lighten-4 right" target="_blank" href="https://wildcodeschool.fr/">Wild Code School</a>
			</div>
		</div>
	</footer>

</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>

.page-footer {
  	background-color: #54626c;
  	border-radius: 3px;
	padding-top: unset;
    bottom: 0px;
	margin-top: 190px;
}

img {
	max-height: 2em;
	max-width: 100%;
}

ul {
	display: flex;
    flex-direction: row-reverse;
}

li {
	-moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
	&:hover {
	opacity: 0.5;
	transform: scale(1.3);
	}
}

.container {
    text-align: left;
}
.right:hover {
	opacity: 0.5;
}

h5 {
	margin:10px 0;
}

@media screen and (max-width: 992px) {
	.rowFooter {
		margin-bottom: unset;
	}
}

</style>


<style lang="scss">

.page-footer {
	@media screen and (max-width: 399px) {
		margin-top: 440px !important;
	}
	@media (min-width: 400px) and (max-width: 449px) {
		margin-top: 340px !important;
	}
	@media (min-width: 450px) and (max-width: 500px) {
		margin-top: 300px !important;
	}
}

</style>



