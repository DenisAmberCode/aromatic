import React from 'react';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
            <footer id='footer' className="pt-5 footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12 about-company">
                            <h2>Heading</h2>
                            <p className="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
                            <span>
                                <div>
                                    <h5><a href="https://www.instagram.com/aromatic.for.home/"><i className="fab fa-instagram fa-2x"></i>aromatic.for.home</a></h5>
                                </div>
                            </span>
                        </div>
                        <div className="col-lg-6 col-xs-12 location">
                            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                            <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
                            <p><i className="far fa-envelope mr-3"></i>info@hsdf.com</p>
                        </div>
                    </div>
                    <div className="row mt-5 center">
                        <div className="col copyright">
                            <p className=""><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </footer>
		)
	}
}