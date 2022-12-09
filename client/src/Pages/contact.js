import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
    return (
        <main>
            <div className="currentPageIdentifier">
                <p style={{ color: "#AD7940", padding: "2vh", fontSize: "30px" }}>
                    <a style={{ color: "#AD7940", padding: "2vh", fontSize: "30px" }} className="item-link" href="/">HOME</a>/ CONTACT</p>
            </div>

            <section className="contact" style={{ paddingTop: "75px" }} >
                <Form style={{
                    borderRadius: "15px", backgroundColor: "#AD7940", opacity: "0.8", width: "50%",
                    height: "fit-content", marginLeft: "25%", paddingTop: "1vh", paddingBottom: "1vh"
                }}>

                    <Form.Group >
                        <Form.Label className="mt-3" style={{ fontSize: "15px", marginLeft: "10%", color: "#f2faf5" }} >NAME:</Form.Label>
                        <Form.Control placeholder='ENTER NAME' type="name" className="input"
                            style={{ width: "80%", marginLeft: "10%", padding: "1vh", color: "#AD7940", fontSize: "15px" }} />

                    </Form.Group>

                    <Form.Group >
                        <Form.Label className="mt-3" style={{ fontSize: "15px", marginLeft: "10%", color: "#f2faf5" }}  >EMAIL ADDRESS:</Form.Label>
                        <Form.Control placeholder='ENTER EMAIL' type="email" className="input"
                            style={{ width: "80%", marginLeft: "10%", padding: "1vh", color: "#AD7940", fontSize: "15px" }} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label style={{ fontSize: "15px", marginLeft: "10%", color: "#f2faf5" }} className="mt-3" >MESSAGE:</Form.Label>
                        <textarea className="form-control input" placeholder='ENTER MESSAGE' type="message"
                            style={{ width: "80%", marginLeft: "10%", height: "20vh", padding: "1vh", color: "#AD7940", fontSize: "15px" }} />
                    </Form.Group>
                    <div style={{ textAlign: "center", margin: "2vh" }}>
                        <Button style={{ backgroundColor: "#9CCBC3", color: "#f2faf5", width: "15vh", margin: "1vh", fontSize: "15px" }} type="submit" className="btn">SEND</Button>
                    </div>
                </Form>
            </section>
        </main>
    );
}
