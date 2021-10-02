import React, { Component } from "react";
import man1 from "./assets/images/Ellipse 1.png";
import man2 from "./assets/images/image1.png";
import man3 from "./assets/images/image2.png";
import man4 from "./assets/images/image3.png";
import man5 from "./assets/images/image4.png";

export default class BirthdayList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			preson: [
				{
					name: "Ashraf",
					age: "22 years",
					images: man1,
				},
				{
					name: "Robert",
					age: "20 years",
					images: man2,
				},
				{
					name: "Boby",
					age: "25 years",
					images: man3,
				},
				{
					name: "Chandran",
					age: "21 years",
					images: man4,
				},
				{
					name: "Salam",
					age: "22 years",
					images: man5,
				},
			],
		};
	}
	renderItems = () => {
		return this.state.preson.map((item) => (
			<li>
				<div className="img-box">
					<img src={item.images} />
				</div>
				<div className="details">
					<h6>{item.name}</h6>
					<span>{item.age}</span>
				</div>
			</li>
		));
	};
	clearAll = (event) => {
		this.setState({ preson: [] });
	};

	render() {
		return (
			<>
				<div className="container">
					<h1>{this.state.preson.length} birthdays today</h1>
					<ul>{this.renderItems()}</ul>
					<a onClick={() => this.clearAll()}>Clear All</a>
				</div>
			</>
		);
	}
}
