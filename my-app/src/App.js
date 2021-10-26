//import logo from './logo.svg';
import logo from './logo.png';
import './App.css';
import { useState } from 'react';

function KebabForm(props) { // composant d'un kébab
    const [pain, setPain] = useState("")
    const [viande, setViande] = useState("") 
    const [sto, setSto] = useState("") //Salade tomate  oignons
    const [viande, setViande] = useState("")
    const { onSubmit } = props
}

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="container">
                    <p>
                        Pain ou galette ?
        </p>
                    <button>
                        <div className="Ingredient-card">
                            <img src="https://i.imgur.com/C0YORKY.jpeg"
                                alt=" Pain "
                            />

                            <p>Pain</p>


                        </div>
                    </button>

                    <button>
                        <div className="Ingredient-card">
                            <img src="https://i.imgur.com/KOQEGt7.jpeg"
                                alt=" Galette "
                            />
                            <p>Galette</p>


                        </div>

                    </button>

                </div>

            </header>
        </div>
    );
}

export default App;