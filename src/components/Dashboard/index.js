import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'components/Logo';
import Sidebar from 'components/Dashboard/Sidebar';
import Content from 'components/Dashboard/Content';
import Navbar from 'components/Dashboard/Navbar';

import {
  DashboardContainer,
  DashboardContent,
  DashboardHeader,
} from 'components/Dashboard/styles';

import Visible from 'components/Page/Visible';

const Dashboard = ({ children }) => (
  <DashboardContainer>
    <DashboardHeader>
      <Logo />
      <Navbar />
    </DashboardHeader>
    <DashboardContent>
      <Visible visible={['lg', 'xl']}>
        <Sidebar />
      </Visible>
      <Content>
        {children}
      </Content>
    </DashboardContent>
  </DashboardContainer>
);

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dashboard;
