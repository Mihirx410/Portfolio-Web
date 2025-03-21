import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";  
import proImg1 from "../assets/img/project-img1.png";
import proImg2 from "../assets/img/project-img2.png";
import proImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Project = () => {
    const project = [
        { title: "Business startup", description: "Design & development", imgUrl: proImg1 },
        { title: "Business startup", description: "Design & development", imgUrl: proImg2 },
        { title: "Business startup", description: "Design & development", imgUrl: proImg3 },
        { title: "Business startup", description: "Design & development", imgUrl: proImg1 },
        { title: "Business startup", description: "Design & development", imgUrl: proImg1 },
    ];

    return (
          <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}> 
                  
                  <div className={"animate__animated animate__fadeIn"}>
                    <h2 className="project-h2">Projects</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <div className="project-img">
                      <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              project.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                      </Tab.Content>
                      </div>
                    </Tab.Container>
                  </div>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
};
