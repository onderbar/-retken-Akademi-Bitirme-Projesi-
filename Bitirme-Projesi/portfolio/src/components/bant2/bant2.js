import React, { useRef } from 'react';
import './bant2.css';

const Bant2 = () => {
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bant1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="dalga3">
        <path fill="#8b610d" fillOpacity="1" d="M0,128L40,133.3C80,139,160,149,240,149.3C320,149,400,139,480,117.3C560,96,640,64,720,58.7C800,53,880,75,960,122.7C1040,171,1120,245,1200,240C1280,235,1360,149,1400,106.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="dalga2">
        <path fill="#e3c589" fillOpacity="1" d="M0,192L21.8,208C43.6,224,87,256,131,224C174.5,192,218,96,262,101.3C305.5,107,349,213,393,245.3C436.4,277,480,235,524,229.3C567.3,224,611,256,655,250.7C698.2,245,742,203,785,197.3C829.1,192,873,224,916,218.7C960,213,1004,171,1047,138.7C1090.9,107,1135,85,1178,112C1221.8,139,1265,213,1309,245.3C1352.7,277,1396,267,1418,261.3L1440,256L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="dalga">
        <path fill="#fff" fillOpacity="1" d="M0,192L21.8,186.7C43.6,181,87,171,131,176C174.5,181,218,203,262,218.7C305.5,235,349,245,393,240C436.4,235,480,213,524,208C567.3,203,611,213,655,218.7C698.2,224,742,224,785,202.7C829.1,181,873,139,916,133.3C960,128,1004,160,1047,154.7C1090.9,149,1135,107,1178,106.7C1221.8,107,1265,149,1309,160C1352.7,171,1396,149,1418,138.7L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
      </svg>
     
      <div  className="container dem">
        <div className="row">
          <div className="col-md-6">
            <div id="hizalama">
              <h1 ref={targetRef}>Birlikte Yönetiyoruz</h1>
              <p>"Meram Belediyesi için Akılda Kalıcı Çözümler Üreten Web Tasarım Uzmanları"</p>
              <button type="button" className="btn btn-primary btn-lg" onClick={scrollToTarget}><a href='https://www.meram.bel.tr/' style={{ textDecoration:'none', color:'#fff'}} target='_blank'>Hakkımda</a></button>
            </div>
          </div>
          <div className="col-md-6">
            <div id="cerceve">
              <div id="kutu">
                <p style={{ marginBottom: '50px' }} id="birlikteYonetiyoruz">
                  "Meram Belediyesi için özel olarak tasarlanmış web siteleriyle şehrimizi dijital dünyada temsil etmekten ve sürdürülebilir çözümler sunmaktan gurur duyuyoruz. Biz, web sitesi tasarım uzmanlığımızı kullanarak 'Birlikte Yönetiyoruz' felsefesini benimseyerek Meram Belediyesi'nin vizyonunu, hizmetlerini ve kültürünü sanal platformlarda akılda kalıcı ve etkileyici bir şekilde iletiyoruz. Sadece bir web sitesi değil, aynı zamanda bir deneyim sunuyoruz. Meram'ı bir adım öteye taşımak için buradayız!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bant2;
