import React from 'react'
import EmailIcon from '@material-ui/icons/Email.js'
import LockIcon from '@material-ui/icons/Lock.js'
import TextField from '@material-ui/core/TextField'

const IconedInput = ({onChange, placeholder, value, type, icon}) => {
    return (
        <div>
            {icon === "Email" ?
                <EmailIcon color={"disabled"}/>
                : icon === "Lock"?
                <LockIcon color={"disabled"}/>
            : null
            }
            <TextField variant="outlined"/>
          <input placeholder={placeholder} type={type} value={value} onChange={onChange}/>
        </div>
    )
}

export default IconedInput