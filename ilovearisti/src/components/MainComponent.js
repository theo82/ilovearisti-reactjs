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
import { addComment, fetchImages } from '../redux/ActionCreators';

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
  addComment: (imageId, rating, author, comment) =>
    dispatch(addComment(imageId, rating, author, comment)),
  fetchImages: () => {
    dispatch(fetchImages());
  },
});
class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchImages();
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
          comments={this.props.comments.filter(
            (comment) => comment.imageId === parseInt(match.params.imageId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };

    const HomePage = () => {
      return (
        <Home
          gallery={
            this.props.image_gallery.images.filter((image) => image.featured)[0]
          }
          imagesLoading={this.props.image_gallery.isLoading}
          imagesErrMess={this.props.image_gallery.errMess}
          welcome={this.props.welcome.filter((welcome) => welcome.featured)[0]}
          river={this.props.river.filter((river) => river.featured)[0]}
          vikos={this.props.vikos.filter((vikos) => vikos.featured)[0]}
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
          <Route exact path='/contactus' component={Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
