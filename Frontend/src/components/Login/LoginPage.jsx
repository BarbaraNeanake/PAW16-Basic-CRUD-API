import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; 
import styles from "./styles.module.css";

const Login = ({ onLoginSuccess }) => {
	const [data, setData] = useState({ email: "", password: "" });
	const [rememberMe, setRememberMe] = useState(false);
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleCheckboxChange = () => {
		setRememberMe(!rememberMe);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			if (rememberMe) {
				localStorage.setItem("email", data.email);
			} else {
				localStorage.removeItem("email");
			}
			onLoginSuccess();  
			navigate("/app");
		} catch (error) {
			if (error.response && error.response.status >= 400 && error.response.status <= 500) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<div className={styles.password_container}>
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
								value={data.password}
								required
								className={styles.input}
							/>
							<div className={styles.checkbox_container}>
								<input
									type="checkbox"
									checked={rememberMe}
									onChange={handleCheckboxChange}
								/>
								<label>Remember Me</label>
							</div>
						</div>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/register">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
