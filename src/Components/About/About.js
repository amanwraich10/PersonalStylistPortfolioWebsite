import image from "../../Assets/ImagesWomen/Image1.JPG";
import "../About/About.scss";
import icon1 from "../../Assets/double-quotes.png";
import icon2 from "../../Assets/quote.png";
import { motion } from "framer-motion";

function About() {
	return (
		<>
			<div className="about">
				<div className="about__div-intro">
					<motion.div
						className="about__image-div"
						whileHover={{ scale: [null, 1.1, 1.1] }}
						transition={{ duration: 0.5 }}
					>
						<img src={image} className="about__image" />
					</motion.div>
					<p className="about__intro">
						At the tender age of 3, I discovered my love and
						interest for the creative field. I started with learning
						and portrait sketches which led me to be interested in
						other forms of art and fashion. I believe that art has
						no limits and boundries which allows my imagination to
						thrive and showcase my artistic skills on different
						platforms. In fashion, I enjoy being creative and am
						able to see the meaning of the finished product. I
						experiment with clothing to hone this art. Therefore, I
						believe that, I AM FASHION, I AM BOLD, EXPRESSIVE and
						CREATIVE.
					</p>
				</div>
			</div>
		</>
	);
}

export default About;
