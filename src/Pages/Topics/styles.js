import banner from '../../banner.jpg'

const styles = {
  contentContainer: (layout) =>
    layout === 'DESKTOP'?
    {
      display: 'flex',
      flexDirection: 'row',
      padding: 25,
    }:null,
  bannerContainer:{
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 190,
    maxHeight: 250
  },
  bannerTitle:{
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: 'white',
    height: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15
  }
}

export default styles
