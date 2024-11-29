import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';

const DoubleInfoCard = ({ name1="", desc1="", tel1="", email1="" , name2="", desc2="", link2="", tel2="", email2="" }) => (
	<div className='col-md-12 col-sm-12  mt-2'>
			<div className="card p-3 mb-2 rounded">
				<div className="mt-2">
				  <Row>
					  <div className='col-md-6'>
						  <h3 className="heading" style={{fontWeight: 800}}>{name1}</h3>
						  <div className="mt-1">
							  <div className="mt-3"> 
							  {desc1!="" && <div className="mt-3"> 
							  <span className="text1">{desc1}</span> </div>}
							  {tel1!="" && <div className="mt-3"> 
							  <span className="text1">Tel: <a href={'tel:'+tel1}> <span className='text2'>{tel1}</span></a></span> </div>}
							  {email1!="" && <div className="mt-3"> 
							  <span className="text1">Email: <a href={'mailto:'+email1}> <span className='text2'>{email1}</span></a></span> </div>}
							  </div>
						  </div>
					  </div>
					  <div className='col-md-6'>
					  <h3 className="heading" style={{fontWeight: 800}}>{name2}</h3>
						  <div className="mt-1">
							  <div className="mt-3"> 
							  {desc2!="" && <div className="mt-3"> 
							  <span className="text1">{desc2}</span> </div>}
							  {tel2!="" && <div className="mt-3"> 
							  <span className="text1">Tel: <a href={'tel:'+tel2}> <span className='text2'>{tel2}</span></a></span> </div>}
							  {email2!="" && <div className="mt-3"> 
							  <span className="text1">Email: <a href={'mailto:'+email2}> <span className='text2'>{email2}</span></a></span> </div>}
							  </div>
						  </div>
					  </div>
				  </Row>
				</div>
			</div>
		</div>
  );

  const InfoSection = () => (
	<div>
		<Row className='mt-3 center'>
			<DoubleInfoCard
				name1="Deniz Jasarbasic"
				desc1="Co-Director"
				tel1='(873) 354-9180'
				email1='chair@uottahack.ca'
				name2="Iaroslav Volkov"
				desc2="Co-Director"
				tel2='(613)-276-7657'
				email2='chair@uottahack.ca'
			/>
	  </Row>
		
	</div>
  );

const ContactView: React.FC = () => {
	return (
		<Container id="contact-view" fluid>
			<Col>
			<InfoSection/>
				<div className="mt-5">
					<b>* For life threatening emergencies please call 911</b>
				</div>
			</Col>
		</Container>
	);
};

export default ContactView;
