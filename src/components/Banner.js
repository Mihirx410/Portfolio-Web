import { Container, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import bannerImg from "../assets/img/header-img.svg";
import { useState, useEffect, useCallback } from "react";

export const Banner = () => {
  const [loop, setLoop] = useState(0);
  const [isdelete, setisDelete] = useState(false);
  const [text, settext] = useState("");
  const period = 3000;
  const [dalte, setdalte] = useState(50 - Math.random() * 100);
  const toRotate = [ "Web designer", "Web developer","MERN Developer"];

  const tick = useCallback(() => {
    let i = loop % toRotate.length;
    let fulltext = toRotate[i];
    let updatetext = isdelete
      ? fulltext.substring(0, text.length - 1)
      : fulltext.substring(0, text.length + 1);

    settext(updatetext);

    if (isdelete) {
      setdalte((prevdelta) => prevdelta / 2);
    }

    if (!isdelete && updatetext === fulltext) {
      setisDelete(true);
      setdalte(period);
    } else if (isdelete && updatetext === "") {
      setisDelete(false);
      setLoop((prevLoop) => prevLoop + 1);
      setdalte(500);
    }
  }, [isdelete, loop, text, toRotate, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, 500);

    return () => clearInterval(ticker);
  }, [tick, dalte]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="text-col">
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {"Hi, I'm a"} {text}
              {/* <span className="wrap"></span> */}
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
            consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit
                .</p>
            <button className="banner-button" onClick={() => console.log("Clicked!")}>
              Let’s Connect <ArrowRightCircle size={35} />
            </button>
          </Col>
          <Col xs={15} md={6} xl={5}  style={{ display: "flex", justifyContent: "flex-end" }}>
            <img src={bannerImg} height={400} width={700} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
