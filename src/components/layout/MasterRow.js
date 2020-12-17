import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class MasterRow extends Component {
  render() {
    return (
      <div>
        {this.props.connected === true ? <>
          <Row className="mainRow">
            <Col>
              <h4>Resolution: {this.props.av_ndivideo}</h4>
            </Col>
            <Col>
              <h4>NDI Quality: {this.props.av_videoq3g}Mbps</h4>
            </Col>
          </Row>
          <hr />
        </> : <>
          </>}
      </div>
    );
  }
}

export default MasterRow;