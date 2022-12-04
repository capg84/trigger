import React from 'react';
// Import our custom hook.
import { useInstruction } from '../Utils/instruction';

// Make our ThemeComponent the default export from this file
export default function Instruction() {
  // Pluck values from our ThemeContext by invoking our useTheme hook
  const { rehomeInstruction, toggleInstruction  } = useInstruction();

  // Object containing CSS gradient for darkTheme and non-darkTheme


  // const instructionStyles = {
  //   background: rehomeInstruction
  //     ? '-webkit-linear-gradient(top left, #150C17, #535353)'
  //     : '-webkit-linear-gradient(bottom, #FFFFFF, #EDBAAB)',
  //   padding: '10rem',
  //   margin: '10rem',
  //   borderRadius: '30px',
  //   color: darkTheme ? '#FAFAFA' : '#363537',
  // }

  return (
    <div>
    { rehomeInstruction ? (
      <div>
      <h1 className="instructionHeader">HOW DOES TRIGGER WORK?</h1>

      <div className="instructionButtonCont">
          <button id="button" onClick={toggleInstruction} className="btn" type="button">
          Rehoming
          </button>
      </div>

      <div className="main-section">
          <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col ">
                  <div className="card h-100">
                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                          <h5 className="card-title">1. SEARCH OUR ADVERTS test test test test toggleInstruction</h5>
                          <p className="card-text"></p>
                      </div>
                  </div>
              </div>
              <div className="col ">
                  <div className="card h-100">
                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                          <h5 className="card-title">2. TALK TO A OWNER</h5>
                          <p className="card-text"></p>
                      </div>
                  </div>
              </div>
              <div className="col ">
                  <div className="card h-100">
                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                          <h5 className="card-title">3. TAKE YOUR PET HOME</h5>
                          <p className="card-text"></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
      ) : (
        <div>
        <h1>HOW DOES TRIGGER WORK?</h1>

        <div className="button">
            <button id="button" onClick={toggleInstruction} className="btn" type="button">
            Rehoming
            </button>
        </div>

       

        <div className="main-section">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col ">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">1. SEARCH OUR ADVERTS test test test test toggleInstruction</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">2. TALK TO A OWNER</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
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
