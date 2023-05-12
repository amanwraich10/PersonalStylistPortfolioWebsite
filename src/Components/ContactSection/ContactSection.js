import "../ContactSection/ContactSection.scss";

function ContactSection() {
	return (
		<>
			<h1 className="contact__heading">Want to chat? </h1>
			<form className="contact__form">
				<label className="contact__label">
					<span className="contact__span">Your Name</span>
					<input
						type="text"
						name="name"
						placeholder="What's your good name?"
					/>
				</label>

				<label className="contact__label">
					<span className="contact__span">Your email</span>
					<input
						type="email"
						name="email"
						placeholder="What's your web address?"
					/>
				</label>

				<label className="contact__label">
					<span className="contact__span">Your Message</span>
					<textarea
						name="message"
						placeholder="What you want to say?"
					/>
				</label>

				<button type="submit">SEND</button>
			</form>
		</>
	);
}

export default ContactSection;
