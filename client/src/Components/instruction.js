import React from 'react';
// Import our custom hook.
import { useInstruction } from '../Utils/instruction';


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

                      <img style={{width: "28vh", height: "15vh"}} src="https://res.cloudinary.com/dwvs0upgi/image/upload/v1670674004/create-advert_nrqzz0.png" className="card-img-top" alt="..." />

                      <div className="card-body">
                          <h5 className="card-title">1. CREATE AN ADVERT</h5>
                          <p className="card-text"></p>
                      </div>
                  </div>
              </div>
              <div className="col ">
                  <div className="card h-100">

                      <img style={{width: "28vh", height: "15vh"}}  src="https://res.cloudinary.com/dwvs0upgi/image/upload/v1670673001/talk_ocb2mn.webp" className="card-img-top" alt="..." />

                      <div className="card-body">
                          <h5 className="card-title">2. TALK TO PEOPLE WHO ARE INTERESTED IN ADOPTING</h5>
                          <p className="card-text"></p>
                      </div>
                  </div>
              </div>
              <div className="col ">
                  <div className="card h-100">

                      <img style={{width: "28vh", height: "15vh"}}  src="https://res.cloudinary.com/dwvs0upgi/image/upload/v1670672977/rehome_pah5gn.png" className="card-img-top" alt="..." />

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

                        <img style={{width: "28vh", height: "15vh"}}  src="https://res.cloudinary.com/dwvs0upgi/image/upload/v1670674012/search-advert_ddnvpy.png" className="card-img-top" alt="..." />

                        <div className="card-body">
                            <h5 className="card-title">1. SEARCH OUR ADVERTS</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card h-100">

                        <img style={{width: "28vh", height: "15vh"}}  src="https://res.cloudinary.com/dwvs0upgi/image/upload/v1670673001/talk_ocb2mn.webp" className="card-img-top" alt="..." />

                        <div className="card-body">
                            <h5 className="card-title">2. TALK TO AN OWNER</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card h-100">

                        <img style={{width: "28vh", height: "15vh"}}  src="https://res.cloudinary.com/dwvs0upgi/image/upload/v1670672969/new-pet_nm5wuy.jpg" className="card-img-top" alt="..." />

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