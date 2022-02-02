import React from 'react';
import './home-nav.scss';
import { Navbar, Container } from 'react-bootstrap'

const HomeNav = () => {
    return (
        <>
            <div className="HomeNav">
                <Navbar bg="dark" variant="dark" /*</div>style={{ opacity: '0%' }}*/ >
                    <Container>
                        <Navbar.Brand href="/">
                            portfolio
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default HomeNav;
