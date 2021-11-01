//import logo from './logo.svg';
import logo from './logo.png';
import fakeData from "./ingredient.json"
import React from "react"
import painForm from './component/painForm'
import './App.css'




class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            kebab: fakeData,
        }
    }

}

export default App;