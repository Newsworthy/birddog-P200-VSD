import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class InfraRed extends Component {
  IRCutHandler = () => {
    return (
      <>
        <Col xs={12}>
          <h6 className="categorySubTitle">Infra-Red</h6>
        </Col>
        <Col xs={12}>
          {this.props.pic2_camircutfil === "circfon" ? <Button size="sm" variant="danger">Enabled</Button> : <Button size="sm" variant="success">Disabled</Button>}
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
              {this.IRCutHandler()}
            </Row>
          </Col>
        </> : <></>}
      </div>
    );
  }
}

export default InfraRed;