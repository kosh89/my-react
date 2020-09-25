import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [pValue, setPValue] = useState('some text');
  const [iValue, setIValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setPValue(iValue);
    setIsDisabled(true);
    setIValue('');
  }

  const onEditButtonClick = () => {
    setIValue(pValue);
    setIsDisabled(false);
  }

  const onRemoveButtonClick = (e) => {
    e.target.closest('.contact').remove();
  }

  const onInputChange = (e) => {
    setIValue(e.target.value);
  }

  const onOverlayClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      setIsDisabled(true);
      setIValue('');
    }
  }

  return (
    <div className='app'>
      <div className='contact'>
        <p value={pValue}>
          {pValue}
        </p>
        <button className='button'
          onClick={onEditButtonClick}
          disabled={!isDisabled}>
          edit text
        </button>
        <button className='button button--remove'
          onClick={onRemoveButtonClick}>
          remove
        </button>
      </div>

      <div className={`modal-edit ${isDisabled ? `` : `show`}`}>
        <div className='overlay'
          onClick={onOverlayClick}>
          <form onSubmit={onFormSubmit}>
            <input className='input-edit'
              onChange={onInputChange}
              value={iValue}
              type='text' />
            <button className='button'
              type='submit'>
              save
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default App;
