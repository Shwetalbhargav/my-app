import React from 'react';
import logo from './logo.svg';
import './App.css';
 
class StarWars extends React.Component{
   constructor(){

    super()
    this.state = {
      loadedCharacter: false,
      Name: null,
      Height: null,
      HomeWorld: null,
      Films:[],
      
    }
   }

  getNewCharacter(){
    console.log("ready")
    const randomNumber = Math.round(Math.random() * 82)
    const url = `https://github.com/akabab/starwars-api/tree/master/api/id/${randomNumber}.json/`
    fetch(url)
      .then(response =>response.json())
      .then(data =>{
        
        this.setState({
          Name: data.name,
          Height: data.height,
          HomeWorld: data.HomeWorld,
          Films: data.films,
          loadedCharacter: true,
        })   
    })
  }
  render(){
    return(
      <div>
      {
        this.state.loadedCharacter  &&
        <div>
            <h1>This is STAR WARS</h1>
            <h2>{this.state.Name}</h2>
            <h2>{this.state.Height}</h2>
            <h3><a href={this.state.HomeWorld}></a></h3>
          <ul>
            <li>Films:{this.state.Films}</li>
          </ul>
        
        </div>
      }
      <button 
               type="button" 
               onClick={() => this.getNewCharacter()} 
               className="btn">
               Random Character
        </button>
        
      </div>
    )
  }
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
         <StarWars/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
