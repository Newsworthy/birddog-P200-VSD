import React, { Component } from 'react';
import { Row, Col, Form, } from 'react-bootstrap';

class Iris extends Component {
  irisHandler = () => {
    const irisArr = ["Closed", "f/14", "f/11", "f/9.6", "f/8.0", "f/6.8", "f/5.6", "f/4.8", "f/4.0", "f/3.4", "f/2.8", "f/2.4", "f/2.0", "f/1.6"];
    return (
      <Form as={Col}>
        <Form.Group controlId="apertureRange">
          <Form.Label><h4 className="categorySubTitle">Iris </h4><h5>{irisArr[this.props.exp_camiris - 4]}</h5></Form.Label>
          <Form.Control type="range" min="4" max="17" value={this.props.exp_camiris} onChange={this.props.handleChange} />
        </Form.Group>
      </Form>
    )
  }
  render() {
    return (
      <div>
        {this.props.connected === true ?
          <>
            <Col className="cameraCategory">
              <Row>
                {this.irisHandler()}
              </Row>
            </Col>
          </> : <></>}
      </div>
    );
  }
}

export default Iris;