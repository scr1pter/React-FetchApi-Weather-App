import React from 'react';
import './App.css';
import AppTitle from './components/apptitle';
import Form from './components/form';
import Weather from './components/weather';

const ApiKey = '036a4d4d19ef25b8d3ce1ea3e534a26a'; // auto to API to phra apto openweatherapp 

class App extends React.Component {
  constructor(props) { // an den exeis this.state kai den kaneis bind methods tote den xreiazetai to constructor
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      pressure: undefined,
      windSpeed: undefined,
      description: undefined,
      error: undefined
    }
}

fetchTheWeather = async (e) => { // to async/await xrhsimopoieitai otan 8eloume ston kwdika mas na ektelesoume kati pou basizetai se kati allo pou exei hdh sigoura ekteles8ei.
// px edw 8eloume prwta na paroume sigoura tis plhrofories mesw tou fetch kai afou tis paroume na tis kanoume se json format. kai afou tis kanoume json format tote proxwrame sthn if
// h ektelesh mias async/await sunarthshs den stamataei thn ektelesh tou programmatos mas. parallhla ektelountai alla kommatia kwdika ektos ths fetchTheWeather

  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;

  e.preventDefault(); // an de to balw tote otan pataw to check weather/submit button h selida mou kanei full refresh.
  // opote gia na apotrepsw th selida na kanei full page refresh kai na epistrepsei sthn default katastash bazw to preventDefault
  
// edw dhmiourgw mia metablhth pou pairnei ws timh oti epistrefei h fetch apto url pou xrhsimopoihsa sthn ousia ka8e fora pou grafw mia polh kai mia xwra kai pataw submit tote kaleitai h getWeather
// kai pernaw san sta8era city thn polh pou egrapsa kai san sta8era country thn xwra pou egrapsa opote me to apikey pou phra apto openweathermap, h fetch epistrefei oles tis plhrofories
// gia tis kairikes sun8hkes sthn sugkekrimenh topo8esia. An paw sto url http://api.openweathermap.org/data/2.5/weather?q=thessaloniki,gr&appid=036a4d4d19ef25b8d3ce1ea3e534a26a tote blepw ton pinaka antikeimenwn pou epistrefei to fetch.
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}`);
  
  const response = await api_call.json(); // edw prepei na metatrepsw tis plhrofories pou phra apthn fetch
  // se ena antikeimeno pou borei na diabasei kai na katalabei h javascript, dhladh se json format
  
  if(city && country) { // an dhladh den einai undefined kai o xrhsths exei dwsei swsth polh kai xwra
    this.setState({
      temperature: (response.main.temp -273).toFixed(2),
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      pressure: (response.main.pressure/1000).toFixed(2),
      windSpeed: response.wind.speed,
      description: response.weather[0].description,
      error: ''
    })
  }
  else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      pressure: undefined,
      windSpeed: undefined,
      description: undefined,
      error: "Please provide a city and a country"
    })
  }
  
  console.log(response);
  
 }
  
  render() {
    return(
         <div className="main">
          <div className="title">
            <AppTitle />
          </div>
          <div className="form">
            <Form fetchTheWeather={this.fetchTheWeather}/>
            <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              windSpeed={this.state.windSpeed}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
         </div>
    )
  }
}

export default App;
