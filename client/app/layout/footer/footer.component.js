const footerComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

	},

	template:`
	<section class="contact">
		<div class="contactForm">
			<h2>Contact</h2>
			<form>
				Name<br>
				<input type="text" placeholder="Name"><br>
				Email<br>
				<input type="email" placeholder="Email Address"><br>
				Message<br>
				<textarea type="text"></textarea><br>
				<button class="submit">Submit</button>
			</form>
		</div>
		<div class="contactSectionRight">
		<div>
	</section>
	<footer class="container-footer">
		<div class="footer-icons">
			<div class="copyright-text">
	    		Charlie Beck © 2017
			</div>
			<div class="social-links">
				<a class="footer-link-icon fa-3x" href="https://www.linkedin.com/in/charlesdbeck/" target="_blank">
					<i class="fa fa-linkedin-square" aria-hidden="true"></i>
				</a>
				<a class="footer-link-icon fa-3x" href="http://www.github.com/chuckb1789" target="_blank">
					<i class="fa fa-github" aria-hidden="true"></i>
				</a>
				<a class="footer-link-icon fa-3x" href="https://www.instagram.com/_charliebeck_/" target="_blank">
					<i class="fa fa-instagram"></i>
				</a>
				<a class="footer-link-icon fa-3x" href="https://twitter.com/_charliebeck_" target="_blank">
					<i class="fa fa-twitter-square"></i>
				</a>
			</div>
			<div class="to-top">
				<a class="link-to-top" href='#top'>Back to Top</a>
			</div.
		</div>
	</footer>
	`
};

angular.module('portfolio-site.layout')
.component('footerComponent', footerComponent);

footerComponent.$inject = [];
