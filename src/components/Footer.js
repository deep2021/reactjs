import React from 'react';

export default class Footer extends React.Component {
/*	static propTypes = {
		name: React.PropTypes.string,
	};
*/
	constructor(props) {
		super(props);
	}

	render() {
		return (
					<footer>
                    <div className="f-left">Copyright 2018 CrowdCoin Platform
                    </div>
                    <div className="f-right">
                        <ul>
                            <li>
                                <a href="#"><img alt="BITCOIN" src={require('../img/bitcoin.png')} /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="GITHUB" src={require('../img/github.png')} /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="TWITTER" src={require('../img/twitter.png')} /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="TELEGRAM" src={require('../img/telegram.png')} /></a>
                            </li>
                             <li>
                                <a href="#"><img alt="DISCORD" src={require('../img/discord.png')} /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="RABBIT" src={require('../img/rabbit.png')} /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="FACEBOOK" src={require('../img/facebook.png')} /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="YOUTUBE" src={require('../img/youtube.png')} /></a>
                            </li>
                        </ul>
                    </div>
                </footer>
		);
	}
}
