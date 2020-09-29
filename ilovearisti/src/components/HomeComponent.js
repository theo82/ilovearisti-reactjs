import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Media,
} from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <Card style={{ padding: 15 }}>
        <CardImg src={item.image} alt={item.name} className='my_image' />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
}

function Home(props) {
  return (
    <div className='container'>
      <div className='col-12 col-md m-1'>
        <RenderCard item={props.welcome} />
      </div>
      <div className='row align-items-start'>
        <div className='col-12 col-md m-1'>
          <RenderCard
            item={props.gallery}
            isLoading={props.imagesLoading}
            errMess={props.imagesErrMess}
          />
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.river} />
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.vikos} />
        </div>
      </div>
    </div>
  );
}

export default Home;
