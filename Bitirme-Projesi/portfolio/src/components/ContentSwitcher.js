// ContentSwitcher.js
import React from 'react';

const ContentSwitcher = ({ currentPage }) => {
  const renderPageContent = () => {
    switch (currentPage) {
      case 'hizmetlerim':
        return (
          <div>
            <h1>Hizmetlerim Sayfası</h1>
            {/* Hizmetlerinizin içeriği buraya gelecek */}
          </div>
        );
      case 'anasayfa':
        return (
          <div>
            <h1>Anasayfa Sayfası</h1>

            
            {/* Anasayfa içeriği buraya gelecek */}
          </div>
        );
      // Diğer sayfa durumları ve içerikleri buraya eklenir
      default:
        return null;
    }
  };

  const pageContent = renderPageContent();

  return (
    <div>
      {pageContent}
    </div>
  );
};

export default ContentSwitcher;
