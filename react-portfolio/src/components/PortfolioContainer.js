import React, { useState, useEffect } from "react";
import NavTabs from "./NavTabs";
// import Home from "./pages/Z_NotUsed_Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/__Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
	// When the page loads, set the document title to something specific to this app. Runs once because of optional dependency array
	useEffect(() => {
		document.title = "Chris Ridder";
	}, []);

	const [currentPage, setCurrentPage] = useState("About");

	// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
	const renderPage = () => {
		// if (currentPage === "Home") {
		// 	return <Home />;
		// }
		if (currentPage === "About") {
			return <About />;
		}
		if (currentPage === "Portfolio") {
			return <Portfolio />;
		}
		if (currentPage === "Contact") {
			return <Contact />;
		}
		if (currentPage === "Resume") {
			return <Resume />;
		}
		return <Contact />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		// START MAIN DIV
		<div>
			<header>
				<h1>CHRIS RIDDER</h1>
			</header>
			{/* We are passing the currentPage from state and the function to update it */}
			<NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
			{/* Here we are calling the renderPage method which will return a component  */}
			{renderPage()}

			{/* FOOTER */}
			<footer class="text-center fixed-bottom ">
				<div class="container p-4 pb-0">
					<section class="mb-4">
						{/* <!-- Linkedin --> */}
						<a href="#!"> Linkedin </a>
						{/* <!-- Github --> */}
						<a href="#!"> Github </a>
					</section>
				</div>
			</footer>

			{/* FOOTER */}
		</div>
		// END MAIN DIV
	);
}
