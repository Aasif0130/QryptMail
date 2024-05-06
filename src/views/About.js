import React from 'react';
import { Row, Col, Card, CardTitle, CardSubtitle } from 'reactstrap';
import Icon2 from '../assets/images/background/icon2.jpg';

const About = () => {
  const features = [
    {
      title: 'Secure Login and Signup:',
      desc: 'QryptMail ensures a secure login and signup process, safeguarding your account information.',
      icon: 'bi-shield-lock',
    },
    {
      title: 'Connect with Google or Hotmail:',
      desc: 'Easily link your QryptMail account with Google or Hotmail for seamless email access and management.',
      icon: 'bi-envelope',
    },
    {
      title: 'OAuth Inbox Access:',
      desc: 'Access your inbox securely using OAuth, providing a protected environment for your emails.',
      icon: 'bi-window',
    },
    {
      title: 'Compose with Security Levels:',
      desc: 'Compose emails with options for security levels: OAuth (Level 1), Quantum-Aided AES (Level 2), One Time Pad with Quantum Keys (Level 3), and Kyber-Encapsulated Quantum Keys (Level 4).',
      icon: 'bi-inbox',
    },
    {
      title: 'No Quantum Security, OAuth Mail:',
      desc: 'Level 1 ensures basic security using OAuth for sending emails without quantum encryption.',
      icon: 'bi-eye-slash',
    },
    {
      title: 'Quantum-Aided AES Security:',
      desc: 'Level 2 enhances security using Quantum-Aided AES with Quantum Keys as Seeds for a quantum-secure email experience.',
      icon: 'bi-arrow-left-right',
    },
    {
      title: 'One Time Pad with Quantum Keys:',
      desc: 'Level 3 employs One Time Pad with the added security of quantum keys, ensuring an extra layer of encryption.',
      icon: 'bi-lock-fill',
    },
    {
      title: 'Kyber-Encapsulated Quantum Keys:',
      desc: 'Level 4 utilizes Kyber for encapsulating quantum keys, providing advanced security measures for your emails.',
      icon: 'bi-shield-lock-fill',
    },
    {
      title: 'Privacy First Approach:',
      desc: 'QryptMail prioritizes your privacy with a commitment to minimal data collection, ensuring your information stays confidential and secure.',
      icon: 'bi-shield-check',
    },
  ];
  
  

  return (
    <Row>
      <Col>
        {/* Header */}
        <Row>
          <Col className="text-center">
            <h1 className="text-white fw-bold">Welcome to Qrypt Mail</h1>
            <p className="text-muted">
              Experience the future of secure communication with Qrypt Mail. Our private email service combines cutting-edge quantum key distribution technology with robust end-to-end encryption, ensuring your communications stay confidential and secure.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <img src={Icon2} alt="Icon2" />
        </Row>

        {/* Content */}
        <Row>
          {features.map((feature, index) => (
            <Col lg="4" className="mb-5 pb-3" key={feature.title}>
              <Card
                style={{
                  width: '100%',
                  height: '100%',
                  padding: '20px',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  backgroundColor: '#0a1118', // Initial dark shade of blue
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3891ea'; // Light blue on hover
                  e.currentTarget.style.color = '#0a1118'; // Black text on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0a1118'; // Dark shade of blue on leave
                  e.currentTarget.style.color = '#ffffff'; // White text on leave
                }}
              >
                <i className={`bi ${feature.icon} text-info fs-2`} />
                <CardTitle tag="h4" className="my-3">
                  {feature.title}
                </CardTitle>
                <CardSubtitle className="text-muted col-10">{feature.desc}</CardSubtitle>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default About;
