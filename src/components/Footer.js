import { Col, Container, Row } from "react-bootstrap"
import logo from '../assets/img/logo.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>

                <Row className="align-items-center text-sm-start">
                    <Col sm={6}>
                        <img src={logo} alt="" />
                    </Col>

                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="white">
                                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5 3.66 9.14 8.43 9.93v-7.02H8.1v-2.91h2.33v-2.12c0-2.3 1.37-3.57 3.47-3.57.99 0 2.02.18 2.02.18v2.22h-1.14c-1.12 0-1.47.7-1.47 1.41v1.69h2.5l-.4 2.91h-2.1v7.02C18.34 21.2 22 17.07 22 12.07z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="white">
                                <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 18H5v-9h3v9zm-1.5-10.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm11 10.25h-3v-4.2c0-1-.38-1.69-1.33-1.69-.73 0-1.17.49-1.36.97-.07.16-.09.38-.09.6v4.32h-3s.04-7 0-7h3v1c.4-.62 1.12-1.5 2.75-1.5 2 0 3.53 1.33 3.53 4.2v4.3z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="white">
                                <path d="M7.5 2C4.42 2 2 4.42 2 7.5v9C2 19.58 4.42 22 7.5 22h9c3.08 0 5.5-2.42 5.5-5.5v-9C22 4.42 19.58 2 16.5 2h-9zM12 7.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4zM18 7a1.2 1.2 0 1 1 0 2.4A1.2 1.2 0 0 1 18 7zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                            </svg>

                        </div>
                        <p>copyright@ all rights reserved 2025</p>
                    </Col>
                </Row>

            </Container>
        </footer>
    )
}