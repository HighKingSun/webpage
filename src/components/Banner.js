import { useState, useEffect } from "react";
import { Container, Row, Col,Tab, Nav } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Card,Button,Flex,Image,Layout } from 'antd';
import MyMiddleContent from "./myMiddleContent";
const {  Content } = Layout;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "标题" ];
  const period = 2000;
  const contentStyle = {
    textAlign: 'center',
    minHeight: 400,
    lineHeight: '120px',
    color: '#fff',
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        
        <Row className="aligh-items-center">
          <Col size={16}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">非协作网络分布式共识基础设施</span>
                {/* <h1>{`起个`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "标题"]'><span className="wrap">{text}</span></span></h1> */}
                  <p>这里可以写备注</p>
                  {/* <button onClick={() => console.log('connect')}>按钮1 <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col size={16}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={myImage} alt="Header Img"/>
                </div>}
            </TrackVisibility> */}
            <Content style={contentStyle}>
            <MyMiddleContent></MyMiddleContent>
            </Content>
            
          </Col>
          <Col size={1}>
            <Button type="primary" circle style={{color: 'white',backgroundColor: 'rgb(100, 3, 8)'}}>1<ArrowRightCircle size={25} /></Button>
            <Button type="primary" circle style={{color: 'white',backgroundColor: 'rgb(100, 3, 8)'}}>2<ArrowRightCircle size={25} /></Button>
            <Button type="primary" circle style={{color: 'white',backgroundColor: 'rgb(100, 3, 8)'}}>3<ArrowRightCircle size={25} /></Button>
            <Button type="primary" circle style={{color: 'white',backgroundColor: 'rgb(100, 3, 8)'}}>4<ArrowRightCircle size={25} /></Button>
            
          </Col>

        </Row>
      </Container>
      
    </section>
    
  )
}
