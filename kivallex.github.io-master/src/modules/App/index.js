import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Glitch from '../../components/glitch';
import Navbar from '../../components/navbar';

import * as defs from '../../defs';

import styles from './styles.module.css';

class App extends React.Component {
  componentDidMount() {
    Glitch({ parent: 'canvas-wrapper' });
    window.draw = window.start;

    setTimeout(() => {
      window.draw = window.reset;
    }, defs.GLITCH_DURATION);
  }

  componentWillUnmount() {
    window.stop();
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={true}
          appear
          classNames="reveal"
          timeout={{ enter: defs.TRANSITION_DURATION, exit: 0 }}
        >
          <div className={styles.wrapper}>
            <div id="canvas-wrapper" className={styles.canvas} />
            <Navbar />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
