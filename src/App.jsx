import PasswordGenerator from './Components/PasswordGenerator'
import './App.css'

function App() {
  return (
    <div className='flex flex-col gap-1 justify-center h-screen w-full max-w-md mx-auto text-blue-950'>
      <h1 className="text-4xl font-bold font-display text-center text-blue-500">
      Password Generator
      </h1>
    <div className='gap-2'>
    <p className='text-xl font-bold text-center'>Crea contraseñas personalizadas y seguras al instante, 
    con opciones para incluir mayúsculas, minúsculas, números y caracteres especiales. </p>
    <br/><p className='text-base text-center pb-4'>¡Genera y copia contraseñas 
    fuertes con un solo clic!</p>
        <PasswordGenerator></PasswordGenerator>
    </div>
    </div>
  )
}

export default App
