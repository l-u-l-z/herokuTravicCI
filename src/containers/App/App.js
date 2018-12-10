import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router';

const styles = require('./App.modules.scss');

@withRouter
export class App extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired
  };

  render() {
    const { route } = this.props;

    return (
      <div>
        <p className={styles.someStyle}>nothing here yet</p>
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

export default App;
