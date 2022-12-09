import React from 'react';
// Import our custom hook.
import { useInstruction } from '../Utils/instruction';

// import companyLogo from './path/to/logo.jpg';
// import adopt from './Assets/Images/adopt.jpeg'


// Make our ThemeComponent the default export from this file
export default function Instruction() {
  // Pluck values from our ThemeContext by invoking our useTheme hook
  const { rehomeInstruction, toggleInstruction  } = useInstruction();

  return (
    <div>
    { rehomeInstruction ? (
      <div>
      <h1 className="instructionHeader">HOW DOES TRIGGER WORK?</h1>

      <div className="button">
          <button id="button-rehome" onClick={toggleInstruction} className="btn" type="button">
          Rehoming
          </button>
      </div>

      <div className="main-section">
          <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col ">
                  <div className="card h-100">
                      <img src={require('../Assets/Images/create-advert.png')} className="card-img-top" alt="Advert" />
                      <div className="card-body">
                          <h5 className="card-title">1. CREATE AN ADVERT</h5>
                          <p className="card-text"></p>
                      </div>
                  </div>
              </div>
              <div className="col ">
                  <div className="card h-100">
                      <img src={require('../Assets/Images/talk.webp')}  className="card-img-top" alt="Talk" />
                      <div className="card-body">
                          <h5 className="card-title">2. TALK TO PEOPLE WHO ARE INTERESTED IN ADOPTING</h5>
                          <p className="card-text"></p>
                      </div>
                  </div>
              </div>
              <div className="col ">
                  <div className="card h-100">
                      <img src={require('../Assets/Images/rehome.png')}  className="card-img-top" alt="Rehome" />
                      <div className="card-body">
                          <h5 className="card-title">3. SEND YOUR PET TO A GOOD HOME</h5>
                          <p className="card-text"></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
      ) : (
        <div>
        <h1 className="instructionHeader">HOW DOES TRIGGER WORK?</h1>

        <div className="button">
            <button id="button-adopt" onClick={toggleInstruction} className="btn" type="button">
            Adopting
            </button>
        </div>

       

        <div className="main-section">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col ">
                    <div className="card h-100">
                        <img src={require('../Assets/Images/search-advert.png')}  className="card-img-top" alt="Advert" />
                        <div className="card-body">
                            <h5 className="card-title">1. SEARCH OUR ADVERTS</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card h-100">
                        <img src={require('../Assets/Images/talk.webp')}  className="card-img-top" alt="Talk" />
                        <div className="card-body">
                            <h5 className="card-title">2. TALK TO AN OWNER</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card h-100">
                        <img src={require('../Assets/Images/adopt.jpeg')}  className="card-img-top" alt="Adopt" />
                        <div className="card-body">
                            <h5 className="card-title">3. TAKE YOUR PET HOME</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      )}
    </div>
  );
};


// 16 <div className="instructionButtonCont">