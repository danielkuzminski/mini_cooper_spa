//styles
import "./intro.css"

//assets


export default function Intro() {
	return (
		<section className="intro">
			<div className="intro-left intro-container">
				<h2 className="intro-title">
					Discover the Iconic Mini
				</h2>
				<img width="500" height="200" src="" alt="" />
				<h3 className="intro-subtitle">
					Unlock the extraordinary
				</h3>
				<p className="intro-text">
					A timeless icon of style, performance, and driving pleasure.
				</p>
				<p className="intro-text">
					Crafted with precision engineering and infused with decades of innovation, the Mini Cooper is more than just a car... It's a lifestyle statement
				</p>
			</div>
			<div className="intro-right intro-container">
				<h4 className="mini-container">
					<span className="mini">mini</span>
				</h4>
				<p className="intro-car">cooper</p>
				<p className="intro-car">one</p>
				<p className="intro-car">clubman</p>
				<p className="intro-car">countryman</p>
			</div>
		</section>
	)
}

