import './Ticket.css';

import React, { Component } from 'react'

export default class ticket extends Component {

    constructor(props){
        super(props)

        this.state = {
            countriesData :{
                Iran : ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Rasht"  ],
                Turkey :["Istanbul", "Ezmir", "Ankara", "Antaliya"],
                Us : ["los Angles", "San Diego", "Chicago"],
            },
            mainCountryCities : []
        }
        this.selectHandler = this.selectHandler.bind (this)
    }

    selectHandler (event){
        // console.log(event.target.value);
        let mainCountry = event.target.value
        // console.log(this.state.countriesData[mainCountry]);
        let mainCountryCities = this.state.countriesData[mainCountry]
        // console.log(mainCountryCities);

        this.setState({
            mainCountryCities : mainCountryCities
        })
    }
  
  render() {
    return (
      <div className='container'>
        <div>
            <input  className="fnameInput" placeholder='First Name'/>
        </div>
        <div>
        <input  className="lnameInput"  placeholder='Last Name'/>
        </div>
        <div>
        <input  className="phoneInput"   placeholder='Phone Number'/>
        </div>
        <div>
        <input  className="emailInput"  placeholder='Email'/>
        </div>
        <div>
            <select className='countrySelect' onChange={this.selectHandler}>
                <option className="option" value=" -1">please select country ...</option>
                <option className="option" value="Iran">Iran</option>
                <option className="option" value="Turkey">Turkey</option>
                <option className="option" value="Us">United State</option>
            </select>
        </div>
        <div>
            <select className='citySelect'>
               {this.state.mainCountryCities.length && this.state.mainCountryCities.map (city => 
               (
                <option  value={city}> {city}</option>
               )
                ) }
            </select>
        </div>
        <div>
            <button className='btn '>Book a Ticket</button>
        </div>
        
      </div>
    )
  }
}
