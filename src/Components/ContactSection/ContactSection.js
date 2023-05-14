import "../ContactSection/ContactSection.scss";

function ContactSection() {
	return (
		<div className="contact">
			<h1 className="contact__heading">Want to Chat? </h1>
			<form className="contact__form">
				<label className="contact__label">
					<span className="contact__span">Your Name</span>
					<input
						className="contact__input"
						type="text"
						name="name"
						placeholder="What's your good name?"
					/>
				</label>

				<label className="contact__label">
					<span className="contact__span">Your Email</span>
					<input
						className="contact__input"
						type="email"
						name="email"
						placeholder="What's your web address?"
					/>
				</label>

				<label className="contact__label">
					<span className="contact__span">Your Message</span>
					<textarea
						rows={7}
						className="contact__input"
						name="message"
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
