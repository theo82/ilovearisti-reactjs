import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderHistory({ history }) {
  return (
    <div key={history.id}>
      <Card style={{ padding: 10, margin: 10 }}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-3 mt-3'>
              <CardImg
                style={{
                  width: 250,
                  left: 200,
                }}
                src={history.image}
                alt={history.name}
              />
            </div>
            <div className='col-12 col-md-9'>
              <CardBody>
                <CardText>{history.description}</CardText>
              </CardBody>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function History(props) {
  const villageHistory = props.history.map((history) => {
    return <RenderHistory history={history} />;
  });

  return (
    <div className='container'>
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/home'>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>History</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>History</h3>
          <hr />
        </div>
      </div>

      <div className='row row-content'>
        <div className='col-12'>
          <Media list>{villageHistory}</Media>
        </div>
      </div>
    </div>
  );
}

export default History;
