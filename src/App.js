import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import MasterRow from './components/layout/MasterRow';
import WhiteBalance from './components/layout/WhiteBalance';
import ShutterSpeed from './components/layout/ShutterSpeed';
import Iris from './components/layout/Iris';
import Gain from './components/layout/Gain';
import GainLimit from './components/layout/GainLimit';
import Exposure from './components/layout/Exposure';
import HighSensitivity from './components/layout/HighSensitivity';
import InfraRed from './components/layout/InfraRed';
import BlackWhite from './components/layout/BlackWhite';
import Mirror from './components/layout/Mirror';
import Flip from './components/layout/Flip';

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
      region: '50',
      tempurl: '',
      initialLoad: false,
    }
    clearInterval(this.interval);
  }

  loadAVData = async () => {
    const sector = 'birddogavsetup';
    this.setState({
      loading: true,
    });
    try {
      const result = await axios
        .get('http://' + this.state.url + ':' + this.state.port + '/' + sector)
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
        .get('http://' + this.state.url + ':' + this.state.port + '/' + sector)
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
        .get('http://' + this.state.url + ':' + this.state.port + '/' + sector)
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
        .get('http://' + this.state.url + ':' + this.state.port + '/' + sector)
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
        .get('http://' + this.state.url + ':' + this.state.port + '/' + sector)
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

  // componentDidMount() {
  //   clearInterval(this.interval);
  //   this.setState({
  //     error: '',
  //     connected: false,
  //     loading: false,
  //   })
  // }

  connectP200 = (event) => {
    console.log("Connecting!");
    if (this.interval) {
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
      <div className="App">
        <Container>
          <Header connectP200={this.connectP200.bind(this)} handleChange={this.handleChange.bind(this)} connected={this.state.connected} initialLoad={this.state.initialLoad} disconnect={this.disconnect.bind(this)} url={url} />
          <MasterRow av_ndivideo={this.state.av.av_ndivideo} av_videoq3g={this.state.av.av_videoq3g} connected={this.state.connected} />
          <Row xs={2} sm={3} md={4} lg={5} xl={5}>
            <WhiteBalance wb_camwb={this.state.wb.wb_camwb} wb_cambluegain={this.state.wb.wb_cambluegain} wb_camredgain={this.state.wb.wb_camredgain} connected={this.state.connected} handleChange={this.handleChange.bind(this)} />
            <ShutterSpeed region={this.state.region} connected={this.state.connected} exp_camspeed={this.state.exp.exp_camspeed} handleChange={this.handleChange.bind(this)} />
            <Iris exp_camiris={this.state.exp.exp_camiris} connected={this.state.connected} handleChange={this.handleChange.bind(this)} />
            <Gain exp_camgain={this.state.exp.exp_camgain} connected={this.state.connected} handleChange={this.handleChange.bind(this)} />
            <GainLimit exp_camgainlimit={this.state.exp.exp_camgainlimit} connected={this.state.connected} handleChange={this.handleChange.bind(this)} />
          </Row>
          {this.state.connected === true ?
            <>
              <hr />
              <Row xs={2} sm={3} md={4} lg={5} xl={6}>
                <Exposure exp_camexpm={this.state.exp.exp_camexpm} connected={this.state.connected} handleChange={this.handleChange.bind(this)} />
                <HighSensitivity exp_camhighsens={this.state.exp.exp_camhighsens} connected={this.state.connected} handleChange={this.handleChange.bind(this)} />
                <InfraRed pic2_camircutfil={this.state.pic2.pic2_camircutfil} connected={this.state.connected} handleChange={this.handleChange.bind(this)} />
                <BlackWhite pic1_cameffect={this.state.pic1.pic1_cameffect} connected={this.state.connected} handleChange={this.handleChange.bind(this)} />
                <Mirror pic1_cammirror={this.state.pic1.pic1_cammirror} connected={this.state.connected} handleChange={this.handleChange.bind(this)} />
                <Flip pic1_camflip={this.state.pic1.pic1_camflip} connected={this.state.connected} handleChange={this.handleChange.bind(this)} />
              </Row>
            </>
            : <></>}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
