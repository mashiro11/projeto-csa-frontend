const styles = {
  spacer:{
    height: 61
  },
  container: {
    display: 'flex',
    position: 'fixed',
    top:'0',
    left: '0',
    width: '100%',
    height: 61,
    backgroundColor: '#EEEEEE',
    fontSize: 14,
    fontFamily: 'Roboto',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  },
  logo:{
    position: 'relative',
    left: '3.25%',
    top: '2%',
    width: 'auto'
  },
  linksUser:{
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    right: 10,
    top: 12
  },
  linksContainer:{
    display: 'flex',
    height: '20px',
    position: 'relative',
    top: 10,
    justifyContent: 'flex-end',
    color: 'inherit',
    textDecoration: 'none'
  },
  pageLink:{

    marginRight: 10,
    paddingRight: 10,
    borderRight: '1px solid #686868'
  },
  userIcon:{
  }
}

export default styles
