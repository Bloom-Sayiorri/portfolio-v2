import React, { useState } from "react";
import styles from "../styles/contact.module.css";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		comments: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = new FormData(e.target);

		const name = form.get("name");
		const email = form.get("email");
		const comments = form.get("comments");
		const subject = `Portfolio contact from ${name}`;

		const body = `
			Name: ${name}
			Email: ${email}
			Message: ${message}
		`;
		window.location.href = `mailto:bloomsayiorri@gmail.com??subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;
	};

	const handleChange = (event) => {
		const { name, value } = event.currentTarget;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.formTitle}>Contact Me</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				<label htmlFor="name" className={styles}>
					Name
				</label>
				<input type="text" id="name" name="name" placeholder="Enter name..." onChange={handleChange} required />
				<label htmlFor="email" className="">
					Email
				</label>
				<input type="email" id="email" name="email" placeholder="Enter email..." onChange={handleChange} required />
				<label htmlFor="message" className="">
					Message
				</label>
				<textarea id="message" name="message" placeholder="Message..." onChange={handleChange} />
				<button type="submit" className={styles.submitBtn}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Contact;
