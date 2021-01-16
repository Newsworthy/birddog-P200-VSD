import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

class WhiteBalance extends Component {

  wbHandler = () => {
    let wbList = {
      "AUTO": "Auto",
      "INDOOR": "Indoor (Tungsten)",
      "OUTDOOR": "Outdoor (Daylight)",
      "ONEPUSH": "One Push WB",
      "ATW": "Auto Trace WB",
      "MANUAL": "Manual",
      "OUTDOOR-AUTO": "Outdoor Auto",
      "SLV-AUTO": "Sodium Vapour Lamp Auto",
      "SLV": "Sodium Vapour Lamp Manual",
      "SLV-OUTDOOR-AUTO": "Sodium Vapour Lamp Outdoor",
    }
    let redGain = this.props.wb_camredgain;
    let blueGain = this.props.wb_cambluegain;
    return (
      <>
        <Form>
          <Form.Group as={Col} controlId="Camera_WB_Mode">
            <Form.Label>
              <h4 className="categorySubTitle">WB Mode</h4>
            </Form.Label>
            <Form.Control
              placeholder={wbList[this.props.wb_camwb]}
              readOnly
            />
          </Form.Group>
          <Row>
            <Form.Group as={Col} controlId="redGainLimitRangeForm">
            {this.props.wb_camwb === "MANUAL" ? <h6 className="categorySubTitle">Red Gain:<br /> {redGain}</h6> : <></>}
            </Form.Group>
            <Form.Group as={Col} controlId="blueGainLimitRangeForm">
            {this.props.wb_camwb === "MANUAL" ? <h6 className="categorySubTitle">Blue Gain:<br /> {blueGain}</h6> : <></>}
            </Form.Group>
          </Row>
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
                {this.wbHandler()}
              </Row>
            </Col>
          </> : <></>}
      </div>
    );
  }
}

export default WhiteBalance;