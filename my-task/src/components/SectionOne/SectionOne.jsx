import React from "react";
import "./Section.css";
const SectionOne = () => {
	return (
		<>
			<section className="CarouselSection">
				<div className="SectionDiv">
					<div className="SectionImage">
						<img src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg.webp" alt="" />
					</div>
					<div className="SectionText">
						<h1>Tasty & Delicious Food</h1>
						<a href="/Home">Book A Table</a>
					</div>
					<div className="SectionInput">
						<input type="text" placeholder="Name" />
						<input type="text" placeholder="Phone" />
						<input type="date" />
						<input type="time" />
						<select name="Person" id="Person">
							<option value="1,2,3,4">Person</option>
						</select>
						<button>Book A Table</button>
					</div>
				</div>
			</section>
			
		</>
	);
};

export default SectionOne;
