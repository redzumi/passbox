import React from 'react';
import { Route } from 'react-router';

import Authenticate from '../../components/pages/User/Authenticate';

const Home = () => <Route exact path="/" component={Authenticate} />;

export default Home;
