import { useState } from 'react'

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  const switchDisplay = () => setIsShowing(current => !current)

  return [
    isShowing,
    switchDisplay
  ]
}

export default useModal