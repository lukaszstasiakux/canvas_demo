import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';
import {PublicAppWrapper} from '../theme/Layout';
import styled from "styled-components";



export const LoginPage = ({startLogin}) => (
  <PublicAppWrapper>
    <div className="box-layout__box">
      <h1 className="box-layout__title">BoilerPlate</h1>
      <p> tag line for app</p>
      <button className="button" onClick={startLogin}>Login</button>
    </div>
    
  </PublicAppWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: ()=> dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);
