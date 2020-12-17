import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class Flip extends Component {
  flipHandler = () => {
    return (
      <>
        <Col xs={12}>
          <h6 className="categorySubTitle">Flip</h6>
        </Col>
        <Col xs={12}>
          {this.props.pic1_camflip === "cfon" ? <Button size="sm" variant="danger">Enabled</Button> : <Button size="sm" variant="success">Disabled</Button>}
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
              {this.flipHandler()}
            </Row>
          </Col>
        </> : <></>}
      </div>
    );
  }
}

export default Flip;