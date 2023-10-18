import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Categories = () => {
    return (
        <div>
            <Container>
                <div className='component-popular-categories'>
                    <h4 className='fs-4 fw-bold mt-4 mb-3'>
                    Most Popular Categories
                    </h4>
                    <section>
                        <Col>
                            <Row md={4}>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                    Design
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                    Software development
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                    Marketing
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                    IT and Software
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                    Self-improvement
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                    Business
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                    Photography
                                    </span>
                                </Card>
                                <Card >
                                    <Card.Img id='category-image' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                                    <span className='category-text'>
                                        Music
                                    </span>
                                </Card>
                            </Row>
                        </Col>
                    </section>
                </div>
            </Container>

            <div className='component-featured-topics-by-category bg-light mb-5'>
                <Container className='p-5'>
                    <h2 className='fs-4 mt-3 fw-bold'>Featured topics by category</h2>
                    <div className='categories'>

                        <div className='category'>
                            <h5 className='fw-bold'>link</h5>
                            <ul className='list-unstyled'>
                                <li className='category-list-item'> <a className='category-link' href='/#'>Python</a> <span className='student-count'> 36.030.827 </span>  </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>link </a> <span className='student-count'> 36.030.827 </span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>link </a> <span className='student-count'> 36.030.827 </span> </li>
                            </ul>
                        </div>

                        <div className='category'>
                            <h5 className='fw-bold'>link</h5>
                            <ul className='list-unstyled'>
                                <li className='category-list-item'> <a className='category-link' href='/#'>link </a> <span className='student-count'> 36.030.827 </span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>SQL </a> <span className='student-count'> 36.030.827 </span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>PMP </a> <span className='student-count'> 36.030.827 </span> </li>
                            </ul>
                        </div>

                        <div className='category'>
                            <h5 className='fw-bold'>link</h5>
                            <ul className='list-unstyled'>
                                <li className='category-list-item'> <a className='category-link' href='/#'>AWS certfication </a> <span className='student-count'> 36.030.827</span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>link </a> <span className='student-count'> 36.030.827</span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'> link</a> <span className='student-count'> 36.030.827</span> </li>
                            </ul>
                        </div>

                        <div className='category'>
                            <h5 className='fw-bold'>link</h5>
                            <ul className='list-unstyled'>
                                <li className='category-list-item'> <a className='category-link' href='/#'> Photoshop</a> <span className='student-count'> 36.030.827</span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>link </a> <span className='student-count'> 36.030.827</span> </li>
                                <li className='category-list-item'> <a className='category-link' href='/#'>link </a> <span className='student-count'> 36.030.827</span> </li>
                            </ul>
                        </div>

                    </div>
                    <button className='btn-design-white'>
                        Explore More Topics
                    </button>
                </Container>
            </div>
        </div>
    )
}

export default Categories