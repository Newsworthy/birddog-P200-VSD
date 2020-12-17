import React, { Component } from 'react';
import { Row, Col, Form, } from 'react-bootstrap';

class Exposure extends Component {
  exposureModeHandler = () => {
    let expModeList = {
      "FULL-AUTO": "Full Auto",
      "MANUAL": "Manual",
      "SHUTTER-PRI": "Shutter Priority",
      "IRIS-PRI": "Iris Priority",
      "BRIGHT": "Bright Mode",
    }
    return (
      <>
        <Form>
          <Form.Group as={Col} controlId="Camera_Exposure_Mode">
            <Form.Label><h6 className="categorySubTitle">Exposure</h6></Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder={expModeList[this.props.exp_camexpm]}
              readOnly>
            </Form.Control>
          </Form.Group>
        </Form>
      </>
    )
  }
  render() {
    return (
      <div>
        {this.props.connected === true ?
          <>
            <Col className="settingWindow">
              <Row>
                {this.exposureModeHandler()}
              </Row>
            </Col>
          </> : <></>}
      </div>
    );
  }
}

export default Exposure;