import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as Resume } from '../../assets/file-text.svg';
import { ReactComponent as Email } from '../../assets/mail.svg';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';

import * as defs from '../../defs';

import styles from './styles.module.css';

const About = () => {
  return (
    <div className="transition-group">
      <CSSTransition
        in={true}
        appear
        classNames="reveal"
        timeout={{ enter: defs.TRANSITION_DURATION, exit: 0 }}
      >
        <div className={classNames(styles.wrapper, 'container')}>
          <Link to="/" className={classNames(styles.arrow_left_icon, 'hover')}>
            <ArrowLeft className={classNames(styles.icon, styles.arrow_left)} />
          </Link>
          <h2 className={styles.header}>About Me</h2>
          <p className={styles.paragraph}>
            My name is Kenneth Suh, and I am a programmer and Web Developer.
            I am a quick learner, who is looking to improve his skills.
            I would love to gain more experience in the field of software engineering in order to continue learning.
            Reach out to me anytime.
          </p>
          <div className={styles.icon_wrapper}>
            <a
              className="hover"
              href="/KennethSuh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <Resume className={styles.icon} />
            </a>
            <a
              className="hover"
              href="/mailto:kenneth.y.suh@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <Email className={styles.icon} />
            </a>
            <a
              className="hover"
              href="https://github.com/kivallex"
              target="_blank"
              rel="noopener noreferrer">
              <GitHub className={classNames(styles.icon, styles.github)} />
            </a>
            <a
              className="hover"
              href="https://linkedin.com/in/kenneth-suh"
              target="_blank"
              rel="noopener noreferrer">
              <LinkedIn className={classNames(styles.icon, styles.linkedin)} />
            </a>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default About;
