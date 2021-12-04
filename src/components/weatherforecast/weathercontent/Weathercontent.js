import React, { Component } from 'react'
import Weathersubcontent from '../weathersubcontent/Weathersubcontent';
import './style.css'
import LoadingOverlay from "react-loading-overlay";
import { Spinner } from "react-bootstrap";
import axios from 'axios'
import {fetchWeatherApiwithlocation,fetchWeatherApiwithgeolocation} from './api'

class Weathercontent extends Component {
    constructor(props) {    
        super(props);
        // this.APIKEY = process.env.REACT_APP_API_KEY
        // this.URL = process.env.REACT_APP_API_OPEN_WEATHER_URL
        this.state = {
          city: "",
          country: "",
          weather: [],
          cityerr: "",
          loading:false,
        };
      }
   componentDidMount(){
    let long;
    let lat;
    this.setState({loading:true})
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude; 
            //fetch API      
            fetchWeatherApiwithgeolocation(lat,long)
              .then((response)=>{
                //console.log('respose data',respose)
                this.setState({loading:false,weather:response})
              })
        })       
    }   
   }   
  //input onchange function
  onChangehandler = (e) => {
    var name = e.target.name;
    if (name == "city") {
      this.setState({ city: e.target.value, cityerr: "" });
    } else if ((name = "country")) {
      this.setState({ country: e.target.value });
    }
  };
  //validation function
  isValid = () => {
    const { city, cityerr } = this.state;
    let back = true;
    if (city.length == 0) {
      this.setState({ cityerr: "City is required" });
      back = false;
    } else if (!isNaN(city)) {
      this.setState({ cityerr: "City should be characters" });
      back = false;
    }
    return back;
  };
  //Click submit function
  clickSubmit =  (event) => {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({loading:true})
      const { city, country } = this.state;
        //fetch api
        fetchWeatherApiwithlocation(city,country)
        .then((data) => {
            this.setState({weather:data,loading:false})
        })
        // axios.get(
        //     `${this.URL}weather?q=${city},${country}&units=metric&APPID=${this.APIKEY}`
        //   )
        //   .then((respose)=>{
        //     //console.log('respose data',respose)
        //     this.setState({loading:false,weather:respose.data})
        //   })
        //   .catch((err)=>{
        //       console.log('err',err)
        //   })        
    }
  }; 

    render() {
        const { cityerr,weather,loading } = this.state;
        return (
            <>
        <div className="card">
          <span className="title">Weather forecast </span>
          <br />
          <form>
            <input
              type="text"
              placeholder="Enter city ...."
              name="city"
              onChange={this.onChangehandler}
            />
            
            &nbsp; &nbsp; &nbsp;
            <input
              type="text"
              placeholder="Enter Country ..."
              name="country"
              onChange={this.onChangehandler}
            />
            <button className="submitbutton" onClick={this.clickSubmit}>
              Submit
            </button>
            <p className="error">{cityerr}</p>
          </form>
          {/* LoadingOverlay package has been used for loading */}
          <LoadingOverlay
                   active={loading}
                   spinner={<Spinner animation="grow" variant="primary" size="lg" />}
                > 
          { Object.keys(weather).length !== 0 ? (
            <div>
              <Weathersubcontent weatherdata={weather} />
            </div>
           ) : null }
         </LoadingOverlay>
        </div>
      </>
        )
    }
}

export default Weathercontent
