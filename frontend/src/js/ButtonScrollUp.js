import React from 'react';
const $ = window.$;

export default class ButtonScrollUp extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(event) {
		$('html, body').animate({scrollTop:0}, 300);
	}

	componentDidMount() {
		$(window).scroll(() => {
			if ($(window).scrollTop() > 300) {
				$("#btnScrollUp")[0].style.opacity = 0.8;
			} else {
				$("#btnScrollUp")[0].style.opacity = 0;
				
			}
		});
	}

	render() {
		return (<div id="btnScrollUp" className={ "btnScrollUp" } onClick={ this.onClick }></div>)
	}

}