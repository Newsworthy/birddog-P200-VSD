import React, { Component } from 'react';
import { Row, Col, Form, } from 'react-bootstrap';


class ShutterSpeed extends Component {

  shutterSpeedHandler = () => {
    let region = this.props.region;
    const palShutterSpeed = ["1/1", "1/2", "1/3", "1/6", "1/12", "1/25", "1/50", "1/75", "1/100", "1/120", "1/150", "1/215", "1/300", "1/425", "1/600", "1/1000", "1/1250", "1/1750", "1/2500", "1/3500", "1/6000", "1/10000"]
    const ntscShutterSpeed = ["1/1", "1/2", "1/4", "1/8", "1/15", "1/30", "1/60", "1/90", "1/100", "1/125", "1/180", "1/250", "1/350", "1/500", "1/725", "1/1000", "1/1500", "1/2000", "1/3000", "1/4000", "1/6000", "1/10000"]
    if (region === "50") {
      return (
        <Form as={Col}>
          <Form.Group controlId="shutterRangePAL">
            <Form.Label><h4 className="categorySubTitle">Shutter Speed </h4><h5>{palShutterSpeed[this.props.exp_camspeed]}</h5></Form.Label>
            <Form.Control type="range" min="0" max="22" value={this.props.exp_camspeed} onChange={this.props.handleChange}/>
          </Form.Group>
        </Form>
      )
    } else {
      return (
        <Form as={Col}>
          <Form.Group controlId="shutterRangeNTSC">
            <Form.Label><h4 className="categorySubTitle">Shutter Speed </h4><h5>{ntscShutterSpeed[this.props.exp_camspeed]}</h5></Form.Label>
            <Form.Control type="range" min="0" max="22" value={this.props.exp_camspeed} onChange={this.props.handleChange}/>
          </Form.Group>
        </Form>)
    };
  }

  render() {
    return (
      <div>
        {this.props.connected === true ?
          <>
            <Col className="cameraCategory">
              <Row>
                {this.shutterSpeedHandler()}
              </Row>
            </Col>
          </>
          :
          <>
          </>
        }
      </div>
    );
  }
}

export default ShutterSpeed;