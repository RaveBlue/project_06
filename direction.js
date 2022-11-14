let snakeDirection = { x: 0, y: 0 }
let lastsnakeDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      if(lastsnakeDirection.y !== 0) break
      snakeDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown' :
      if(lastsnakeDirection.y !== 0) break
      snakeDirection = { x: 0, y: 1 } 
      break
    case 'ArrowLeft' :
      if(lastsnakeDirection.x !== 0) break
      snakeDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight' :
      if(lastsnakeDirection.x !== 0) break
      snakeDirection = { x: 1, y: 0 }
      break
      


  }
})


export function getsnakeDirection() {

  lastsnakeDirection = snakeDirection
  return snakeDirection
}