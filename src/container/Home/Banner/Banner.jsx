import { ThreeDotsWave } from '../../../utilities';
import React from 'react';
import './Banner.scss';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
} from 'reactstrap';


const Banner = (props) => {
    const { imgURL, title, explanation } = props;

    return (
        <Card
            body
            color="info"
            outline
            inverse
            className='main-card'
            style={{
                width: '44rem'
            }}
        >
            {
                !imgURL ?
                    <ThreeDotsWave /> :
                    <img alt="Sample" src={imgURL} />
            }
            <CardBody>

                <CardTitle tag="h5" style={{ color: 'black' }}>
                    {title}
                </CardTitle>

                {/*
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {title}
                </CardSubtitle>
                */}

                <CardText className='body-text'>
                    {explanation}
                </CardText>

                <Button>
                    Vote
                </Button>

            </CardBody>

        </Card>
    )
}

export default Banner