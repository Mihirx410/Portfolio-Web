import { useState } from "react";
import { Col, Row } from "react-bootstrap";


export const Newsletter = () => {
  const [mail, setMail] = useState(""); 

  return (
      <div>
    <Row className="justify-content-center">
      <Col>
        <div className="newsletter-bx">
          <Row className="align-items-center">
            <Col lg={4} sm={6} className="text-left"> 
              <h3>Subscribe to our Newsletter And Never Miss Out Any Updates</h3>
            </Col>
            <Col lg={6} sm={4}>
              <form id="news-form">
                <div className="new-email-bx">
                  <input 
                    type="email" 
                    value={mail} 
                    onChange={(e) => setMail(e.target.value)} 
                    placeholder="Enter your email"
                  />
                </div>
                  <button className="new-email-button" type="submit">Submit</button>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
    </div>
  );
};
