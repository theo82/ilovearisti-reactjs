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
import { baseUrl } from '../shared/baseUrl';

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  } else if (errMess) {
    return (
      <div className='container'>
        <div className='row'>
          {' '}
          <h4>{errMess}</h4>
        </div>
      </div>
    );
  } else
    return (
      <Card style={{ padding: 15 }}>
        <CardImg
          src={baseUrl + item.image}
          alt={item.name}
          className='my_image'
        />
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
        <RenderCard
          item={props.welcome}
          isLoading={props.welcomeLoading}
          errMess={props.welcomeErrMess}
        />
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
          <RenderCard
            item={props.river}
            isLoading={props.riverLoading}
            errMess={props.riverErrMess}
          />
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard
            item={props.vikos}
            isLoading={props.vikosLoading}
            errMess={props.vikosErrMEss}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
