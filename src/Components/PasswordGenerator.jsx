import { useState, useEffect, useRef } from 'react';
import { Checkbox, Slider, Button } from '@nextui-org/react';
import { Copy } from 'iconoir-react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [error, setError] = useState('');
  
  const passwordRef = useRef(null);

  useEffect(() => {
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
      setError('Por favor, selecciona al menos una opción.');
    } else {
      setError('');
    }
  }, [includeUppercase, includeLowercase, includeNumbers, includeSpecialChars]);

  const generatePassword = () => {
    if (error) {
      return;
    }

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';

    let validChars = '';
    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSpecialChars) validChars += specialChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className='flex flex-col gap-6'>

      <div className='flex flex-col'>
        <input ref={passwordRef} className='text-center text-2xl font-bold' type="text" value={password} readOnly />
        <label className='text-center text-lg'>Contraseña Generada</label>
      </div>
      <Slider
        size='md'
        step={1}
        maxValue={50}
        minValue={8}
        aria-label='Longitud de contraseña'
        label='Longitud de contraseña'
        defaultValue={12}
        onChange={(value) => setLength(value)}
      />
      <Checkbox
        size='md'
        checked={includeUppercase}
        onChange={(e) => setIncludeUppercase(e.target.checked)}
      >
       Mayúsculas (ABC)
      </Checkbox>
      <Checkbox
        size='md'
        checked={includeLowercase}
        onChange={(e) => setIncludeLowercase(e.target.checked)}
      >
       Minúsculas (abc)
      </Checkbox>
      <Checkbox
        size='md'
        checked={includeNumbers}
        onChange={(e) => setIncludeNumbers(e.target.checked)}
      >
       Números (123)
      </Checkbox>
      <Checkbox
        size='md'
        checked={includeSpecialChars}
        onChange={(e) => setIncludeSpecialChars(e.target.checked)}
      >
       Carácteres especiales (#$%)
      </Checkbox>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='flex justify-center gap-6'>
        <Button color='primary' variant='bordered' onClick={generatePassword}>Generar Contraseña</Button> 
        <Button color='primary' variant='bordered' onClick={copyToClipboard}><Copy/></Button>
      </div> 
    </div>
  );
};

export default PasswordGenerator;


