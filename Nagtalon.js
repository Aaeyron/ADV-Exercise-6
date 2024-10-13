import { useState } from 'react';

export default function StackApp() {
  const initialStack = Array(10).fill(''); 
  const [stack, setStack] = useState(initialStack);
  const [inputValue, setInputValue] = useState('');

  const handlePush = () => {
    if (inputValue) {
      const newStack = [...stack];

      if (newStack.every(item => item !== '')) {
       
        return; 
      }

      const firstEmptyIndex = newStack.lastIndexOf('');
      if (firstEmptyIndex !== -1) {
        newStack[firstEmptyIndex] = inputValue; 
      }

      setStack(newStack);
      setInputValue('');
    }
  };

  const handlePop = () => {
    const newStack = [...stack];

    const firstFilledIndex = newStack.findIndex(item => item !== '');
    if (firstFilledIndex !== -1) {
      newStack[firstFilledIndex] = ''; 
    }
    
    setStack(newStack);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px', width: '200px' }} 
      />
      <div>
        <button onClick={handlePop} style={{ marginRight: '10px', padding: '10px' }}>
          Pop
        </button>
        <button onClick={handlePush} style={{ padding: '10px' }}>
          Push
        </button>
      </div>
      <table style={{ marginTop: '20px', borderCollapse: 'collapse', width: '200px' }}>
        <tbody>
          {stack.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', textAlign: 'center', height: '30px' }}>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
