import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import '../css/Footer.css'
import logo from '../Images/logo-udemy-inverted.svg'

const LFooter = () => {
    return (
        <footer>
            <Col className='p-5'>
                <Row className='links-and-language-selector'>
                    <ul className="links list-unstyled">
                        <li className='list-item'>
                            <a href='/#'>
                                Udemy Business
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                link 
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                link 
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                            link
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                            link
                            </a>
                        </li>
                    </ul>

                    <ul className="links list-unstyled">
                        <li className='list-item'>
                            <a href='/#'>
                            link
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                                Blog
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                            link
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                            link
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                            link
                            </a>
                        </li>
                    </ul>

                    <ul className="links list-unstyled">
                        <li className='list-item'>
                            <a href='/#'>
                            link
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                            link
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                            link
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                            link
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='/#'>
                            link
                            </a>
                        </li>
                    </ul>
                </Row>
                <div className='logo d-flex justify-content-between mt-5'>
                    <div className='image'>
                        <a href='/#'>
                            <Image width={91} src={logo} />
                        </a>
                    </div>
                    <div className='copyright'>
                        © 2023 Udemy, Inc
                    </div>
                </div>
            </Col>
        </footer>
    )
}

export default LFooter