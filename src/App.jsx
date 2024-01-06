import PasswordGenerator from './Components/PasswordGenerator'
import './App.css'

function App() {
  return (
    <div>
    <h1 className="text-3xl font-bold font-display text-center pt-10">
    Password Generator
    </h1>
    <div className='flex flex-col justify-center h-screen gap-6 w-full max-w-md px-4 mx-auto'>
    <p className='text-base'>Password Generator crea contraseñas personalizadas y seguras al instante, 
    con opciones para incluir mayúsculas, minúsculas, números y caracteres especiales. </p>
    <br/><p className='text-center'>¡Genera y copia contraseñas 
    fuertes con un solo clic!</p>
        <PasswordGenerator></PasswordGenerator>
    </div>
    </div>
  )
}

export default App
