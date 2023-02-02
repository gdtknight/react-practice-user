import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card'
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm} />
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = props => {
  return (
    <React.Fragment>
      {/* react-dom library : react logic 을 web browser로 가져오기 위해 react를 사용함. */}
      {/* react는 web, native 환경 상관없이 구현되어 있고, react-dom 은 react를 web browser, dom 에 표현되도록 포팅하는 역할? */}

      {/*
            아래 구문은 index.js 의 이 구문과 동일한 역할을 한다.

            const root = ReactDOM.createRoot( 
              document.getElementById('root')
            ); 
      */}

      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
