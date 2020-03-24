const formatDate = (dateStringFormat, showHour) => {
  let date = dateStringFormat
    .substring(0, dateStringFormat.indexOf('T'))
    .split('-')
  date = date[2] + "/" + date[1] + "/" + date[0]

  if(showHour){
    let time = dateStringFormat
                .substring(dateStringFormat.indexOf('T')+1, dateStringFormat.indexOf(':', dateStringFormat.indexOf(':')+1))
    date += ' ' + time
  }
  return date
}

export { formatDate }
