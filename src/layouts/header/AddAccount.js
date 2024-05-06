// AddAccount.js
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BiLogoGmail } from 'react-icons/bi';
import { PiMicrosoftOutlookLogoFill } from 'react-icons/pi';
import Mudhala from './mudhala';

const AddAccount = () => {
  const [isHoveredGmail, setIsHoveredGmail] = useState(false);
  const [isHoveredHotmail, setIsHoveredHotmail] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState('');
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const boxStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '300px',
    height: '350px',
    margin: '20px',
  };

  const optionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    margin: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const optionHoverStyle = {
    backgroundColor: '#3891ea',
    ...optionStyle,
  };

  const backButtonStyle = {
    fontSize: '20px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const iconStyle = {
    fontSize: '30px',
    marginBottom: '10px',
  };

  const handleOptionClick = (provider) => {
    setSelectedProvider(provider);
    alert(`Selected Provider: ${provider}`);
    navigate('/mudhala');
  };

  const handleBackButtonClick = () => {
    navigate('/about');
  };

  return (
    <div style={containerStyle}>
      <FaArrowLeft style={backButtonStyle} onClick={handleBackButtonClick} />
      <div style={boxStyle}>
        <h2><b>Add an Account</b></h2>
        <br></br>
        <br></br>
        <div
          style={isHoveredGmail ? optionHoverStyle : optionStyle}
          onMouseEnter={() => setIsHoveredGmail(true)}
          onMouseLeave={() => setIsHoveredGmail(false)}
          onClick={() => handleOptionClick('Gmail')}
        >
          <BiLogoGmail style={iconStyle}/>
          <span><h5>Gmail</h5></span>
        </div>
        <br></br>
        <div
          style={isHoveredHotmail ? optionHoverStyle : optionStyle}
          onMouseEnter={() => setIsHoveredHotmail(true)}
          onMouseLeave={() => setIsHoveredHotmail(false)}
          onClick={() => handleOptionClick('Hotmail')}
        >
          <PiMicrosoftOutlookLogoFill style={iconStyle} />
          <span><h5>Hotmail</h5></span>
        </div>
        {/* Render the Mudhala component with the selected provider */}
        {selectedProvider && <Mudhala selectedProvider={selectedProvider} />}
      </div>
    </div>
  );
};

export default AddAccount;
