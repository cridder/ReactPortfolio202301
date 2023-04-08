import React from "react";
import Project from "./Project";
const BrokenDoor = require("../images/Portfolio-BrokenDoor.png");
const JustAnotherTextEditor = require("../images/Portfolio-JustAnotherTextEditor.png");
const NoteTaker = require("../images/Portfolio-NoteTaker.png");
const TechBlog = require("../images/Portfolio-TechBlog.png");

export default function Portfolio() {
	const projects = [
		{
			title: "BrokenDoor",
			description:
				"  This project was created to demonstrate an important milestone in our full-stack bootcamp: Designing and building our first full-stack web application. We have designed and built an app using the MVC paradigm, created our own server-side API, added user authentiction and connected to a database.",
			image: BrokenDoor,
			github: "https://github.com/cridder/project2",
			deploy: "https://mysterious-journey-45478.herokuapp.com",
		},
		{
			title: "JustAnotherTextEditor",
			description:
				"  Your task is to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.",
			image: JustAnotherTextEditor,
			github: "https://github.com/cridder/Text-Editor",
			deploy: "https://fierce-basin-18304.herokuapp.com",
		},
		{
			title: "NoteTaker",
			description:
				"  Your challenge is to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.  The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.",
			image: NoteTaker,
			github: "https://github.com/cridder/Note-Taker",
			deploy: "https://polar-fortress-84142.herokuapp.com",
		},
		{
			title: "TechBlog",
			description:
				" Your challenge this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
			image: TechBlog,
			github: "https://github.com/cridder/PrivateTechBlog",
			deploy: "https://polar-fortress-84142.herokuapp.com",
		},
	];

	return (
		<section className="container my-5">
			<div className="row">
				{projects.map((project, index) => (
					<Project project={project} key={"project" + index} />
				))}
			</div>
		</section>
	);
}
