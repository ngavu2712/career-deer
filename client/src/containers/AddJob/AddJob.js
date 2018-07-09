import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import AddJobForm from '../../components/AddJobForm/AddJobForm';
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addjob, resetaddjob } from './actions';

class AddJob extends Component {
  addjob = values => {
    // This calls the addjob action creator, passing the form values to it
   this.props.addjob(values);
  }

  resetaddjob = () => this.props.resetaddjob();
  render() {
    if (this.props.addJob.status) {
      this.props.resetaddjob();
      return <Redirect to='/' />;
    };

    return (
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h3>Track a New Job</h3>
          </Col>
        </Row>
        <AddJobForm onSubmit={this.addjob} />
      </Container>
    );
  };
};

const mapStateToProps = (state,props) => {
  return { 
    addJob: state.addJob
  };
};

const mapActionsToProps = (dispatch,props) => {
  return bindActionCreators({
    addjob,
    resetaddjob
  }, dispatch);
};

export default connect(mapStateToProps,mapActionsToProps)(AddJob);
