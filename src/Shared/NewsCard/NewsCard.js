import React from 'react';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {


    const { author, details, image_url, title, total_view, _id, rating } = news;
    return (
        <div>
            <Card className=" mb-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                            className='me-4'
                            src={author.img}
                            style={{ height: "60px", margin: 'left' }}
                            roundedCircle
                        ></Image>
                        <div >
                            <p className='mb-0'>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2' />
                        <FaShareAlt />

                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length > 250. ?
                            <p>{details.slice(0, 250) + '...'}   <Link to={`/news/${_id}`}>reed more</Link></p>
                            :
                            <p>{details}</p>
                        }
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between ">
                    <div>
                        <FaStar className='text-warning me-2' />
                        <span>{rating.number}</span>

                    </div>
                    <div>
                        <FaEye className='text-warning me-2' />
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;

