import { useState, useEffect } from 'react'

function TypingAnimation({ texts, typingSpeed = 100, pauseDuration = 1000, deleteSpeed = 50 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const text = texts[currentTextIndex]
    
    if (isTyping && !isDeleting) {
      if (currentText.length < text.length) {
        const timer = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setIsDeleting(true)
        }, pauseDuration)
        return () => clearTimeout(timer)
      }
    } else if (isDeleting) {
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deleteSpeed)
        return () => clearTimeout(timer)
      } else {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }
  }, [currentText, currentTextIndex, isTyping, isDeleting, texts, typingSpeed, pauseDuration, deleteSpeed])

  return (
    <div className="min-h-[3rem]">
      <span className="text-2xl md:text-3xl font-medium text-gray-300">
        {currentText}
        <span className="text-blue-400 animate-pulse">|</span>
      </span>
    </div>
  )
}

export default TypingAnimation