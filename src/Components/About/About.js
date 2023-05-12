import image from "../../Assets/ImagesWomen/Image1.JPG";
import "../About/About.scss";
import icon1 from "../../Assets/double-quotes.png";
import icon2 from "../../Assets/quote.png";
import { motion } from "framer-motion";

function About() {
	return (
		<>
			<div className="about__div">
				<div className="divtwo">
					<img src={icon2} className="iconone" />
					<p className="about__intro">
						I’m a master coach, best-selling author and a passionate
						speaker. I’m the founder of the first women-only hedge
						fund, special counsellor in many corporations across the
						globe. I’ve found balance between work and life, now I’m
						a totally happy person, loving mother, inspiring speaker
						and writer, and firm investor, but it didn’t come
						easily. I've gone though hundreds of failures and
						complicated situations. You can use my previous
						experience in order not to fall into the same trap
					</p>

					<img src={icon1} className="icontwo" />
				</div>

				<motion.div
					// className="image"
					whileHover={{ scale: [null, 1.1, 1.1] }}
					// whileHover={{ scale: [1.3] }}
					transition={{ duration: 0.5 }}
				>
					<img className="about__image" src={image} />
				</motion.div>
				{/* <img className="about__image" src={image} /> */}
			</div>
		</>
	);
}

export default About;
