import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

class Gain extends Component {
  gainHandler = () => {
    const gainArr = [0, 3.6, 7.1, 10.7, 14.3, 17.8, 21.4, 25, 28.6, 32.1, 35.7, 39.3, 42.8, 46.4, 50]
    return (
      <Form as={Col}>
        <Form.Group controlId="gainRangeForm">
          <Form.Label><h4 className="categorySubTitle">Gain</h4> <h5>{gainArr[this.props.exp_camgain - 1]}dB</h5></Form.Label>
          <Form.Control type="range" min="1" max="15" value={this.props.exp_camgain} onChange={this.props.handleChange} />
        </Form.Group>
      </Form>
    )
  }
  render() {
    return (
      <div>
        {this.props.connected === true ? <>
          <Col className="cameraCategory">
            <Row>
              {this.gainHandler()}
            </Row>
          </Col>
        </> : <></>}
      </div>
    );
  }
}

export default Gain;