import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import LoginForm from '../../components/LoginForm/LoginForm';
import { Container, Col, Row } from '../../components/Grid';
 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from './actions';
import './Login.css';
import { StickyFooter } from '../../components/Footer';

import Bounce from 'react-reveal/Bounce';

class LoginPage extends Component {
  login = values => {
    // This calls the login action creator, passing the form values to it
    this.props.login(values);
  };
  render() {

    if (this.props.loggedIn.status) {
      return <Redirect to='/' />
    };

    return (
      <React.Fragment>
      <Container className="mt-5">
      <Row className="justify-content-center">
      <Col size="12 md-8">
      </Col>
      </Row>
        <Row className="justify-content-center">
        <Col size="12 md-6 lg-5">
        <Bounce top duration={2000}>
        <img className="img-fluid" src="/imgs/icons/studying.svg" alt="empty desk" />
        </Bounce>
        </Col>
          <Col size="12 md-6 lg-6" className="log-in">
          <h1 className="text-center mt-5 montserrat font-weight-bold">Welcome Back!</h1>
          <h2 className="text-center mt-2 montserrat">Let's get you on track</h2>
            <LoginForm onSubmit={this.login} errorMessage={renderError(this.props.loggedIn)} />
          </Col>
        </Row>
      </Container>
      <StickyFooter />
      </React.Fragment>
    );
  };
};

const renderError = (loggedIn) => {
  if (!loggedIn.status && loggedIn.error)
      return "Incorrect email or password.";
  else
    return "";
};

// LoginPage needs to be aware of the signedUp state
const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.loggedIn,
    signedUp: state.signedUp
  };
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    login
  }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
