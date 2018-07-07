import React from 'react';
// Redux stuff
import { Field, reduxForm, reset } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Link } from 'react-router-dom';
// import { googleSignIn } from '../../utils/API';

 
const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )

let LoginForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>

        <div>
          <Field name="email" component={renderTextField} type="email" label="Email" />
        </div>

        <div>
          <Field name="password" component={renderTextField} type="password" label="Password" />
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>  
      {/* This is outside of the form to prevent handleSubmit from firing */}
      {/* <Link className="btn btn-primary btn-lg" to="/auth/google" role="button">Sign up with Google</Link> */}
      <a href='/auth/google'>Sign in With Google!</a>
    </React.Fragment>
  )
};

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login',
  onSubmitSuccess: (result, dispatch) => dispatch(reset('login'))
})(LoginForm);

// Inside this file, we wrapped our component inside the imported 'reduxForm' function
// We can think of reduxForm(), from redux-form, behaving similar to connect() from react-redux in
// terms of connecting a component to communicate with the store 
export default LoginForm;
