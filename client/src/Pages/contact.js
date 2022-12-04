import React from 'react';


export default function Contact() {

    return (
        <main>

            <div>
                <h3 style={{ color: "#AD7940", padding: "2vh" }}>HOME / CONTACT</h3>
            </div>

            <section className="contact" style={{ paddingTop: "75px" }} >
                <form style={{
                    borderRadius: "20px", backgroundColor: "#AD7940", opacity: "0.8", width: "50%",
                    height: "fit-content", marginLeft: "25%", paddingTop: "1vh", paddingBottom: "1vh"
                }}>

                    <div >
                        <h5 className="mt-3" style={{ fontSize:"30px", marginLeft: "10%", color: "#f2faf5" }} >NAME:</h5>
                        <input placeholder='NAME' type="name" className="input" 
                        style={{ width: "80%", marginLeft: "10%", padding: "1vh", color: "#AD7940", fontSize: "25px" }} />

                    </div>

                    <div >
                        <h5 className="mt-3" style={{ fontSize:"30px" ,marginLeft: "10%", color: "#f2faf5" }}  >EMAIL ADDRESS:</h5>
                        <input placeholder='ENTER EMAIL' type="email" className="input" 
                        style={{ width: "80%", marginLeft: "10%", padding: "1vh", color: "#AD7940", fontSize: "25px" }} />
                    </div>

                    <div >
                        <h5 style={{fontSize:"30px" , marginLeft: "10%", color: "#f2faf5" }} className="mt-3" >MESSAGE:</h5>
                        <textarea placeholder='ENTER MESSAGE'type="message" className="input" 
                        style={{ width: "80%", marginLeft: "10%", height: "20vh", padding: "1vh", color: "#AD7940", fontSize: "25px" }} />
                    </div>
                    <div style={{  textAlign: "center", margin: "2vh"}}>
                        <button style={{ backgroundColor: "#9CCBC3", color: "#f2faf5", width: "15vh", margin: "1vh", }} type="submit" className="btn">SEND</button>
                    </div>
                </form>
            </section>
        </main>


    )
}

