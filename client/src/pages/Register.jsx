// imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

// internal imports
import { Logo, FormRow, Alert } from '../exports/components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../exports/context';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const { user, isLoading, showAlert, displayAlert, registerUser } = useAppContext();
  const [values, setValues] = React.useState(initialState);


  React.useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert('Please fill out all fields', 'danger');
      return;
    }
    const currentUser = {
      name,
      email,
      password,
    };

    if (isMember) {
      console.log('Alredy a member');
    } else {
      registerUser(currentUser);
    }
    console.log(values);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onFormSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            labelText="Name"
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          labelText="Email"
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText="Password"
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
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
