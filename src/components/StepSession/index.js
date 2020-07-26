import React from 'react'

const StepSession = ({children, onComplete, onCancel, nextButton, previousButton, firstPreviousButton, lastNextButton}) => {
  const [step, setStep] = React.useState(0)

  const progress = (step) => {
    if(-1 < step && step < children.length) setStep(step)
    else if(step === children.length && onComplete) onComplete()
    else if(onCancel) onCancel()
  }
  return(
    <div>
      {children ?
        <div>
            {children[step]}
            <div>Parte {step+1} de {children.length} </div>
            <button onClick={()=>progress(step-1)}>{step === 0? firstPreviousButton : previousButton}</button>
            <button onClick={()=>progress(step+1)}>{step === children.length-1? lastNextButton : nextButton }</button>
        </div>
      :null}

    </div>
  )
}

export default StepSession
