import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      'Username: ' +
        this.username.value +
        ' Password: ' +
        this.password.value +
        ' Remember: ' +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Navbar color='light' light className='bg-dark' expand='md'>
          <div className='container'>
            <NavbarToggler onClick={this.toggleNav} />

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/home'>
                    <span
                      style={{ color: '#fff' }}
                      className='fa fa-home fa-lg'
                    >
                      {' '}
                      Home
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/history'>
                    <span
                      style={{ color: '#fff' }}
                      className='fa fa-history fa-lg'
                    >
                      {' '}
                      History
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/gallery'>
                    <span
                      style={{ color: '#fff' }}
                      className='fa fa-picture-o fa-lg'
                    >
                      {' '}
                      Gallery
                    </span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='nav-link' to='/contactus'>
                    <span
                      style={{ color: '#fff' }}
                      className='fa fa-address-card fa-lg'
                    >
                      {' '}
                      Contact Us
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className='fa fa-sign-in fa-lg'></span> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron style={{ backgroundColor: '#5b9153' }}>
          <div className='container'>
            <div className='row row-header'>
              <div className='col-12 col-sm-6'>
                <h1>I love Aristi</h1>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor='username'>Username</Label>
                <Input
                  type='text'
                  id='username'
                  name='username'
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Username</Label>
                <Input
                  type='password'
                  id='password'
                  name='password'
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type='checkbox'
                    name='remember'
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <FormGroup>
                <Button type='submit' value='submit' color='primary'>
                  Login
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Header;
