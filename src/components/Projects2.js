import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import MyLeftTopComponent from './myLeftTopComponent';
import MyRightTopComponent from './myRightTopComponent';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects2 = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>基于地址标签的终端身份认证</h2>
                <p>注释</p>
                {/* <Tab.Container id="projects-tabs" defaultActiveKey="second"> */}
                <Tab.Container id="projects-tabs">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">身份标识生成地址标签完成终端身份认证</Nav.Link>
                    </Nav.Item>
          
                    <Nav.Item>
                      <Nav.Link eventKey="second">基于分布式共识基础设施的跨域身份验证</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <MyLeftTopComponent></MyLeftTopComponent>
                    
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="second">
                    <MyRightTopComponent></MyRightTopComponent>
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
