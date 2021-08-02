/** @format */

import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountyPicker from "./components/CountyPicker/CountyPicker";
import { fetchData } from "./api";
class App extends React.Component {
    state = {
        data: {},
        country:'',
    };
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }
    handleCountry = async (country) =>{
    const fetchedData = await fetchData(country) 
    this.setState({data:fetchedData,country:country}) 
}
    render() {
      const {data,country} = this.state;
        return (
            <div>
            <div><a className='covid' href='https://www.covid.gov.pk/'>Know about Covid-19</a></div>
            <div className='container'>
            
            <img src="covid19_logo.png" className='covid-19'/>

                <Cards data={data}/>
                <CountyPicker handleCountry={this.handleCountry}/>
                <Charts data={data} country={country}/>
            </div>
            </div>
        );
    }
}
export default App;
