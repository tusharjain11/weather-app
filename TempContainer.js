import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTemperature } from "../redux/actions";

const TempContainer = (props) => {
	useEffect(() => {
		console.log("fetching data...");
		props.fetchTemperature();
	}, [props.fetchTemperature]);

	return props.loading ? (
		<h2>Loading...</h2>
	) : props.error ? (
		<h2>{props.error}</h2>
	) : (
		<div>
			<h2>
				{(props.tempData.temperature - 273.15).toFixed(2)} Degree Celsius
			</h2>
			<h3>Gwalior, Madhya Pradesh</h3>
		</div>
	);
};


const mapStateToProps = (state) => {
	return {
		loading: state.loading,
		error: state.error,
		tempData: state.temperature,
	};
};


export default connect(mapStateToProps, { fetchTemperature })(TempContainer);