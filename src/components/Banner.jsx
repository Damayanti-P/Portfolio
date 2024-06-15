import React from 'react'
import {Container,Row,Col} from "react-bootstrap";
import headerIcon from "../assets/img/hero-image.png"
import {ArrowRight, ArrowRightCircle, ArrowRightCircleFill} from "react-bootstrap-icons"
const Banner = () => {
  return (
    <section className='banner' id='ome'>
        <Container>
            <Row>
                <Col xs={12} md={6} xl={7}>
                  <span className='tagline'>Welcome to my portfolio</span>
                  <h1>{`Hi! I am Damayanti `}<span className='wrap'>Web  Developer</span></h1>
                  <p>a recent Computer Science graduate with a strong foundation in Java and Spring. I've developed projects like a Content Management System and interactive games. Currently pursuing React and Java Development certification, I am eager to apply my skills and knowledge in an Java Developer role</p>
                  <button onClick={()=>console.log('connect')}>Let's Connect<ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerIcon} alt='Header Img'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner
