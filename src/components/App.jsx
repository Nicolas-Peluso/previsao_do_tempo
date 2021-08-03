import React from "react";
import  api  from "../services/api"
import "./style.css"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      weather: null, 
      city: ''
    }
    this.ChangeCityOnInput = this.ChangeCityOnInput.bind(this) 
  }
    GetWeather = async () => {
      const response = await api.get(this.state.city)
      this.setState({weather: response.data})
}
  ChangeCityOnInput(event){
      this.setState({city: event.target.value})
}
  render(){

    const padrão = () => {
        return(
          <>
          <input type="text" value={this.state.city} onChange={this.ChangeCityOnInput} className="search" placeholder="digite sua cidade,país,etc.."></input> 
          <button onClick={this.GetWeather} className="button">search</button>
          </>
        )
    }
   const SetCity = () => {

  return(   
             
  <div className="container">
          <div className="containerSearch">
            <input type="text" value={this.state.city} onChange={this.ChangeCityOnInput} className="search" placeholder="digite sua cidade,país,etc.."></input> 
            <button onClick={this.GetWeather} className="button">search</button>
          </div>
       <h1 className="Cidade">{this.state.city}</h1>

       <p className="descrição">o céu esta {this.state.weather.description} </p>      

       <p className="temperaturaAtual">{this.state.weather.temperature}</p>

       <p className="ventoAtual">{this.state.weather.wind}</p>

       <ul className="containerPrevisaoProximoDia">
           {
           this.state.weather.forecast.map((day, i) => { 
           
           return(
             <li key={i}>
                 <div className="temperaturaProximoDias">
                   {day.temperature}
                 </div>

                 <div className="vantoProximoDias">
                   {day.wind}
                 </div>
             </li>) 
   })} </ul>


 </div>

)}  
  return  !this.state.weather ? padrão()  :SetCity();
}   

}     

export default App