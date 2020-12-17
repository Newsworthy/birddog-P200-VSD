import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

class GainLimit extends Component {
  maxGainHandler = () => {
    const maxGainArr = [10.7, 14.3, 17.8, 21.4, 25, 28.6, 32.1, 35.7, 39.3, 42.8, 46.4, 50]
    let gainLimit = '';
    if (this.props.exp_camgainlimit === undefined) {
      gainLimit = 0;
    } else {
      gainLimit = parseInt(this.props.exp_camgainlimit);      
    }

    return (
      <Form as={Col}>
        <Form.Group controlId="gainLimitRangeForm">
          <Form.Label><h4 className="categorySubTitle">Gain limit</h4><h5>{gainLimit < 4 ? <>Error</> : <>{maxGainArr[gainLimit - 4]}dB</>}</h5></Form.Label>
          <Form.Control type="range" min="4" max="15" value={gainLimit} onChange={this.props.handleChange}/>
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
                {this.maxGainHandler()}
              </Row>
            </Col>
          </> : <></>}
      </div>
    );
  }
}

export default GainLimit;