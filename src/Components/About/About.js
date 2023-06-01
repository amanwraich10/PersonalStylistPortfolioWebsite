import image from "../../Assets/B8364B6F-20D6-453E-A6A6-8CB5F25C16B9.JPG";

import "../About/About.scss";
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
						interest for the creative field. I started learning with
						portrait sketches which led me to be interested in other
						forms of art and fashion. I believe that art has no
						limits and boundries which allows my imagination to
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
