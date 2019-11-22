import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyBtrafBacp804xIn50WtRMUm222hgh018c',
	authDomain: 'atomic-swap.firebaseapp.com',
	databaseURL: 'https://atomic-swap.firebaseio.com',
	projectId: 'atomic-swap',
	storageBucket: 'atomic-swap.appspot.com',
	messagingSenderId: '152905624542',
	appId: '1:152905624542:web:7dd8542a3a1f60cdf14b4f',
	measurementId: 'G-X8612WVEN6',
};

const fire = firebase.initializeApp(config);
export default fire;
