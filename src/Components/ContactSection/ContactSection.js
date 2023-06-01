import "../ContactSection/ContactSection.scss";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactSection() {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				"service_xt5lgpn",
				"template_ynavnh6",
				{
					from_name: form.name,
					to_name: "Shraddha",
					from_email: form.email,
					to_email: "sshraddhachauhan@gmail.com",
					message: form.message,
				},
				"HdB0bRolGZp7c89JU"
			)
			.then(
				() => {
					setLoading(false);
					alert(
						"Thank you. I will get back to you as soon as possible."
					);
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert("Something went wrong.");
				}
			);
	};
	return (
		<div className="contact">
			<h1 className="contact__heading">Want to Chat? </h1>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className="contact__form"
			>
				<label className="contact__label">
					<span className="contact__span">Your Name</span>
					<input
						className="contact__input"
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						placeholder="What's your good name?"
					/>
				</label>

				<label className="contact__label">
					<span className="contact__span">Your Email</span>
					<input
						className="contact__input"
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						placeholder="What's your web address?"
					/>
				</label>

				<label className="contact__label">
					<span className="contact__span">Your Message</span>
					<textarea
						rows={7}
						className="contact__input"
						name="message"
						value={form.message}
						onChange={handleChange}
						placeholder="What you want to say?"
					/>
				</label>

				<button type="submit" className="contact__button">
					SEND
				</button>
			</form>
		</div>
	);
}

export default ContactSection;
