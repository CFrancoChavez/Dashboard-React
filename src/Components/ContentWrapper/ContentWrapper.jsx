import React, { Component } from "react";
import Topbar from "../Topbar/Topbar";
import ContentRowTop from "./SubComponents/ContentRowTop/ContentRowTop";
import Footer from "../Footer/Footer";
import Table from "../Table/Table";

class ContentWrapper extends React.Component {

	constructor() {
		super();
		this.state = {
			movies: [],
			columnTables: []
		}
	}

	async componentDidMount() {
		const response = await fetch("http://localhost:4000/api/productos");
		const data = await response.json();
		console.log(data.data)
		let columnas = [ "name", "price", "discount", "category", "image"];
		this.setState({ movies: data.data, columnTables: columnas })
	}

	render() {

		return(
			<div id="content-wrapper" className="d-flex flex-column">
	
				{/* <!-- Main Content --> */}
				<div id="content">
					
	
					{/* <!-- Topbar --> */}
					<Topbar />
					{/* <!-- End of Topbar --> */}
	
					{/* <!-- Content Row Top --> */}
					<ContentRowTop data={ this.state.movies }/>
					{/* <!--End Content Row Top--> */}
				</div>
				{/* <!-- End of MainContent --> */}
				<div className="card-header py-3">
				<h4 className="m-0 font-weight-bold text-gray-800"> Products in data base : { this.state.movies.length } </h4>
				</div>
				<Table data={ this.state.movies } columns={this.state.columnTables} />
	
				{/* <!-- Footer --> */}
				<Footer />
				{/* <!-- End of Footer --> */}
	
			</div>
		)
	}
}

export default ContentWrapper;