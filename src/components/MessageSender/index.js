import React from 'react'

import AttachIcon from '../../icons/Attach'

const styles = {
  textContainer:{
    display:'flex',
    flexOrientation: 'row',
    border: '1px solid #C4C4C4',
    borderRadius: '5px',
    padding: 5,
    paddingLeft: 3,
    justifyContent: 'space-between'
  },
  buttonsContainer:{
    display:'flex',
    flexOrientation: 'row'
  },
  button:{
    margin: 0
  },
  textInput:{
    flexGrow: 1,
    border: 0,
    outline: 'none'
  }
}

const MessageSender = ({initialValue, onCancel, onSend, onAttach}) => {
  const [text, setText] = React.useState(initialValue? initialValue : '')
  return(
    <div>
      <div style={styles.textContainer}>
        <textarea style={styles.textInput} value={text} onChange={ e => setText(e.target.value)} />
        <AttachIcon onClick={onAttach} />
      </div>
      <div style={styles.buttonsContainer}>
        <div className='button small' style={styles.button} onClick={onCancel}>CANCELAR</div>
        <div className='button small' style={styles.button} onClick={onSend(text)}>ENVIAR</div>
      </div>
    </div>
  )
}

export default MessageSender
