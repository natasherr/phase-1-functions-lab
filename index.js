function distanceFromHqInBlocks (blockNumber) {
  const hqBlock = 42
  if(blockNumber>hqBlock) {
    return blockNumber - hqBlock
  }
  else if(blockNumber<hqBlock) {
    return hqBlock - blockNumber
  }
}

function distanceFromHqInFeet (blockNumber) {
    const hqBlock = 42
    if(blockNumber>hqBlock) {
        return ((blockNumber - hqBlock) *264)
      }
      else if(blockNumber<hqBlock) {
        return ((hqBlock - blockNumber) *264)
      }
}

function distanceTravelledInFeet (blockNumber, endPoint) {
    const hqBlock = 42
    if(blockNumber>hqBlock) {
        return ((endPoint - blockNumber)* 264)
      }
      else if(blockNumber<hqBlock) {
        return ((blockNumber - endPoint)* 264)
      }
}

function calculatesFarePrice (blockNumber, destination) {
    const hqBlock = 42
    let result1 = distanceTravelledInFeet(blockNumber, destination)
      if(result1>=0 && result1<400) {
        return 0
      }

      else if(result1>=400 && result1<=2000) {
        return (result1 - 400) * 0.02
      }

      else if(result1>=2001 && result1<=2499){
        return 25
      }

      else if (result1>=2500) {
        return "cannot travel that far"
      }  
}


 
