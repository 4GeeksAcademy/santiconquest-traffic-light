import React, { useState } from "react";




//create your first component
const Home = () => {
	const [light, setLight] = useState("");
	
	return (
		<div className="bg-dark d-inline-block">
			<button 
			className={`circle bg-success ${light==="green" ? ' glow' : ""}`}
			onClick={(e)=>{setLight("green")}}
			></button><br />
			<button className={`circle bg-warning ${light==="yellow" ? ' glow' : ""}`}
			onClick={(e)=>{setLight("yellow")}}
			></button><br />
			<button className={`circle bg-danger ${light==="red" ? ' glow' : ""}`}
			onClick={(e)=>{setLight("red")}}
			></button>
		</div>
	);
};

export default Home;
