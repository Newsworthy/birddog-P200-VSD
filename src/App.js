import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './App.css';
import Footer from './components/layout/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      av: {},
      wb: {},
      exp: {},
      pic1: {},
      pic2: {},
      url: '',
      port: '8080',
      sectors: [
        "recall", "birddogavsetup", "birddogwbsetup", "birddogexpsetup", "birddogpic1setup", "birddogpic2setup",
      ],
      connected: false,
      loading: false,
      error: '',
      refreshSpeed: 1000,
      region: '',
      tempurl: '',
      initialLoad: false,
    }
  }

  loadAVData = async () => {
    const sector = 'birddogavsetup';
    this.setState({
      loading: true,
    });
    try {
      const result = await axios
        .get(this.state.url + ':' + this.state.port + '/' + sector)
      this.setState({
        av: result.data,
        loading: false,
        error: false,
        initialLoad: false,
      });
    } catch (error) {
      console.error("error: ", error);
      this.setState({
        error: `${error}`,
        loading: false,
        initialLoad: false,
        connected: false,
      });
    }
  };

  loadWBData = async () => {
    const sector = 'birddogwbsetup';
    this.setState({
      loading: true,
    });
    try {
      const result = await axios
        .get(this.state.url + ':' + this.state.port + '/' + sector)
      this.setState({
        wb: result.data,
        loading: false,
        error: false,
        initialLoad: false,
        connected: true,
      });
    } catch (error) {
      console.error("error: ", error);
      this.setState({
        error: `${error}`,
        loading: false,
        initialLoad: false,
        connected: false,
      });
    }
  };

  loadEXPData = async () => {
    const sector = 'birddogexpsetup';
    this.setState({
      loading: true,
    });
    try {
      const result = await axios
        .get(this.state.url + ':' + this.state.port + '/' + sector)
      this.setState({
        exp: result.data,
        loading: false,
        error: false,
        initialLoad: false,
        connected: true,
      });
    } catch (error) {
      console.error("error: ", error);
      this.setState({
        error: `${error}`,
        loading: false,
        initialLoad: false,
        connected: false,
      });
    }
  };

  loadPIC1Data = async () => {
    const sector = 'birddogpic1setup';
    this.setState({
      loading: true,
    });
    try {
      const result = await axios
        .get(this.state.url + ':' + this.state.port + '/' + sector)
      this.setState({
        pic1: result.data,
        loading: false,
        error: false,
        initialLoad: false,
        connected: true,
      });
    } catch (error) {
      console.error("error: ", error);
      this.setState({
        error: `${error}`,
        loading: false,
        initialLoad: false,
        connected: false,
      });
    }
  };

  loadPIC2Data = async () => {
    const sector = 'birddogpic2setup';
    this.setState({
      loading: true,
    });
    try {
      const result = await axios
        .get(this.state.url + ':' + this.state.port + '/' + sector)
      this.setState({
        pic2: result.data,
        loading: false,
        error: false,
        initialLoad: false,
        connected: true,
      });

    } catch (error) {
      console.error("error: ", error);
      this.setState({
        error: `${error}`,
        loading: false,
        initialLoad: false,
        connected: false,
      });
    }
  };

  regionSelector = () => {
    const resolution = this.state.av.av_ndivideo;
    const arr50 = ["1080p50", "1080p25", "1080i50", "720p50"]
    if (arr50.includes(resolution)) {
      this.setState({
        region: "50",
      })
    } else {
      this.setState({
        region: "60",
      })
    }
  }

  componentDidMount() {
    clearInterval(this.interval);
    this.setState({
      error: '',
      connected: false,
      loading: false,
    })
  }

  shutterSpeedHandler = () => {
    let region = this.state.region;
    const palShutterSpeed = ["1/1", "1/2", "1/3", "1/6", "1/12", "1/25", "1/50", "1/75", "1/100", "1/120", "1/150", "1/215", "1/300", "1/425", "1/600", "1/1000", "1/1250", "1/1750", "1/2500", "1/3500", "1/6000", "1/10000"]
    const ntscShutterSpeed = ["1/1", "1/2", "1/4", "1/8", "1/15", "1/30", "1/60", "1/90", "1/100", "1/125", "1/180", "1/250", "1/350", "1/500", "1/725", "1/1000", "1/1500", "1/2000", "1/3000", "1/4000", "1/6000", "1/10000"]
    if (region === "50") {
      return (
        <Form>
          <Form.Group controlId="shutterRangePAL">
            <Form.Label><h4 className="categorySubTitle">Speed </h4><h5>{palShutterSpeed[this.state.exp.exp_camspeed]}</h5></Form.Label>
            <Form.Control type="range" min="0" max="22" value={this.state.exp.exp_camspeed} />
          </Form.Group>
        </Form>
      )
    } else {
      return (
        <Form>
          <Form.Group controlId="shutterRangeNTSC">
            <Form.Label><h4 className="categorySubTitle">Speed </h4><h5>{ntscShutterSpeed[this.state.exp.exp_camspeed]}</h5></Form.Label>
            <Form.Control type="range" min="0" max="22" value={this.state.exp.exp_camspeed} />
          </Form.Group>
        </Form>)
    };
  }

  irisHandler = () => {
    const irisArr = ["Closed", "f/14", "f/11", "f/9.6", "f/8.0", "f/6.8", "f/5.6", "f/4.8", "f/4.0", "f/3.4", "f/2.8", "f/2.4", "f/2.0", "f/1.6"];
    return (
      <Form>
        <Form.Group controlId="apertureRange">
          <Form.Label><h4 className="categorySubTitle">Iris </h4><h5>{irisArr[this.state.exp.exp_camiris - 4]}</h5></Form.Label>
          <Form.Control type="range" min="4" max="17" value={this.state.exp.exp_camiris} />
        </Form.Group>
      </Form>
    )
  }

  gainHandler = () => {
    const gainArr = [0, 3.6, 7.1, 10.7, 14.3, 17.8, 21.4, 25, 28.6, 32.1, 35.7, 39.3, 42.8, 46.4, 50]
    return (
      <Form>
        <Form.Group controlId="gainRangeForm">
          <Form.Label><h4 className="categorySubTitle">Gain</h4> <h5>{gainArr[this.state.exp.exp_camgain - 1]}dB</h5></Form.Label>
          <Form.Control type="range" min="1" max="15" value={this.state.exp.exp_camgain} />
        </Form.Group>
      </Form>
    )
  }

  maxGainHandler = () => {
    const maxGainArr = [10.7, 14.3, 17.8, 21.4, 25, 28.6, 32.1, 35.7, 39.3, 42.8, 46.4, 50]
    const gainLimit = parseInt(this.state.exp.exp_camgainlimit);
    return (
      <Form>
        <Form.Group controlId="gainLimitRangeForm">
          <Form.Label><h4 className="categorySubTitle">Gain limit</h4><h5>{gainLimit < 4 ? <>Error</> : <>{maxGainArr[gainLimit - 4]}dB</>}</h5></Form.Label>
          <Form.Control type="range" min="4" max="15" value={gainLimit} />
        </Form.Group>
      </Form>
    )
  }

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
    return (
      <Form>
        <Form.Group controlId="Camera_White_Balance_Mode">
          <Form.Label><h4 className="categorySubTitle">WB Mode</h4></Form.Label>
          <Form.Control type="text" defaultValue={wbList[this.state.wb.wb_camwb]} readOnly>
          </Form.Control>
          {this.state.wb.wb_camwb === "MANUAL" ? <><Row>Camera Red Gain - {this.state.wb.wb_camredgain}</Row><Row>Camera Blue Gain - {this.state.wb.wb_cambluegain}</Row></> : <></>}
        </Form.Group>
      </Form>
    )
  }

  exposureModeHandler = () => {
    // console.log("Mode: " + this.state.exp.exp_camexpm)
    let expModeList = {
      "FULL-AUTO": "Full Auto",
      "MANUAL": "Manual",
      "SHUTTER-PRI": "Shutter Priority",
      "IRIS-PRI": "Iris Priority",
      "BRIGHT": "Bright Mode",
    }
    return (
      <>
        <Form>
          <Form.Group controlId="Camera_Exposure_Mode">
            <Form.Label><Col><h6 className="categorySubTitle">Exposure</h6></Col></Form.Label>
            <Form.Control type="text" defaultValue={expModeList[this.state.exp.exp_camexpm]} readOnly>
            </Form.Control>
          </Form.Group>
        </Form>
      </>
    )
  }

  highSensModeHandler = () => {
    return (
      <>
        <Col xs="6">
          <h6 className="categorySubTitle">High<br />Sensitivity</h6>
        </Col>
        <Col xs="6">
          {this.state.exp.exp_camhighsens === "hson" ? <Button size="sm" variant="danger">Enabled</Button> : <Button size="sm" variant="success">Disabled</Button>}
        </Col>
      </>
    )
  }

  IRCutHandler = () => {
    return (
      <>
        <Col xs="6">
          <h6 className="categorySubTitle">Infra-Red</h6>
        </Col>
        <Col xs="6">
          {this.state.pic2.pic2_camircutfil === "circfon" ? <Button size="sm" variant="danger">Enabled</Button> : <Button size="sm" variant="success">Disabled</Button>}
        </Col>
      </>
    )
  }

  bAndWHandler = () => {
    return (
      <>
        <Col xs="6">
          <h6 className="categorySubTitle">Black & White</h6>
        </Col>
        <Col xs="6">
          {this.state.pic1.pic1_cameffect === "efbnw" ? <Button size="sm" variant="danger">Enabled</Button> : <Button size="sm" variant="success">Disabled</Button>}
        </Col>
      </>
    )
  }

  mirrorHandler = () => {
    return (
      <>
        <Col>
          <h6 className="categorySubTitle">Mirror</h6>
        </Col>
        <Col xs="6">
          {this.state.pic1.pic1_cammirror === "cmon" ? <Button size="sm" variant="danger">Enabled</Button> : <Button size="sm" variant="success">Disabled</Button>}
        </Col>
      </>
    )
  }

  flipHandler = () => {
    return (
      <>
        <Col>
          <h6 className="categorySubTitle">Flip</h6>
        </Col>
        <Col xs="6">
          {this.state.pic1.pic1_camflip === "cfon" ? <Button size="sm" variant="danger">Enabled</Button> : <Button size="sm" variant="success">Disabled</Button>}
        </Col>
      </>
    )
  }

  IPChangeHandler = (event) => {
    const tempurl = this.state.url;
    this.setState({
      tempurl: event.target.value,
    });
  }

  connectP200 = (event) => {
    console.log("Connecting!");
    if (this.interval) {
      // console.log("Interval found! Clearing!")
      clearInterval(this.interval);
    }
    event.preventDefault();
    this.setState({
      error: '',
      initialLoad: true,
    })
    this.interval = setInterval(() => {
      this.loadAVData();
      this.loadWBData();
      this.loadEXPData();
      this.loadPIC1Data();
      this.loadPIC2Data();
      this.regionSelector();
      this.connectionChecker();
    }, this.state.refreshSpeed);
  }

  connectionChecker = () => {
    if (this.state.error) {
      console.log("Error: " + this.state.error);
      clearInterval(this.interval);
      this.setState({
        connected: false,
      })
    } else {
      this.setState({
        connected: true,
      })
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  disconnect(event) {
    event.preventDefault();
    clearInterval(this.interval);
    setTimeout(
      () => this.setState({
        error: "Disconnected",
        connected: false,
      }),
      500
    );
    console.log("Disconnecting");
  };


  render() {
    const url = this.state.url;
    return (
      <div>
        <Container>
          <Row style={{ height: "150px" }} className="App-header d-flex align-items-center">
            <Col xs={4}>
              BirdDog P200<br />Vital Settings Display
            </Col>
            <Col xs={4}>
              <Form onSubmit={this.connectP200.bind(this)}>
                <Form.Group as={Row}>
                  <Col xs={2}>
                    <Form.Label>IP:</Form.Label>
                  </Col>
                  <Col xs={6}>
                    <Form.Control
                      required
                      type="url"
                      name="url"
                      id="url"
                      value={url}
                      onChange={this.handleChange.bind(this)}
                      placeholder="Enter URL"
                      disabled={this.state.connected === true ? true : false}
                    />

                  </Col>
                  <Col>
                    {this.state.connected === false ? <Button variant="success" type="submit" size="sm">Connect</Button> : <Button variant="danger" size="sm" onClick={this.disconnect.bind(this)} >Disconnect</Button>}
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col xs={4}>
              {this.state.initialLoad === true ? <><Alert variant="info"><Spinner animation="border" variant="info"></Spinner> Loading</Alert></> : <>{this.state.connected === false ? <><Alert variant="danger"><Spinner animation="grow" variant="danger" size="sm"></Spinner><h6 style={{ color: "red" }}>No Connection<br />{this.state.error ? <span>{this.state.error}</span> : <span></span>}</h6></Alert></> : <h6>Camera Detected<br /><Spinner animation="grow" variant="success" size="sm" /> Connected to {this.state.url}</h6>}</>
              }

            </Col>
          </Row>
          <Row className="mainRow">
            <h3>Main Settings</h3>
          </Row>

          <Row className="cameraCategory">
            <Col>
              <h4>Resolution: {this.state.av.av_ndivideo}</h4>
            </Col>
            <Col>
              <h4>NDI Quality: {this.state.av.av_videoq3g}Mbps</h4>
            </Col>
          </Row>
          <hr />
          <Row className="">
            <Col className="cameraCategory">
              <Row>
                {this.wbHandler()}
              </Row>
              <Row>
                {/* Colour temp - {this.state.wb.wb_camcolortemp} - Unknown */}
              </Row>
            </Col>
            <Col className="cameraCategory">
              <Row>
                {this.shutterSpeedHandler()}
              </Row>
            </Col>
            <Col className="cameraCategory">
              <Row>
                {this.irisHandler()}
              </Row>
            </Col>
            <Col className="cameraCategory">
              <Row>
                {this.gainHandler()}
              </Row>
            </Col>
            <Col className="cameraCategory">
              <Row>
                {this.maxGainHandler()}
              </Row>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs="2" className="settingWindow">
              <Row>
                {this.exposureModeHandler()}
              </Row>
            </Col>
            <Col xs="2" className="settingWindow">
              <Row>
                {this.highSensModeHandler()}
              </Row>
            </Col>
            <Col xs="2" className="settingWindow">
              <Row>
                {this.IRCutHandler()}
              </Row>
            </Col>
            <Col xs="2" className="settingWindow">
              <Row>
                {this.bAndWHandler()}
              </Row>
            </Col>
            <Col xs="2" className="settingWindow">
              <Row>
                {this.mirrorHandler()}
              </Row>
            </Col>
            <Col xs="2" className="settingWindow">
              <Row>
                {this.flipHandler()}
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
