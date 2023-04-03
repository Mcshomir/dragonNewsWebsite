import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../ContextUser/ContextUser';

const Register = () => {
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false)
    const { register, updateProfileClick, eamilVerifyClick } = useContext(AuthContext);


    const click = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);
        register(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                setError('');
                form.reset();
                manageProfileclick(name, photoURL);
                verifyEmail();


                toast.success('please verify your email address !')

            })
            .catch(error => {
                console.error("error", error)
                setError(error.message);
            })

    }
    const manageProfileclick = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateProfileClick(profile)
            .then(() => { })
            .catch(error => { console.log(error) })
    }
    const verifyEmail = () => {
        eamilVerifyClick()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const btnClick = event => {
        setAccept(event.target.checked)
    }
    return (
        <div>
            <Form onSubmit={click}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="photoURL" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={btnClick}
                        label={<>Accept <Link to='/trams'>Ttrams and condition !</Link></>}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accept}>
                    Submit
                </Button>
                <Form.Text className='text-danger'>{error}</Form.Text>
            </Form>
        </div>
    );
};

export default Register;