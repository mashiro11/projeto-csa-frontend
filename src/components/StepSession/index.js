import React from 'react'

const StepSession = ({step, children, onComplete, onNext, onPrevious, onCancel, nextButton, previousButton, firstPreviousButton, lastNextButton}) => {
  return(
    <div>
      {children ?
        <div>
            {children[step]}
            <div>Parte {step+1} de {children.length} </div>
            <button onClick={()=>{ if(onPrevious) onPrevious() }}>
                {step === 0? firstPreviousButton : previousButton}
            </button>
            <button onClick={()=>{ if(onNext) onNext(step) }}>
              {step === children.length-1? lastNextButton : nextButton }
            </button>
        </div>
      :null}

    </div>
  )
}

export default StepSession
