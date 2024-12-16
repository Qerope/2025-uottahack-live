import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';

const DoubleInfoCard = ({
  name1 = "",
  tel1 = "",
  email1 = "",
  discord1 = "",
  name2 = "",
  tel2 = "",
  email2 = "",
  discord2 = ""
}) => {
  const profilePictureStyle = {
    width: "230px", // Increased size
    height: "210px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    border: "2.5px solid black",
    display: "inline-block",
	marginTop: "50px",
    marginBottom: "10px", 
  };

  const textStyle = {
    fontSize: "18px",
    fontWeight: "300",
    color: "#000",
  };

  const nameStyle = {
    fontSize: "16px",
    fontWeight: "400",
    color: "#000",
  };

  const phoneStyle = {
    fontSize: "16px",
    fontWeight: "300",
    color: "rgba(26, 119, 119, 1)",
  };

  return (
    <div className="col-md-11 col-sm-12 mt-2">
        <Row>
          <div className="col-md-6 text-center">
            <div style={profilePictureStyle}></div>
            <h4 style={nameStyle}>{name1}</h4>
            <div className="mt-1">
              {tel1 && (
                <div className="mt-2">
                  <span style={textStyle}>
                    Phone: <span style={phoneStyle}>{tel1}</span>
                  </span>
                </div>
              )}
              {email1 && (
                <div className="mt-2">
                  <span style={textStyle}>Email: {email1}</span>
                </div>
              )}
              {discord1 && (
                <div className="mt-2">
                  <span style={textStyle}>Discord: {discord1}</span>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div style={profilePictureStyle}></div>
            <h4 style={nameStyle}>{name2}</h4>
            <div className="mt-1">
              {tel2 && (
                <div className="mt-2">
                  <span style={textStyle}>
                    Phone: <span style={phoneStyle}>{tel2}</span>
                  </span>
                </div>
              )}
              {email2 && (
                <div className="mt-2">
                  <span style={textStyle}>Email: {email2}</span>
                </div>
              )}
              {discord2 && (
                <div className="mt-2">
                  <span style={textStyle}>Discord: {discord2}</span>
                </div>
              )}
            </div>
          </div>
        </Row>
    </div>
  );
};

const InfoSection = () => (
  <div>
    <Row className="mt-2 justify-content-center">
      <DoubleInfoCard
        name1="Saja"
        tel1="613-123-4567"
        email1="email@mail.com"
        discord1="saja73"
        name2="Matteo"
        tel2="613-123-4567"
        email2="email@mail.com"
        discord2="copyriqht"
      />
    </Row>
  </div>
);

const ContactView: React.FC = () => {
  return (
    <Container id="contact-view" fluid>
      <Col>
        <InfoSection />
        <div className="mt-5" style={{ marginLeft: "70px" }}>
          <b>* For life-threatening emergencies, please call 911</b>
        </div>
      </Col>
    </Container>
  );
};

export default ContactView;
