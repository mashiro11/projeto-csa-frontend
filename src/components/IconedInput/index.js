import React from 'react'
import EmailIcon from '@material-ui/icons/Email.js'
import LockIcon from '@material-ui/icons/Lock.js'
import TextField from '@material-ui/core/TextField'
import InputAdornment  from '@material-ui/core/InputAdornment'

const IconedInput = ({onChange, placeholder, value, type, icon}) => {
    const displayedIcon = icon === "Email" ?
                            <EmailIcon color={"disabled"}/>
                            : icon === "Lock"?
                            <LockIcon color={"disabled"}/>
                        : null;
    
    return (
        <TextField
            id="input-with-icon-adornment"
            variant="outlined"
            placeholder={placeholder} type={type} value={value} onChange={onChange}
            slotProps={{
                input: {
                    startAdornment: (
                    <InputAdornment position="start">
                        {displayedIcon}
                    </InputAdornment>
                    )
                }
            }}
        />
    )
}

export default IconedInput