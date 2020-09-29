import React, { Component } from 'react';
import Home from './HomeComponent';
import GalleryDetail from '../components/GalleryDetailComponent';
import Gallery from './GalleryComponent';
import Header from './HeaderComponent';
import History from './HistoryComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import {
  postComment,
  fetchImages,
  fetchComments,
  fetchWelcome,
  fetchRiver,
  fetchVikos,
  postFeedback,
} from '../redux/ActionCreators';

const mapStateToProps = (state) => {
  return {
    image_gallery: state.image_gallery,
    comments: state.comments,
    welcome: state.welcome,
    vikos: state.vikos,
    river: state.river,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (imageId, rating, author, comment) =>
    dispatch(postComment(imageId, rating, author, comment)),
  fetchImages: () => {
    dispatch(fetchImages());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset('feedback'));
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchWelcome: () => dispatch(fetchWelcome()),
  fetchRiver: () => dispatch(fetchRiver()),
  fetchVikos: () => dispatch(fetchVikos()),
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
});
class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchImages();
    this.props.fetchRiver();
    this.props.fetchVikos();
    this.props.fetchComments();
    this.props.fetchWelcome();
  }
  render() {
    const ImageWithId = ({ match }) => {
      return (
        <GalleryDetail
          selected_image={
            this.props.image_gallery.images.filter(
              (ig) => ig.id === parseInt(match.params.imageId, 10)
            )[0]
          }
          isLoading={this.props.image_gallery.isLoading}
          errMess={this.props.image_gallery.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.imageId === parseInt(match.params.imageId, 10)
          )}
          postComment={this.props.postComment}
        />
      );
    };

    const HomePage = () => {
      return (
        <Home
          // Gallery
          gallery={
            this.props.image_gallery.images.filter((image) => image.featured)[0]
          }
          imagesLoading={this.props.image_gallery.isLoading}
          imagesErrMess={this.props.image_gallery.errMess}
          // Welcome
          welcome={this.props.welcome.welcome.filter((w) => w.featured)[0]}
          welcomeLoading={this.props.welcome.isLoading}
          welcomeErrMess={this.props.welcome.errMess}
          // River
          river={
            this.props.river.voidomatis_river.filter(
              (river) => river.featured
            )[0]
          }
          riverLoading={this.props.river.isLoading}
          riverErrMess={this.props.river.errMess}
          // Vikos
          vikos={
            this.props.vikos.vikos_canyon.filter((vikos) => vikos.featured)[0]
          }
          vikosLoading={this.props.vikos.isLoading}
          vikosErrMess={this.props.vikos.errMess}
        />
      );
    };

    return (
      <div>
        {/* <Navbar style={{ backgroundColor: '#378248' }}>
          <div className='container'>
            <NavbarBrand style={{ color: '#fff' }} href='/'>
              I love Aristi
            </NavbarBrand>
          </div>
        </Navbar> */}
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route
            path='/history'
            component={() => <History history={this.props.welcome} />}
          />
          */
          <Route
            exact
            path='/gallery'
            component={() => (
              <Gallery image_gallery={this.props.image_gallery} />
            )}
          />
          <Route path='/gallery/:imageId' component={ImageWithId} />
          <Route
            exact
            path='/contactus'
            component={() => (
              <Contact
                resetFeedbackForm={this.props.resetFeedbackForm}
                postFeedback={this.props.postFeedback}
              />
            )}
          />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
