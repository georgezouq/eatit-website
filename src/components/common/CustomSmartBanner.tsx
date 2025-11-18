"use client";

import Image from "next/image";
import { useSmartBanner } from "@/hooks/useSmartBanner";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

interface CustomSmartBannerProps {
  dictionary: LocaleDictionary;
  appId?: string;
  className?: string;
  rating?: number;
  reviewCount?: number;
}

/**
 * Custom Smart Banner component for iOS Safari
 * 
 * Features:
 * - Only shows on Safari Web environment
 * - Not shown in Expo environment
 * - Not shown in WebView
 * - Modern and beautiful design
 * - Supports closing and remembering the state
 */
export function CustomSmartBanner({ 
  dictionary,
  appId, 
  className = '',
  rating = 4.9,
  reviewCount = 2138
}: CustomSmartBannerProps) {
  const { shouldShow, dismiss, appStoreUrl } = useSmartBanner({ appId });

  // Debug logging
  console.log('[CustomSmartBanner] Render:', {
    shouldShow,
    hasDictionary: !!dictionary,
    appStoreUrl
  });

  if (!shouldShow) return null;

  const handleOpenApp = () => {
    window.location.href = appStoreUrl;
  };

  // Get localized text
  const appName = dictionary.smartBanner.appName;
  const viewText = dictionary.smartBanner.view;
  const closeLabel = dictionary.smartBanner.close;

  // Format review count
  const formatReviewCount = (count: number): string => {
    if (count >= 10000) {
      return `${(count / 10000).toFixed(1)}万`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div
      className={`smart-banner-wrapper ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        paddingTop: 'env(safe-area-inset-top, 0px)',
        animation: 'smartBannerSlideDown 0.3s ease-out forwards'
      }}
    >
      <div 
        className="smart-banner"
        style={{
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
        }}
      >
        <div 
          className="container"
          style={{
            maxWidth: '100%',
            padding: '12px 16px'
          }}
        >
          <div 
            className="d-flex align-items-center justify-content-between"
            style={{ gap: '12px' }}
          >
            {/* App Icon */}
            <div style={{ flexShrink: 0 }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                  background: '#fff',
                  position: 'relative'
                }}
              >
                <Image
                  src="/favicon.png"
                  alt={appName}
                  width={48}
                  height={48}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>

            {/* App Info */}
            <div 
              style={{ 
                flex: 1, 
                minWidth: 0 
              }}
            >
              <h3 
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1a1a1a',
                  margin: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {appName}
              </h3>
              <div 
                className="d-flex align-items-center"
                style={{ 
                  gap: '8px', 
                  marginTop: '2px' 
                }}
              >
                {/* Rating Stars */}
                <div 
                  className="d-flex align-items-center"
                  style={{ gap: '2px' }}
                >
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      style={{ 
                        fontSize: '10px',
                        color: index < Math.floor(rating) ? '#FFB800' : '#D1D5DB'
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                {/* Rating Number and Review Count */}
                <span 
                  style={{
                    fontSize: '12px',
                    color: '#666',
                    fontWeight: 500
                  }}
                >
                  {rating.toFixed(1)}
                </span>
                <span 
                  style={{
                    fontSize: '12px',
                    color: '#999'
                  }}
                >
                  ({formatReviewCount(reviewCount)})
                </span>
              </div>
            </div>

            {/* Open Button */}
            <button
              onClick={handleOpenApp}
              className="btn"
              style={{
                flexShrink: 0,
                padding: '6px 16px',
                background: 'var(--prime-one, #007AFF)',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '20px',
                border: 'none',
                boxShadow: '0 2px 8px rgba(0, 122, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label={dictionary.smartBanner.viewInAppStore}
            >
              {viewText}
            </button>

            {/* Close Button */}
            <button
              onClick={dismiss}
              className="btn"
              style={{
                flexShrink: 0,
                width: '28px',
                height: '28px',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
              aria-label={closeLabel}
            >
              <i 
                className="bi bi-x" 
                style={{ 
                  fontSize: '20px', 
                  color: '#666',
                  lineHeight: 1
                }}
              />
            </button>
          </div>
        </div>

        {/* Bottom gradient shadow */}
        <div 
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent)'
          }}
          aria-hidden="true"
        />
      </div>

      <style jsx>{`
        @keyframes smartBannerSlideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

