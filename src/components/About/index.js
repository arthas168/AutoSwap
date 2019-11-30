import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/';
import Footer from '../Footer/';
import Particles from 'react-particles-js';

export default function About() {
	return (
		<Fragment>
			<Header />
			<section id="about">
				<Particles className="particles" />
				<div className="container">
					<div className="text-info">
						<p>
							<span>Why?</span> <br></br>The whole blockchain sphere has seen a dramatic spike in popularity over the past 3 years.
							Decentralized Applications are everywhere in day-to-day life, but the atomic swap technology is relatively new to the scene.
						Until recently, the only way to exchange coin from one blockchain to another, was through  centralized exchanges, whereas with atomic swaps,
						and AutoSwap in particular, you can achieve that without a third party, and in a completely transparent way!
						</p>
						<p>
							<span>How?</span> <br></br>The atomic swap process it pretty straightforward - we've created a liquidity pool where providers - investors, can
							aggregate their funds in any coin they choose (on which they earn interest). The buyer (user) exchanges his coin of choice, let's say 1 ETH,
							and wants to receive TRX. He will lock his ETH into the pool and, after cryptographically assuring the authenticity of this transaction, he will receive
							the amount of TRX which is equal to the price of his ETH at that given time. 
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</Fragment>
	);
}
