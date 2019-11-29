import React from 'react';
import { toDateTime } from '../../helpers/helperFns';

export default function index(props) {
	const t = props.t;
	console.log(t);
	return (
		<div className="info-table">
			<p>
				Transaction ID - <span>7534873</span>
			</p>
			<p>
				ETH Amount - <span>{t.ethAmount}</span>
			</p>
			<p>
				TRX Amount - <span>{t.trxAmount}</span>
			</p>
			<p>
				Date - <span>{toDateTime(t.date._seconds).toString()}</span>
			</p>
			<p>
				ETH Price (in time of transaction) - <span>{t.ethPrice}</span>
			</p>
			<p>
				TRX Price (in time of transaction) - <span>{t.trxPrice}</span>
			</p>
			<p>
				Transaction Hash - <span>{t.txHash}</span>
			</p>
			<p>
				Execution Time - <span>{t.execTime}</span>
			</p>
		</div>
	);
}
