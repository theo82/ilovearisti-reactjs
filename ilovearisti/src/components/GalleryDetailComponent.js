import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderImage({ gallery }) {
  return (
    <div className='col-12 col-md-5 m-1'>
      <Card>
        <CardImg
          width='100%'
          src={baseUrl + gallery.image}
          alt={gallery.name}
        />
        <CardBody>
          <CardTitle>{gallery.name}</CardTitle>
          <CardText>{gallery.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

/*
 * Rendering the comments
 */
function RenderComments({ comments, postComment, imageId }) {
  // console.log(comments)
  if (comments != null) {
    let list = comments.map((comments) => {
      return (
        <li key={comments.id}>
          <div>
            <p>{comments.comment}</p>
            <p>
              --{comments.author},
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              }).format(new Date(Date.parse(comments.date)))}
            </p>
          </div>
        </li>
      );
    });

    return (
      <div className='col-12 col-md-5 m-1'>
        <h4>Comments</h4>
        <ul className='list-unstyled'>{list}</ul>
        <CommentForm imageId={imageId} postComment={postComment} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

const GalleryDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className='container'>
        <div className='row'>
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.selected_image != null) {
    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/gallery'>Gallery</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.selected_image.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>{props.selected_image.name}</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <RenderImage gallery={props.selected_image} />
          <RenderComments
            comments={props.comments}
            postComment={props.postComment}
            imageId={props.selected_image.id}
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    this.toggleModal();

    // console.log('Current State is: ' + JSON.stringify(values));
    // alert('Current State is: ' + JSON.stringify(values));
    this.props.postComment(
      this.props.imageId,
      values.rating,
      values.author,
      values.comment
    );
  }

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className='fa fa-edit fa-lg'></span>Submit Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className='form-group'>
                <Label for='rating' md={12}>
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select
                    model='.rating'
                    id='rating'
                    name='rating'
                    className='form-control'
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className='form-group'>
                <Label htmlFor='author' md={12}>
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model='.author'
                    id='author'
                    name='author'
                    placeholder='Author'
                    className='form-control'
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className='text-danger'
                    model='.author'
                    show='touched'
                    messages={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 charaters or less',
                    }}
                  />
                </Col>
              </Row>

              <Row className='form-group'>
                <Label htmlFor='feedback' md={12}>
                  Your feedback
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model='.comment'
                    id='comment'
                    name='comment'
                    resize='none'
                    rows='6'
                    className='form-control'
                    validators={{ required }}
                  />
                  <Errors
                    className='text-danger'
                    model='.comment'
                    show='touched'
                    messages={{ required: 'Required' }}
                  />
                </Col>
              </Row>

              <Button type='submit' value='submit' color='primary'>
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default GalleryDetail;
