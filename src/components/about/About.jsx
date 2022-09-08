import "./about.css";

const About = () => {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img
						className="a-img"
						src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
					/>
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">About me</h1>
				<p className="a-sub">
					Better experience. Customer First.
				</p>
				<p className="a-desc">
					I excel working with designers and clients
					with the ability to turn their vision into
					reality in the fine cabinetry industry and
					now turning that same passion of building and
					problem-solving to the web. I am looking to
					dive deeper into learning programming
					languages while also honing my
					building/problem solving skills and
					contribute to the success of your company.
				</p>
			</div>
		</div>
	);
};

export default About;
