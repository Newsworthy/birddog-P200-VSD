import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class HighSensitivity extends Component {
  highSensModeHandler = () => {
    return (
      <>
        <Col xs={12}>
          <h6 className="categorySubTitle">High Sensitivity</h6>
        </Col>
        <Col xs={12}>
          {this.props.exp_camhighsens === "hson" ? <Button size="sm" variant="danger">Enabled</Button> : <Button size="sm" variant="success">Disabled</Button>}
        </Col>
      </>
    )
  }
  render() {
    return (
      <div>
        {this.props.connected === true ? <>
          <Col className="settingWindow">
            <Row>
              {this.highSensModeHandler()}
            </Row>
          </Col>
        </> : <></>}
      </div>
    );
  }
}

export default HighSensitivity;