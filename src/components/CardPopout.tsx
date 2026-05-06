import React, { useEffect, useRef, memo } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import './CardPopout.css';

interface CardPopoutProps {
  x: number;
  y: number;
  isVisible: boolean;
  onViewDetail: () => void;
  onClose: () => void;
}

export const CardPopout: React.FC<CardPopoutProps> = memo(function CardPopout({
  x,
  y,
  isVisible,
  onViewDetail,
  onClose
}) {
  const popoutRef = useRef<HTMLDivElement>(null);
  const eventListenersRef = useRef(false);

  useEffect(() => {
    if (!popoutRef.current) return;

    if (isVisible) {
      gsap.killTweensOf(popoutRef.current);
      gsap.to(popoutRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: 'back.out(1.7)'
      });
    } else {
      gsap.killTweensOf(popoutRef.current);
      gsap.to(popoutRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.15,
        ease: 'back.in(1.7)'
      });
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || eventListenersRef.current) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (popoutRef.current && !popoutRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    eventListenersRef.current = true;

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      eventListenersRef.current = false;
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const popoutContent = (
    <div
      ref={popoutRef}
      className="card-popout"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        opacity: 0,
        transform: 'scale(0.8)'
      }}
    >
      <button
        className="card-popout__button"
        onClick={(e) => {
          e.stopPropagation();
          onViewDetail();
        }}
      >
        <span className="card-popout__icon">👁️</span>
        <span className="card-popout__text">View in Detail</span>
      </button>
    </div>
  );

  return createPortal(popoutContent, document.body);
});
