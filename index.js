// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  return Math.abs(num - 42);
}

function distanceFromHqInFeet(num) {
  return (distanceFromHqInBlocks(num) * 264);
}

function distanceTravelledInFeet(start, end) {
  return (Math.abs(end - start) * 264);
}

function calculatesFarePrice(start, end) {
  d = distanceTravelledInFeet(start, end)
  if(d < 400) {
      return 0;
  } else if(d<2000) {
      return d*0.02;
  } else if(d<2500) {
      return 25;
  } else {
      return 'cannot travel that far';
  }
}
