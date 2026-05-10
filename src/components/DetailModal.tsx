import React, { useEffect, memo } from 'react';
import { createPortal } from 'react-dom';
import './DetailModal.css';

interface DetailModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  items?: Array<{ title: string; description: string }>;
  onClose: () => void;
  isDark?: boolean;
}

export const DetailModal: React.FC<DetailModalProps> = memo(function DetailModal({
  isOpen,
  title,
  items = [],
  onClose,
  isDark = true
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Add small delay to prevent immediate closing from propagated events
    const timeoutId = setTimeout(() => {
      document.addEventListener('keydown', handleEscape);
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div className="detail-modal-overlay" onClick={onClose}>
      <div className={`detail-modal ${isDark ? 'dark' : 'light'}`} onClick={(e) => e.stopPropagation()}>
        <button
          className="detail-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Title Section - Like a card */}
        <div className="detail-modal__title-card">
          <h2 className="detail-modal__title">{title}</h2>
        </div>

        {/* Details Section */}
        {items.length > 0 && (
          <div className="detail-modal__details-section">
            <h3 className="detail-modal__details-title">Details</h3>
            <div className="detail-modal__items">
              {items.map((item, index) => (
                <div key={index} className="detail-modal__item">
                  <h4 className="detail-modal__item-title">{item.title}</h4>
                  <p className="detail-modal__item-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Use portal to render outside the overflow container
  return createPortal(modalContent, document.body);
});
