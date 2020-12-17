import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class BlackWhite extends Component {
  bAndWHandler = () => {
    return (
      <>
        <Col xs={12}>
          <h6 className="categorySubTitle">Black & White</h6>
        </Col>
        <Col xs={12}>
          {this.props.pic1_cameffect === "efbnw" ? <Button size="sm" variant="danger">Enabled</Button> : <Button size="sm" variant="success">Disabled</Button>}
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
              {this.bAndWHandler()}
            </Row>
          </Col>
        </> : <></>}
      </div>
    );
  }
}

export default BlackWhite;