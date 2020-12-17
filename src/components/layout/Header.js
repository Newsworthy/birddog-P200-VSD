import React, { Component } from 'react'
import { Row, Col, Form, Button, Alert, Spinner, InputGroup } from 'react-bootstrap';

class Header extends Component {
  
  render() {
    return (
      <div>
        <Row style={{ height: "150px" }} className="App-header d-flex align-items-center">
          <Col xs={4}>
            BirdDog P200<br />Vital Settings Display
            </Col>
          <Col xs={4} className="IPAddressArea">
            <Form onSubmit={this.props.connectP200}>
              <Form.Group as={Col}>
                <Row>
                  <InputGroup className="mb-3" size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="prepend">http://</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      name="url"
                      id="url"
                      value={this.props.url}
                      onChange={this.props.handleChange}
                      placeholder="Enter IP Address"
                      disabled={this.props.connected === true ? true : false}
                    />
                  </InputGroup>
                </Row>
                <Row>
                  <Col>
                    {this.props.connected === false ? <Button variant="success" type="submit">Connect</Button> : <Button variant="danger" onClick={this.props.disconnect} >Disconnect</Button>}
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={4}>
            {this.props.initialLoad === true ? <><Alert variant="info"><Spinner animation="border" variant="info"></Spinner> Loading</Alert></> : <>{this.props.connected === false ? <><Alert variant="danger"><Spinner animation="grow" variant="danger" size="sm"></Spinner><h6 style={{ color: "red" }}>No Connection<br />{this.props.error ? <span>{this.props.error}</span> : <span></span>}</h6></Alert></> : <h6>Camera Detected<br /><Spinner animation="grow" variant="success" size="sm" /> Connected to http://{this.props.url}</h6>}</>
            }
          </Col>
        </Row>
      </div>
    )
  }
}
export default Header