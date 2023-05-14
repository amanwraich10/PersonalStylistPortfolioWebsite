import image1 from "../../Assets/ImagesMen/Image1.JPG";
import image2 from "../../Assets/ImagesMen/Image2.JPG";
import image3 from "../../Assets/ImagesMen/Image3.JPG";
import image4 from "../../Assets/ImagesMen/Image4.JPG";
import image5 from "../../Assets/ImagesMen/Image5.JPG";
import "../Men/Men.scss";
import { motion } from "framer-motion";

function Men() {
	return (
		<>
			<div className="image__div-men">
				<motion.div
					className="image__div-single"
					whileHover={{ scale: [null, 1.1, 1.1] }}
					transition={{ duration: 0.5 }}
				>
					<img className="image--men" src={image1} alt="image" />
				</motion.div>
				<motion.div
					className="image__div-single"
					whileHover={{ scale: [null, 1.1, 1.1] }}
					transition={{ duration: 0.5 }}
				>
					<img className="image--men" src={image2} alt="image" />
				</motion.div>
				<motion.div
					className="image__div-single"
					whileHover={{ scale: [null, 1.1, 1.1] }}
					transition={{ duration: 0.5 }}
				>
					<img
						className="image__four--men"
						src={image4}
						alt="image"
					/>
				</motion.div>
				<motion.div
					className="image__div-single"
					whileHover={{ scale: [null, 1.1, 1.1] }}
					transition={{ duration: 0.5 }}
				>
					<img className="image--men" src={image5} alt="image" />
				</motion.div>
			</div>
		</>
	);
}

export default Men;
