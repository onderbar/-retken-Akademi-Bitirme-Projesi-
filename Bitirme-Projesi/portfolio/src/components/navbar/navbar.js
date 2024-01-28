import React, { useState, useRef } from 'react';
import './navbar.css';
import Logo from '../../images/Meram Belediyesi.png';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('anasayfa');
  const slaytRef = useRef(null);

  const handleLinkClick = (page) => {
    setCurrentPage(page);

    // Eğer 'portfolyo' seçildiyse ve ref mevcut ise kaydırma işlemini gerçekleştir
    if (page === 'portfolyo' && slaytRef.current) {
      // 'birlikteYonetiyoruz' id'sine sahip elemente kaydır
      const birlikteYonetiyoruzElement = document.getElementById('birlikteYonetiyoruz');
      if (birlikteYonetiyoruzElement) {
        birlikteYonetiyoruzElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="nav">
      <a href="https://www.meram.bel.tr/">
        <img src={Logo} alt="Logo" />
      </a>
      <ul>
        <li onClick={() => handleLinkClick('anasayfa')}><a href="/">Anasayfa</a></li>
        <li><a href="/hizmetlerimiz.html" target='_blank'>Hizmetlerimiz</a></li>
        <li><a href="">Portföyümüz</a></li>
        <li onClick={() => handleLinkClick('hakkimizda')}><a href='/haberler.html'>Haberler</a></li>
        <li onClick={() => handleLinkClick('surec')}><a href="/meram.html">Meram</a></li>
        <li onClick={() => handleLinkClick('ekibimiz')}><a href="/ekip.html" target='_blank'>Ekibimiz</a></li>
        <li onClick={() => handleLinkClick('iletisim')}><a href="/iletişim.html" target='_blank'>İletişim</a></li>
      </ul>
      <i className="fa fa-thin fa-shop"></i>
      <button ><a href='/teklifformu.html' target='_blank'>Başkana Mesaj</a></button>
      {/* Slayt bölümüne referans ekleyin */}
      <div ref={slaytRef}></div>
    </div>
  );
};

export default Navbar;
