import React from 'react'

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

const MessageSender = ({onCancel, onSend, onAttach}) => {
  const [text, setText] = React.useState('')
  return(
    <div>
      <div style={styles.textContainer}>
        <textarea style={styles.textInput} value={text} onChange={ e => setText(e.target.value)} />
        <div onClick={onAttach}>att</div>
      </div>
      <div style={styles.buttonsContainer}>
        <div className='button small' style={styles.button} onClick={onCancel}>CANCELAR</div>
        <div className='button small' style={styles.button} onClick={onSend}>ENVIAR</div>
      </div>
    </div>
  )
}

export default MessageSender
