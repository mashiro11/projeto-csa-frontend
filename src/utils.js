const formatDate = (dateStringFormat, showHour) => {
  let date = dateStringFormat
    .substring(0, dateStringFormat.indexOf('T'))
    .replace(/-/g,'/')

  if(showHour){
    let time = dateStringFormat
                .substring(dateStringFormat.indexOf('T')+1, dateStringFormat.indexOf(':', dateStringFormat.indexOf(':')+1))
    date += ' ' + time
  }
  return date
}

export { formatDate }
