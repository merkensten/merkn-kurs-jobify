import React from 'react';
import { Logo, FormRow, Alert } from '../exports/components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = React.useState(initialState);
  // global state and useNavigate

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (event) => {
    console.log(event.target);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onFormSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="Name"
            value={values.name}
            handleChange={handleChange}
            labelText="Name"
          />
        )}

        <FormRow
          type="email"
          name="Email"
          value={values.email}
          handleChange={handleChange}
          labelText="Email"
        />
        <FormRow
          type="password"
          name="Password"
          value={values.password}
          handleChange={handleChange}
          labelText="Password"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
