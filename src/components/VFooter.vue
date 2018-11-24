<template>
	
	<footer class="page-footer">
		<div class="container">
		<div class="row">
			<div class="col l6 s12">
			<!-- <h5 class="white-text">Wild Cine</h5> -->
			<p class="grey-text text-lighten-4">“Le cinéma, c’est l’écriture moderne dont l’encre est la lumière.” - Jean Cocteau</p> 
			</div>
			<div class="col l4 offset-l2 s12">
			<!-- <h5 class="white-text">Share</h5> -->
			<ul>
				<li><a href="https://www.facebook.com/allocine" target="_blank"><img src="https://img.icons8.com/ios-glyphs/104/000000/facebook.png"></a></li>
				<li><a href="https://twitter.com/allocine" target="_blank"><img src="https://img.icons8.com/ios-glyphs/104/000000/twitter.png"></a></li>
				<li><a href="https://www.linkedin.com/company/allocine/?originalSubdomain=fr" target="_blank"><img src="https://img.icons8.com/ios-glyphs/104/000000/linkedin.png"></a></li>
				<li><a href="https://www.instagram.com/allocine_off/?hl=fr" target="_blank"><img src="https://img.icons8.com/ios-glyphs/104/000000/instagram.png"></a></li>
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
 	// margin-top: 30px;
	padding-top: unset;
	// position: fixed;
    bottom: 0px;
    // width: 98vw;
}

img {
	max-height: 2em;
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
	// margin-bottom: -20px;
}
.right:hover {
	opacity: 0.5;
}

h5 {
	margin:10px 0;
}


</style>
