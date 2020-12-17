import React, { Component } from 'react';
import { Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap';

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
      <div>
        <label htmlFor="WB-Mode"><h4 className="categorySubTitle">WB Mode</h4></label>
        <InputGroup as={Col} className="mb-3">
          <FormControl
            size="sm"
            id="WB-Mode"
            placeholder={wbList[this.props.wb_camwb]}
            readOnly
          />
        </InputGroup>
        {this.props.wb_camwb === "MANUAL" ?
          <>
            <Form>
              <Form.Group as={Col} controlId="redGainLimitRangeForm">
                <Form.Label><h6 className="categorySubTitle">Red Gain</h6><h6>{redGain}</h6></Form.Label>
                <Form.Control type="range" min="0" max="255" value={redGain} onChange={this.props.handleChange} />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group as={Col} controlId="blueGainLimitRangeForm">
                <Form.Label><h6 className="categorySubTitle">Blue Gain</h6><h6>{blueGain}</h6></Form.Label>
                <Form.Control type="range" min="0" max="255" value={blueGain} onChange={this.props.handleChange}/>
              </Form.Group>
            </Form>
          </> : <></>}
      </div>
    )
  }

  render() {
    return (
      <>
        {this.props.connected === true ? <>
          <Col className="cameraCategory">
            <Row>
              {this.wbHandler()}
            </Row>
            <Row>
              {/* Colour temp - {this.props.wb.wb_camcolortemp} - Unknown */}
            </Row>
          </Col>
        </> : <></>
        }
      </>
    );
  }
}

export default WhiteBalance;