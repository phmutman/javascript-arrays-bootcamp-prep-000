chocolateBars = ['snickers','hundred grand','kitkat','skittles']
lat =[1]
elem = 'foo'
ind = 1

function addElementToBeginningOfArray(lat, elem){
  
  return (['foo',...lat])
}

function destructivelyAddElementToBeginningOfArray (lat, elem){
  return ([elem, ...lat])
}

function addElementToEndOfArray(lat, elem){
  return ([...lat, elem])
}

function destructivelyAddElementToEndOfArray(lat, elem){
  return ([...lat, elem])
}

function accessElementInArray(chocolateBars, ind){
  return (chocolateBars[ind])
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars){
  return (chocolateBars.shift())
}

function removeElementFromBeginningOfArray (chocolateBars){
  return (chocolateBars.slice(1))
}