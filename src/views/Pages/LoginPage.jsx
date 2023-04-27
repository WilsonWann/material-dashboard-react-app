import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// import axios from "axios";

// @material-ui/core components
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Check from '@material-ui/icons/Check';
import Email from '@material-ui/icons/Email';

// core components
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';

import loginPageStyle from 'assets/jss/material-dashboard-react/views/loginPageStyle.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_USER } from './../../actions/GetUserAction';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
  const { classes } = props;

  const [checked, setChecked] = useState([]);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const errors = {};
  const navigate = useNavigate()
  const dispatch = new useDispatch();
  const returnMessage =
  '' + useSelector((state) => state.getUserReducer.errorMessage);
  useEffect(() => {
    if (returnMessage.indexOf('login successfully') > -1) {
      navigate('/admin/user')
    }
  }, [returnMessage, checked]);

  // TODO: add rememberMe
  const login = (e) => {
    e.preventDefault();

    const fields = ['username', 'password'];
    const formElements = e.target.elements;

    const formValues = fields
      .map((field) => ({
        [field]: formElements.namedItem(field).value,
      }))
      .reduce((current, next) => ({ ...current, ...next }));

    dispatch({
      type: LOGIN_USER,
      payload: {
        username: formValues.username,
        // username,
        password: formValues.password,
      },
    });
  };
  const onInputChange = (e) => {
    setPassword(e.target.value);
  };
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className={classes.container}>
      {/* <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <h4 className={classes.textCenter} style={{ marginTop: 0 }}>
            Log in to see how you can speed up your web development with out of
            the box CRUD for #User Management and more.{" "}
          </h4>
        </GridItem>
      </GridContainer> */}
      <GridContainer justify='center'>
        <GridItem xs={12} sm={6} md={4}>
          <form onSubmit={login}>
            {/* <Card className={classes[this.state.cardAnimaton]}> */}
            <Card className={classes.cardAnimaton}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color='primary'
              >
                <h4 className={classes.cardTitle}>Log in</h4>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText='Email...'
                  id='email'
                  error={errors.username || errors.invalidEmailOrPassword}
                  formControlProps={{
                    fullWidth: true,
                    className: classes.formControlClassName,
                  }}
                  inputProps={{
                    required: true,
                    name: 'username',
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                  }}
                />
                <CustomInput
                  labelText='Password'
                  id='password'
                  error={errors.password || errors.invalidEmailOrPassword}
                  formControlProps={{
                    fullWidth: true,
                    className: classes.formControlClassName,
                  }}
                  onInputChange={onInputChange}
                  inputProps={{
                    type: showPassword ? null : 'password',
                    required: true,
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Icon className={classes.inputAdornmentIcon}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControlLabel
                  classes={{
                    root:
                      classes.checkboxLabelControl +
                      ' ' +
                      classes.checkboxLabelControlClassName,
                    label: classes.checkboxLabel,
                  }}
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(1)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  }
                  label={<span>Remember me</span>}
                />
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button type='submit' color='primary' simple size='lg' block>
                  Let's Go
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  errors: PropTypes.object,
};

export default withStyles(loginPageStyle)(LoginPage);
