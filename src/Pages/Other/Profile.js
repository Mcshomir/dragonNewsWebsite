import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../ContextUser/ContextUser';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName)
    const [photo, setPhoto] = useState(user.photoURL)
    const addressRef = useRef(null);
    const handleClick = (event) => {
        event.preventDefault()
        console.log(name)
        console.log(photo)
        console.log(addressRef.current.value)
    }

    const handleClickName = (event) => {
        setName(event.target.value);
    }
    const handleClickPhoto = event => {
        setPhoto(event.target.value);
    }


    return (
        <div>
            <Form onSubmit={handleClick}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your email</Form.Label>
                    <Form.Control defaultValue={user?.email} type="email" placeholder="email" readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control onChange={handleClickName} type="text" placeholder="Your name" defaultValue={name} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>photoURL</Form.Label>
                    <Form.Control onChange={handleClickPhoto} defaultValue={photo} type="text" placeholder="your photoURL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control ref={addressRef} type="text" placeholder="Your address" />
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Profile;