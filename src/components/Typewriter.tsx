import { useEffect, useState, useRef, memo } from 'react';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  delayBetweenTexts?: number;
  className?: string;
  cursorClassName?: string;
  onTextChange?: (index: number) => void;
}

const Typewriter = memo(function Typewriter({
  texts,
  speed = 50,
  delayBetweenTexts = 2000,
  className = '',
  cursorClassName = '',
  onTextChange
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const cursorIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const typewriterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Blink cursor - with proper cleanup
  useEffect(() => {
    cursorIntervalRef.current = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    
    return () => {
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current);
      }
    };
  }, []);

  // Typewriter effect - with proper cleanup
  useEffect(() => {
    const currentText = texts[textIndex];
    
    if (!isDeleting && charIndex < currentText.length) {
      // Typing
      typewriterTimeoutRef.current = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Pause before deleting
      typewriterTimeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenTexts);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      typewriterTimeoutRef.current = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } else if (isDeleting && charIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      const nextIndex = (textIndex + 1) % texts.length;
      setTextIndex(nextIndex);
      // Notify parent component of text change
      if (onTextChange) {
        onTextChange(nextIndex);
      }
    }

    return () => {
      if (typewriterTimeoutRef.current) {
        clearTimeout(typewriterTimeoutRef.current);
      }
    };
  }, [charIndex, isDeleting, textIndex, texts, speed, delayBetweenTexts, onTextChange]);

  return (
    <span className={`inline-block min-w-56 ${className}`}>
      {displayText}
      <span className={`${cursorClassName} ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  );
});

Typewriter.displayName = 'Typewriter';

export default Typewriter;
