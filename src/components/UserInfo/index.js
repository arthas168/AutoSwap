import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import Header from '../Header/';

export default function UserInfo() {
	return (
		<section id="userInfo">
			<Header />
			<div className="container">
				<div className="main-info">
					<h1>Total Portfolio Value: 20045$</h1>
					<div className="currencies-list">
						<div className="eth">
							<p>ETH (ETHEREUM) - 2.5</p>
							<p>786$</p>
						</div>
						<div className="trx">
							<p>TRON (TRX) - 12243</p>
							<p>20$</p>
						</div>
					</div>
				</div>
				<div className="transaction-list">
          <p className="history">Transaction History</p>
					<Scrollbars className="scroller-area" style={{ width: 400, height: 525 }}>
						<div className="transaction-card">
							<p>Exchanged: X ETH for Y TRX</p>
							<p>On date: 21-11-2019</p>

							<Button variant="primary">More Info</Button>
						</div>
						<div className="transaction-card">
							<p>Exchanged: X ETH for Y TRX</p>
							<p>On date: 21-11-2019</p>

							<Button variant="primary">More Info</Button>
						</div>
						<div className="transaction-card">
							<p>Exchanged: X ETH for Y TRX</p>
							<p>On date: 21-11-2019</p>

							<Button variant="primary">More Info</Button>
						</div>
						<div className="transaction-card">
							<p>Exchanged: X ETH for Y TRX</p>
							<p>On date: 21-11-2019</p>

							<Button variant="primary">More Info</Button>
						</div>
						<div className="transaction-card">
							<p>Exchanged: X ETH for Y TRX</p>
							<p>On date: 21-11-2019</p>

							<Button variant="primary">More Info</Button>
						</div>
						<div className="transaction-card">
							<p>Exchanged: X ETH for Y TRX</p>
							<p>On date: 21-11-2019</p>

							<Button variant="primary">More Info</Button>
						</div>
						<div className="transaction-card">
							<p>Exchanged: X ETH for Y TRX</p>
							<p>On date: 21-11-2019</p>

							<Button variant="primary">More Info</Button>
						</div>
						<div className="transaction-card">
							<p>Exchanged: X ETH for Y TRX</p>
							<p>On date: 21-11-2019</p>

							<Button variant="primary">More Info</Button>
						</div>
						<div className="transaction-card">
							<p>Exchanged: X ETH for Y TRX</p>
							<p>On date: 21-11-2019</p>
							<Button variant="primary">More Info</Button>
						</div>
					</Scrollbars>
				</div>
			</div>
		</section>
	);
}
