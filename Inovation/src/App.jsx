import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      </div>
      <h1>Inovacion</h1>
      <div class="box-container">

        <div class="box">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71wmaGCWZnL._SL1500_.jpg" alt="">
            <h3>Lampara Inteligente</h3>
            <p>Puedes cambiar la luz de tu lampara desde tu celular</p>
            <a href="#" class="btn">Adquirir</a>
        </div>

        <div class="box">
            <img src="https://nation.com.mx/wp-content/uploads/2020/07/15-17.jpg" alt="">
            <h3>Regadera Medidora</h3>
            <p>La regadera que puede medir la temperatura en la que este tu agua</p>
            <a href="#" class="btn">Adquirir</a>
        </div>

        <div class="box">
            <img src="https://www.marronyblanco.com/wp-content/uploads/Haier-exhibe-sus-productos-inteligentes-para-el-hogar-conectado-en-IFA.jpg" alt="">
            <h3>Refri Inteligente</h3>
            <p>Un refri que incluye una pantalla tactil en la puerta derecha</p>
            <a href="#" class="btn">Adquirir</a>
        </div>

    </div>
    </div>
  )
}

export default App
