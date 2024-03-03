import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import MyLeftMiddleComponent from "./myLeftMiddleComponent";
import MyRightMiddleComponent from "./myRightMiddleComponent";
import MyMiddleContent from "./myMiddleContent";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>路径和源地址真实性支撑</h2>
                <p>注释</p>
                {/* <Tab.Container id="projects-tabs" defaultActiveKey="second"> */}
                <Tab.Container id="projects-tabs">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">路径验证和追溯</Nav.Link>
                    </Nav.Item>
          
                    <Nav.Item>
                      <Nav.Link eventKey="third">源地址验证</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <MyLeftMiddleComponent></MyLeftMiddleComponent>
                    
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="third">
                      <MyRightMiddleComponent></MyRightMiddleComponent>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
