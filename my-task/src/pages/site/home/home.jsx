import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import SectionOne from "../../../components/SectionOne/SectionOne";
import Sectiontwo from "../../../components/Sectiontwo/Sectiontwo";
import Sectionizotop from "./../../../components/SectionIzotop/Sectionizotop.jsx";
const Home = () => {
	const { data, setdata } = useContext(MainContext);
	return (
		<>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<SectionOne />
			<Sectiontwo />
			<Sectionizotop />
			<div></div>
		</>
	);
};

export default Home;
