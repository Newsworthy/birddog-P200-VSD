import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, } from 'react-bootstrap';

class TEMPLATE extends Component {
  render() {
    return (
      <div>
        {this.props.connected === true ? <></> : <></>}
      </div>
    );
  }
}

export default TEMPLATE;