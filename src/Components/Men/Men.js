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
			<div className="div">
				<motion.div
					className="image__div"
					whileHover={{ scale: [null, 1.1, 1.1] }}
					transition={{ duration: 0.5 }}
				>
					<img className="image" src={image1} alt="image" />
				</motion.div>

				<motion.div
					className="image__div"
					whileHover={{ scale: [null, 1.1, 1.1] }}
					transition={{ duration: 0.5 }}
				>
					<img className="image" src={image2} alt="image" />
				</motion.div>

				<motion.div
					className="image__div"
					whileHover={{ scale: [null, 1.1, 1.1] }}
					transition={{ duration: 0.5 }}
				>
					<img className="image" src={image3} alt="image" />
				</motion.div>

				<motion.div
					className="image__div"
					whileHover={{ scale: [null, 1.1, 1.1] }}
					transition={{ duration: 0.5 }}
				>
					<img className="image__four" src={image4} alt="image" />
				</motion.div>

				<motion.div
					className="image__div"
					whileHover={{ scale: [null, 1.1, 1.1] }}
					transition={{ duration: 0.5 }}
				>
					<img className="image" src={image5} alt="image" />
				</motion.div>

				{/* <motion.div
					className="image"
					whileHover={{ scale: [null, 1.1, 1.1] }}
					// whileHover={{ scale: [1.3] }}
					transition={{ duration: 0.5 }}
				>
					<img src={image2} alt="image" />
				</motion.div> */}
				{/* <div className="imgBox">
					<img src={image1} alt="image" className="image2" />
				</div> */}
			</div>
		</>
	);
}

export default Men;
