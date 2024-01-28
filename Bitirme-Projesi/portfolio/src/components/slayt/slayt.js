import React, { useRef } from 'react';
import './slayt.css';
import Resim1 from '../../images/resim1.jpg';
import Resim2 from '../../images/resim2.jpg';
import Resim3 from '../../images/resim3.jpg';

const projects = [
  {
    id: 1,
    title: 'Proje 1',
    description: 'Meram Yaka Sosyal Tesisi',
    image: Resim1,
    link: 'https://www.meram.bel.tr/proje/meram-yaka-sosyal-tesisi',
  },
  {
    id: 2,
    title: 'Proje 2',
    description: 'Yıldız Köşkü Hariciyesi',
    image: Resim2,
    link: 'https://www.meram.bel.tr/proje/yildiz-kosku-hariciyesi',
  },
  {
    id: 3,
    title: 'Proje 3',
    description: 'Bizim Meram Köyü Konut Yapı Kooperatifi',
    image: Resim3,
    link: 'https://www.meram.bel.tr/proje/bizim-meram-koyu-konut-yapi-kooperatifi',
  },
  // Diğer projeleri buraya ekleyebilirsiniz.
];

const Slayt = () => {
  const slaytRef = useRef(null);

  return (
    <div ref={slaytRef}>
      <div className='kart'>
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 kart-item">
            <div className="cerceve">
              <div className="kut">
                <img src={project.image} alt={project.title} />
                <p>{project.description}</p>
                <h4>{project.title}</h4>
                <button><a href={project.link} target="_blank" rel="noopener noreferrer">Daha Fazla</a></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slayt;
