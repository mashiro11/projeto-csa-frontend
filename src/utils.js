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

const createPopulateStringFromArray = (populateArray) => {
  let populateString="?";
  for(let i = 0; i < populateArray.length; i++){
    populateString += `populate[${i}]=${populateArray[i]}`
    if(i < populateArray.length - 1)
      populateString += "&" 
  }
  return populateString
}

export { formatDate, createPopulateStringFromArray }
