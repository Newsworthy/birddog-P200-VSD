import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class Mirror extends Component {
  mirrorHandler = () => {
    return (
      <>
        <Col xs={12}>
          <h6 className="categorySubTitle">Mirror</h6>
        </Col>
        <Col xs={12}>
          {this.props.pic1_cammirror === "cmon" ? <Button size="sm" variant="danger">Enabled</Button> : <Button size="sm" variant="success">Disabled</Button>}
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
              {this.mirrorHandler()}
            </Row>
          </Col>
        </> : <></>}
      </div>
    );
  }
}

export default Mirror;