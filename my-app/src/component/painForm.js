import logo from './logo.png';
import { useState } from "react"

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="container">
                    <p>
                        Pain ou galette ?
        </p>
                    <button type="submit">
                        <div className="Ingredient-card">
                            <img src="https://i.imgur.com/C0YORKY.jpeg"
                                alt=" Pain "
                            />

                            <p>Pain</p>

                            <input name="bouton_terminer" type="button" value="Choisir"
                                onclick=".\Pain.js" />

                        </div>
                    </button>

                    <button type="submit">
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
export default painForm