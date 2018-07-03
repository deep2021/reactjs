import React from 'react';
import UploadFile from './UploadFile';
import HeaderSecond from './HeaderSecond';
import Footer from '../Footer';
//import Docvalidation from './Docvalidation';
import HomeBanner from './HomeBanner';
import RequestSection from './RequestSection';
import RequestSection2 from './RequestSection2';
import Projectdata from './Projectdata';
import DocumentValidation from './DocumentValidation';

//import ProjectModel from './ProjectModel';
import Discover from '../../components/Discover'
import ProfilePic from "../../components/ProfilePic"

export default class DashBoard extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	// constructor(props) {
	// 	super(props);
	render() {
		return (
       <React.Fragment>
                 
            	<HeaderSecond/>
                 <ProfilePic />
                <DocumentValidation />
                <div className="body-wrapper">
                <HomeBanner />
                <UploadFile />
                <RequestSection />
                <Projectdata />
            </div>
            <RequestSection2 />
            <Footer />
            </React.Fragment>

           		);
			}
}
