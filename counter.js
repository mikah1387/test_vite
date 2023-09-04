
import confe from 'canvas-confetti';

export function setupCounter(element) {
  let counter = 0
 

  const setCounter = (count)=> {
    counter = count
    element.innerHTML = `count is ${counter}`
    
  }
  element.addEventListener('click', () => {
    setCounter(counter + 1)
  confe()

  })
  setCounter(0)
}
