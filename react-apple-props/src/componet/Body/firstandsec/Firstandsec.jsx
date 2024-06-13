import React, { Component } from "react";
import Propsf from "./Propsfirse.jsx";

export default class Firstandsec extends Component {
	render() {
		return (
			<div>
				<section class="alert-section top-50">
					<div class="container">
						<div class="alert-title">We’re open for you.</div>
						<div class="alert-text">
							Our retail stores are closed, but you can buy our products here
							online and get fast, free delivery. If you need help finding the
							right product or have a question on your order, chat online with a
							Specialist or call 1-800-MY-APPLE.
							<br />
							For service and support, visit{" "}
							<a href="https://support.apple.com/">support.apple.com</a>.
						</div>
					</div>
				</section>

				<section class="first-hightlight-wrapper">
					<div class="container">
						<Propsf
							text="New "
							title="iPad Pro "
							learnMoreLink="/learn-more"
							buyLink="/buy"
						/>
					</div>
				</section>

				<section class="second-hightlight-wrapper">
					<div class="container">
						<Propsf
							text="New "
							title="MacBook Air"
							description="Twice the speed. Twice the storage."
							price="From $999."
							learnMoreLink="/learn-more"
							buyLink="/buy"
						/>
					</div>
				</section>
			</div>
		);
	}
}
