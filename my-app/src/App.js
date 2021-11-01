import logo from './logo.png';
import './App.css';
import { useState } from 'react';

function KebabForm(props) { // composant d'un kébab
    const [pain, setPain] = useState("")
    const [viande, setViande] = useState("") 
    const [sto, setSto] = useState("") //Salade tomate  oignons
    const [sauce, setSauce] = useState("")
    const { onSubmit } = props
}

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
                <div className="container">
                <table>
                    <tr>
            <td>
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
                    </td>
                    <td>
                        <p>
                            Viande ou Tofu ?
        </p>
                        <button>
                            <div className="Ingredient-card">
                                <img src="https://i.imgur.com/14ExbC6.jpg"
                                    alt=" Viande "
                                />

                                <p>Viande</p>


                            </div>
                        </button>

                        <button>
                            <div className="Ingredient-card">
                                <img src="https://i.imgur.com/YERLr57.jpg"
                                    alt=" Tofu "
                                />
                                <p>Tofu</p>


                            </div>

                        </button>
                        </td>
                        
                    
                    <td>
                        <p>
                            Salade, tomates, oignons
        </p>
                        <button>
                            <div className="Ingredient-card">
                                    <img src="https://i.imgur.com/p5mRjny.jpg"
                                    alt=" Salade "
                                />

                                <p>Salade</p>


                            </div>
                        </button>

                        <button>
                            <div className="Ingredient-card">
                                    <img src="https://i.imgur.com/kZT7exY.jpg"
                                    alt=" tomates "
                                />
                                <p>Tomates</p>


                            </div>

                            </button>
                            <button>
                                <div className="Ingredient-card">
                                    <img src="https://i.imgur.com/MICzYQw.jpg"
                                        alt=" oignons "
                                    />
                                    <p>oignons</p>
                                </div>

                            </button>
                        </td>
                    </tr>


                    <tr>
                        <p>
                           Choix des sauces
        </p>
                        <button>
                            <div className="Ingredient-card">
                                <img src="https://i.imgur.com/eNpWji5.jpg"
                                    alt=" Andalouse "
                                />

                                <p>Andalouse</p>


                            </div>
                        </button>

                        <button>
                            <div className="Ingredient-card">
                                <img src="https://i.imgur.com/wo6NbFC.jpg"
                                    alt=" Barbecue "
                                />
                                <p>Barbecue</p>


                            </div>

                        </button>
                        <button>
                            <div className="Ingredient-card">
                                <img src="https://i.imgur.com/b0kNLho.jpg"
                                    alt=" Blanche "
                                />
                                <p>Blanche</p>


                            </div>

                        </button>
                        <button>
                            <div className="Ingredient-card">
                                <img src="https://i.imgur.com/xIHdCMt.jpg"
                                    alt=" Curry "
                                />
                                <p>Curry</p>


                            </div>

                        </button>
                        <button>
                            <div className="Ingredient-card">
                                <img src="https://i.imgur.com/9KUMsOR.jpg"
                                    alt=" Ketchup "
                                />
                                <p>Ketchup</p>


                            </div>

                        </button>
                        <button>
                            <div className="Ingredient-card">
                                <img src="https://i.imgur.com/wyq25bt.jpg"
                                    alt=" Harissa "
                                />
                                <p>Harissa</p>


                            </div>

                        </button>
                    
                        </tr>
           </table>     
            </div>

            
        <div className="Panier">
                <table>
                    <tr>
                        <p> Recap</p>
                    </tr>
                    <tr>
                <p> essai</p>
                </tr>

            </table>
                </div>
           
        </div>
           
    );
}

export default App;