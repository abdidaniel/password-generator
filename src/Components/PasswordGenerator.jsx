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
  const [generatedPasswordStrength, setGeneratedPasswordStrength] = useState('');
  
  const passwordRef = useRef(null);

  useEffect(() => {
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
      setError('Por favor, selecciona al menos una opción.');
    } else {
      setError('');
    }
  }, [includeUppercase, includeLowercase, includeNumbers, includeSpecialChars]);

  const evaluatePassword = (password) => {
    let strength = 0;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    if (password.length >= 16) strength++;
    
    switch (strength) {
      case 1: return 'Mala';
      case 2: return 'Regular';
      case 3: return 'Buena';
      case 4: return 'Muy Buena';
      case 5: return 'Excelente';
      default: return '';
    }
  };

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
    const newStrength = evaluatePassword(generatedPassword);
    setGeneratedPasswordStrength(newStrength);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  const getStrengthColor = () => {
    switch (generatedPasswordStrength) {
      case 'Mala': return '#8B0000';
      case 'Regular': return '#FFA500';
      case 'Buena': return '#004CB7';
      case 'Muy Buena': return '#00C400';
      case 'Excelente': return '#006400';
      default: return '#000000'; 
    }
  };


  return (
    <div className='flex flex-col gap-3'>

      <div className='flex flex-col'>
        <input ref={passwordRef} className='text-center text-3xl font-bold text-purple-900 bg-gray-900 border-b-2 border-purple-950' type="text" value={password} readOnly />
        <label className='text-center text-lg font-medium'>Contraseña Generada</label>
        <label style={{ backgroundColor: getStrengthColor() }} className='text-center text-lg text-gray-900 font-medium'>{generatedPasswordStrength}</label>
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
        size='lg'
        checked={includeUppercase}
        onChange={(e) => setIncludeUppercase(e.target.checked)}
      >
       Mayúsculas (ABC)
      </Checkbox>
      <Checkbox
        size='lg'
        checked={includeLowercase}
        onChange={(e) => setIncludeLowercase(e.target.checked)}
      >
       Minúsculas (abc)
      </Checkbox>
      <Checkbox
        size='lg'
        checked={includeNumbers}
        onChange={(e) => setIncludeNumbers(e.target.checked)}
      >
       Números (123)
      </Checkbox>
      <Checkbox
        size='lg'
        checked={includeSpecialChars}
        onChange={(e) => setIncludeSpecialChars(e.target.checked)}
      >
       Carácteres especiales (#$%)
      </Checkbox>
      {error && <p className='font-medium' style={{ color: '#4C1289' }}>{error}</p>}
      <div className='flex justify-center gap-6'>
        <Button className='text-lg font-medium' color='primary' variant='bordered' onClick={generatePassword}>Generar Contraseña</Button> 
        <Button className='text-lg' color='primary' variant='bordered' onClick={copyToClipboard}><Copy/></Button>
      </div> 
    </div>
  );
};

export default PasswordGenerator;



