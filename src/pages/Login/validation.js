const validation = (values) => {
	let errors = {};

	if(!values.email ){
		errors.email = "Vui lòng nhập email";
	}else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)){
		errors.email = "Email không hợp lệ"
	}else{
		errors.email = ""
	}

	if(!values.password ){
		errors.password = "Vui lòng nhập mật khẩu";
	}
	return errors;
}
export default validation;