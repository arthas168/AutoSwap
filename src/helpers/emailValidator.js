export default function validateEmail(type) {
	var re = /\S+@\S+\.\S+/;
	return re.test(type);
}
