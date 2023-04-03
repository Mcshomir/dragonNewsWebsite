import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();

    const { title, image_url, details, category_id } = news;
    return (
        <Card >
            <img src={image_url} alt="" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>  <Button variant="primary">Go all news </Button></Link>
            </Card.Body>
        </Card>

    );
};

export default News;