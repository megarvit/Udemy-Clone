import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../css/Home.css'
import logoub from '../Images/logo-ub.svg'
import Courses from '../Components/Courses';
import Categories from '../Components/Categories';

const Home = () => {
    return (
        <div className='main-content'>
            <Container>
                <div className="component-jumbotron mb-5">
                    <div className="component-jumbotron-card">
                        <h2 className="component-jumbotron-card-title">New to Udemy? You are very lucky.</h2>
                        <p className="fs-6">Courses now starting from only 700Rs! Take advantage of the special offer for new students before it ends.
                        </p>
                    </div>
                </div>
            </Container >

            <Courses> </Courses>
            <Categories></Categories>

            <Container>
                <div className='component-presentation'>
                    <Row >
                        <Col>
                            <div className='card-image text-end'>
                                <Image className='' src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" width={400} height={400} alt='udemy-logo' />
                            </div>
                        </Col>
                        <Col  >
                            <div className='non-student-cta'>
                                <h2 className='non-student-cta-heading'>Become an instructor</h2>
                                <p className='non-student-cta-text'>
                                    Instructors from around the world have millions on Udemy
                                    provides education to students. We provide the tools and competencies you need to teach what you love.
                                </p>
                                <button className='btn-design-black link'>
                                Start training now
                                </button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <div className='non-student-cta ms-auto' >
                                <Image width={282} height={48} src={logoub} className='non-student-cta-image' />
                                <p className='non-student-cta-text'>
                                    Get unlimited access to 17,000+ popular Udemy courses for your team.
                                    Get training and improve your competencies in business, technology, design and more.
                                </p>
                                <button className='btn-design-black link'>
                                    Get Udemy business
                                </button>
                            </div>
                        </Col>
                        <Col>
                            <div className='card-image '>
                                <Image className='' src="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg" width={400} height={400} alt='udemy-logo' />
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col >
                            <div className='card-image text-end'>
                                <Image className='' src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg" width={400} height={400} alt='udemy-logo' />
                            </div>
                        </Col>
                        <Col >
                            <div className='non-student-cta'>
                                <h2 className='non-student-cta-heading'>Transform your life with education</h2>
                                <p className='non-student-cta-text'>
                                    Students around the world are starting new careers,
                                    They improve themselves in their fields and enrich their lives.
                                </p>
                                <button className='btn-design-black link'>
                                    Find out how
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div >
    )
}
export default Home