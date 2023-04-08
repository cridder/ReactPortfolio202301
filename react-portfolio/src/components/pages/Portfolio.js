import React from 'react';
import Project from "./Project";
const BrokenDoor = require("../images/Portfolio-BrokenDoor.png");
const JustAnotherTextEditor = require("../images/Portfolio-JustAnotherTextEditor.png");
const NoteTaker = require("../images/Portfolio-NoteTaker.png");
const TechBlog = require("../images/Portfolio-TechBlog.png");

export default function Portfolio() {
  const projects = [
		{
			title: "BrokenDoor",
			description: "BrokenDoor",
			image: BrokenDoor,
			github: "https://github.com/cridder/project2",
			deploy: "https://mysterious-journey-45478.herokuapp.com",
		},
		{
			title: "JustAnotherTextEditor",
			description: "JustAnotherTextEditor",
			image: JustAnotherTextEditor,
			github: "https://github.com/cridder/Text-Editor",
			deploy: "https://fierce-basin-18304.herokuapp.com",
		},
		{
			title: "NoteTaker",
			description: "NoteTaker",
			image: NoteTaker,
			github: "https://github.com/cridder/Note-Taker",
			deploy: "https://polar-fortress-84142.herokuapp.com",
		},
		{
			title: "TechBlog",
			description: "TechBlog",
			image: TechBlog,
			github: "https://github.com/cridder/PrivateTechBlog",
			deploy: "https://polar-fortress-84142.herokuapp.com",
		},
	];

  return (
    <section className="container my-5">
      <h1 className="text-center">Portfolio</h1>
      <hr />
      <div className="row">
        {projects.map((project, index) => (
         <Project project = {project} key= {"project" + index}/>
        ))}
      </div>
    </section>
  );
};
