import { GoogleAuthProvider } from 'firebase/auth';
import { React, useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaInstagram, FaTwitch } from 'react-icons/fa';
import { AuthContext } from '../../ContextUser/ContextUser';

import BrandCarousel from '../BrandCarousel/BrandCarousel';
const RightSideNav = () => {
    const { loginProvider } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const loginClick = () => {
        loginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => { console.log(error) })
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={loginClick} className='mb-2' variant='outline-primary'>
                    <FaGoogle />
                    Login with Google ! </Button>
                <Button variant='outline-dark'>
                    <FaGithub />
                    Login with Github !</Button>

            </ButtonGroup>

            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook />Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp />Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram />Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch />Twiter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;