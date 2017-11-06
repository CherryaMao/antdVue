import React,{Component} from 'react';
import NavTable from '../components/navTable';
import config from './config.json';
import './home.less';
class Greeter extends Component{
	render(){
		return(
			<div className="box">
				{config.greetText}
				<NavTable/>
				<div className="wrap">
					<div className="wrapLeft">
						<p className="text">this is a sentence,just use to test</p>
					</div>
					<div className="wrapMid">mid</div>
					<div className="wrapRight">
						<ul className="ulList">
							<li>item1</li>
							<li>item2</li>
							<li>item3</li>
							<li>item4</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
export default Greeter;
