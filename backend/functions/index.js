const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send('Hello world!');
});

exports.getTransactions = functions.https.onRequest((req, res) => {
	admin
		.firestore()
		.collection('transactions')
		.get()
		.then(data => {
			let transactions = [];
			data.forEach(doc => {
				transactions.push(doc.data());
			});
			return res.json(transactions);
		})
		.catch(err => {
			console.log(err);
		});
});

exports.createTransaction = functions.https.onRequest((req, res) => {
	if (req.method !== 'POST') {
		return res.status(400).json({ error: 'Method not allowerd' });
	}
	const newTransaction = {
		userHandle: req.body.userHandle,
		date: admin.firestore.Timestamp.fromDate(new Date()),
		ethAmount: req.body.ethAmount,
		ethPrice: req.body.ethPrice,
		execTime: req.body.execTime,
		trxAmount: req.body.trxAmount,
		trxPrice: req.body.trxPrice,
		txHash: req.body.txHash,
		userHandle: req.body.userHandle,
	};
	admin
		.firestore()
		.collection('transactions')
		.add(newTransaction)
		.then(doc => {
			res.json({ message: `document ${doc.id} created successfully` });
		})
		.catch(err => {
			res.status(500).json({ error: 'something went wrong' });
			console.error(err);
		});
});
