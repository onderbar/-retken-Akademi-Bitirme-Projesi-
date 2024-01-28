import React, { useState, useEffect } from 'react';
import './bant1.css';

const Bant1 = () => {
  const [text, setText] = useState("Mega Akademi ile Yepyeni Yolculuğa Hazır Mısınız?");

  useEffect(() => {
    const textLoad = () => {
      setText("Bilgi İnovasyon ve Başarıya");
      setTimeout(() => {
        setText("İnovasyon ve Başarıya");
      }, 4000); // Önceki değerden 2000 milisaniye daha uzun bir süre bekletiyoruz
      setTimeout(() => {
        setText("Giden Yolda Birlikte Yürüyoruz!");
      }, 8000); // Önceki değerden 4000 milisaniye daha uzun bir süre bekletiyoruz
    };

    textLoad();
    const intervalId = setInterval(textLoad, 12000); // Interval süresini artırdık

    // Temizlik işlemi
    return () => clearInterval(intervalId);
  }, []); // Boş dependency array ile sadece bir kere çalışmasını sağlıyoruz.

  return (
    <div className="container">
      <span className="text first-text">"Mega Akademi "</span>{" "}
      <span className="text sec-text">{text}</span>
    </div>
  );
};

export default Bant1;
