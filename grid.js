const grid_SIZE = 21

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * grid_SIZE) + 1,
    y: Math.floor(Math.random() * grid_SIZE) + 1
  }
}

export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > grid_SIZE ||
    position.y < 1 || position.y > grid_SIZE
  )
}