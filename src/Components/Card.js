import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css';
import img from './pic.jpg';
import { connect } from 'react-redux';
const mapStateToProps = state => ({
  continent: state.continent.data
});

function Card(props) {

    const [data, setData] = useState([]); 
    const [continents, setContinents] = useState('Select a Continent');
    const [search,setSearch] = useState();
    const [country, setCountry] = useState();
    const [selectedCountry, setSelectedCountry] = useState(false);
    const [image, setImage] = useState(true);

  useEffect(() => {
    if(continents !== "Select a Continent") {
        const fetchData = async () => {
        const result = await axios.get(`https://restcountries.com/v2/region/${continents}`);
        setData(result.data); 
      }; 
      fetchData();
    }
  }, [continents]);

  const test = async (event) =>{

    setContinents(event.target.value);
    setSelectedCountry(false);
    if (event.target.value === "Select a Continent") {
      setImage(true);
    } else {
      setImage(false);
    }

  }

const searchHandler = (event) => 
{
    setSearch(event.target.value)
}

const submitHandler = () => 
{
    setCountry(search);
    setSelectedCountry(true);
    setSearch("");
}

  return (
    <div>
        <div style={{height:"40px",width:"100%",paddingTop:"13px",paddingLeft:"20px"}}>
            <input className="search-bar" type="text" placeholder="Search for a Country" style={{color:"black"}} value={search} onChange={searchHandler}/>
            <button className="submit-button" type="submit"onClick={submitHandler}>Submit</button>
            <label style={{margin:"20px",color:"hotpink",fontSize:"20px"}}><b>Continents: </b></label>
            <select className="dropdown" value={continents} onChange={test}>
                <option value="Select a Continent">Select a Continent</option>
                <option>ASIA</option>
                <option>AFRICA</option>
                <option>AMERICAS</option>
                <option>EUROPE</option>
            </select>
            {image && <img className="homeimage" src={img} alt=" "></img>}
        </div>
        <div className="card">
            {
              continents !== "Select a Continent"?
              (selectedCountry ? data.map((item,index)=>{
                if(item.name === country){  
                  return(

                      <div className="front" key={index}>
                        <img src={item.flag} alt="img" style={{height:"40%",width:"95%",marginTop:"6px",borderRadius:"12px"}}/>
                        <div>
                          <h3>Name: {item.name}</h3>
                          <h4> Capital: {item.capital}</h4>
                          <h5>Population: {item.population}</h5>
                          <p>Currency: {item.demonym}</p>
                        </div>
                      </div>
                    
                    
                  )}
                  return null;
                }):
                /*data && data.filter((item)=>{
                  return item.name.toLowerCase().includes(search.toLowerCase())
                }).length !== 0 ? data && data.filter((item)=>{
                  return item.name.toLowerCase().includes(search.toLowerCase())
                })*/
                
                <div className="card">
                  {
                    data.map((item,index)=>{
                      return(
                        
                          <div className="front" key={index}>
                            <img src={item.flag} alt="img" style={{height:"40%",width:"95%",marginTop:"6px",borderRadius:"12px"}}/>
                            <div>
                              <h3>Name: {item.name}</h3>
                              <h4> Capital: {item.capital}</h4>
                              <h5>Population: {item.population}</h5>
                              <p>Currency: {item.demonym}</p>
                            </div>
                          </div>
                     
                      )}
                    ) }
                </div>):<div className='home'><h1>Select a Continent in the Dropdown</h1></div>
            } 
          </div>
    </div>
  );
}

export default connect(mapStateToProps)(Card);