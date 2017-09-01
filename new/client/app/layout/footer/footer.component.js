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
			<div class="contactHours">
				<h2>Hours</h2>
				<table>
					<tbody>
						<tr>
							<td>Mon<span>day</span></td>
							<td>Closed</td>
						</tr>
						<tr>
							<td>Tue<span>sday</span></td>
							<td>Closed</td>
						</tr>
						<tr>
							<td>Wed<span>nesday</span></td>
							<td>11:00am - 7:00pm</td>
						</tr>
						<tr>
							<td>Thur<span>sday</span></td>
							<td>11:00am - 7:00pm</td>
						</tr>
						<tr>
							<td>Fri<span>day</span></td>
							<td>11:00am - 8:00pm</td>
						</tr>
						<tr>
							<td>Sat<span>urday</span></td>
							<td>11:00am - 8:00pm</td>
						</tr>
						<tr>
							<td>Sun<span>day</span></td>
							<td>11:00am - 5:00pm</td>
						</tr>
					</tbody>
				</table>
				<div class="contactAddress">
					<h4>Rowdy Mermaid Kombucha</h4>
					<p>2516 49th ST, Unit 2</p>
					<p>Boulder, CO</p>
					<p>(303) 396-0498</p>
				</div>
			</div>
		<div>
	</section>
	<footer class="container-footer">
		<div class="copyright-text">
    	ROWDY MERMAID KOMBUCHA © 2017
		<a class="link-to-top" href='#top'>Back to Top</a>
		</div>
		<div class="footer-links">
			<a class="footer-link-icon" href="http://www.facebook.com/rowdymermaid" target="_blank">
				<i class="fa fa-facebook-official fa-lg"></i>
			</a>
			<a class="footer-link-icon" href="http://www.instagram.com/rowdymermaidkombucha" target="_blank">
				<i class="fa fa-instagram fa-lg"></i>
			</a>
			<a class="footer-link-icon" href="http://twitter.com/rowdymermaid" target="_blank">
				<i class="fa fa-twitter-square fa-lg"></i>
			</a>
			<a class="footer-link-icon" href="http://www.pinterest.com/rowdymermaid" target="_blank">
				<i class="fa fa-pinterest-square fa-lg"></i>
			</a>
		</div>
	</footer>
	`
};

angular.module('portfolio-site.layout')
.component('footerComponent', footerComponent);

footerComponent.$inject = [];