const styles={
  container: (layout) =>
  layout === 'MOBILE' ?
    {
      cursor: 'pointer',
      color: '#009688',
      backgroundColor: '#EEEEEE',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20
    } : {
      backgroundColor: '#EEEEEE',
      paddingBottom: 10,
      width: 250,
      flaxGrow: 1
    },
  filterQuant:{
    display: 'inline-block',
    color: '#FFFFFF',
    fontSize: 12,
    backgroundColor: '#009688',
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: '50%',
    fontWeight: 'bold'
  }
}

export default styles
