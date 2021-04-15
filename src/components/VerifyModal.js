import "./VerifyModal.css"
import { FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const VerifyModal = ({ onToggle, setAddressStep, setAccountStep}) => {
  const [ countdown, setCountdown ] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1)
      }

      if (countdown === 0) {
        clearInterval(timer)
      }
    }, 1000)

    console.log(countdown)
    return () => clearInterval(timer)
  }, [countdown])

  const getCodeBoxElement = (index) => {
    return document.getElementById('codeBox' + index);
  }

  const onKeyUpEvent = (index, e) => {
    console.log(e,"gher")
    console.log(index,"fehf")

    const eventCode = e.which || e.keyCode;

    if (getCodeBoxElement(index).value.length === 1) {
      if (index !== 4) {
       getCodeBoxElement(index+ 1).focus();
      } else {
       getCodeBoxElement(index).blur();
       // Submit code
       console.log('submit code ');
       onToggle()
       setAccountStep("done")
       setAddressStep("active")
      }
    }

    if (eventCode === 8 && index !== 1) {
      getCodeBoxElement(index - 1).focus();
    }
  }

  const onFocusEvent = (index) => {
    console.log(index,"fgrhebgh")
    for (let item = 1; item < index; item++) {
      const currentElement = getCodeBoxElement(item);
      if (!currentElement.value) {
         currentElement.focus();
         break;
      }
     }
  }
  
  return (
    <div className="modal">
      <div className="modal-wrapper">
      <div className="modal-header">
          <h4 className="modal-header-title">
             Verify your number
          </h4>
          <button className="btn-icon" onClick={onToggle}><FaTimes /></button>
        </div>
        <div className="modal-box">
          <div className="modal-body-text">Please enter verification code via SMS to</div>
          <div className="modal-body-number">+256 76 633 4574</div>
            <form>
              <div className="modal-body-span">
              <input id="codeBox1" className="modal-span" type="text" maxLength="1" onKeyUp={(e) => onKeyUpEvent(1, e)} onFocus={() => onFocusEvent(1)} placeholder="0" />
            <input id="codeBox2" className="modal-span" type="text" maxLength="1" onKeyUp={(e) => onKeyUpEvent(2, e)} onFocus={() => onFocusEvent(2)} placeholder="0" />
            <input id="codeBox3" className="modal-span" type="text" maxLength="1" onKeyUp={(e) => onKeyUpEvent(3, e)} onFocus={() => onFocusEvent(3)} placeholder="0" />
            <input id="codeBox4" className="modal-span" type="text" maxLength="1" onKeyUp={(e) => onKeyUpEvent(4, e)} onFocus={() => onFocusEvent(4)} placeholder="0" />
              </div>
            </form>
        </div>
        <div className="modal-footer">
        { countdown === 0 ? (
          <button className="reset">Resend code</button>
        ) : (
          <div className="modal-footer-text">
            <div className="resend">Resend code in </div>
          
            <div className="modal-timer">
              <div className="num">0{countdown}</div>
            </div>
          </div>
        ) }
        </div>
      </div>
    </div>
  )
}

export default VerifyModal