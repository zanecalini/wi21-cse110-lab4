for (let property in statistics) {
  if(property.charAt(0) == r){
    console.log(statistics[property]);
  }
  else if(statistics[property]%2 != 0){
    console.log(statistics[property]);
  }
}
