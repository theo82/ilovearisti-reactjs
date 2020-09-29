import React from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderGalleryItem({ image }) {
  return (
    <Card>
      <Link to={`/gallery/${image.id}`}>
        <CardImg width='100%' src={image.image} alt={image.name} />
        {/* CardImg width="100%" src={dish.image} alt={dish.name} /> */}
        <CardImgOverlay>
          <CardTitle>{image.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Gallery = (props) => {
  const gallery = props.image_gallery.images.map((imagegallery) => {
    return (
      <div key={imagegallery.id} className='col-12 col-md-5 m-1'>
        <RenderGalleryItem image={imagegallery} />
      </div>
    );
  });

  if (props.image_gallery.isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  } else if (props.image_gallery.errMess) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h4>{props.image_gallery.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/home'>Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Gallery</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>Gallery</h3>
            <hr />
          </div>
        </div>
        <div className='row'>{gallery}</div>
      </div>
    );
  }
};
export default Gallery;
