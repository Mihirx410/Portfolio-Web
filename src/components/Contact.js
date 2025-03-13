import { useState } from "react"
import contactImg from '../assets/img/contact-img.svg'
import { Col, Container, Row } from "react-bootstrap"

export const Contact = () => {

    const forminitialdetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(forminitialdetails)

    // const [status, Setstatus] = ({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    // const handleSubmit = () =>{

    // }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} >
                        <img src={contactImg} alt='NO img'></img>
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form onSubmit>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="enter first name" onChange={(e) => onFormUpdate('firstName', e.target.value)}>
                                    </input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="enter last name" onChange={(e) => onFormUpdate('lastName', e.target.value)}>
                                    </input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="enter email" onChange={(e) => onFormUpdate('email', e.target.value)}>
                                    </input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="phone" value={formDetails.phone} placeholder="enter phone" onChange={(e) => onFormUpdate('phone', e.target.value)}>
                                    </input>
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea rows={6} value={formDetails.message} placeholder="message" onChange={(e) => onFormUpdate('message', e.target.value)}>
                                    </textarea>
                                </Col>
                                <Col sm={12} className="px-1" style={{ textAlign: "left" }}>
                                    <button type="submit" className="contact-submit">
                                        <span>Send</span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


