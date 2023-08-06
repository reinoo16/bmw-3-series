import React, { useState } from 'react';
import exteriorColor1 from '../svg/exteriorColor1.svg';
import exteriorColor2 from '../svg/exteriorColor2.svg';
import exteriorColor3 from '../svg/exteriorColor3.svg';
import exteriorColor4 from '../svg/exteriorColor4.svg';
import exteriorColor5 from '../svg/exteriorColor5.svg';
import exteriorColor6 from '../svg/exteriorColor6.svg';
import exteriorColor7 from '../svg/exteriorColor7.svg';
import exteriorColor8 from '../svg/exteriorColor8.svg';
import bmwColor1 from '../img/bmw-e-c1.png';
import bmwColor2 from '../img/bmw-e-c2.png';
import bmwColor3 from '../img/bmw-e-c3.png';
import bmwColor4 from '../img/bmw-e-c4.png';
import bmwColor5 from '../img/bmw-e-c5.png';
import bmwColor6 from '../img/bmw-e-c6.png';
import bmwColor7 from '../img/bmw-e-c7.png';
import bmwColor8 from '../img/bmw-e-c8.png';

function ExteriorColors() {

    const [selectedColor, setSelectedColor] = useState(bmwColor1);

    const changeColor = (color) => {
        setSelectedColor(color);
    }

    const [colorName, setColorName] = useState('Metalik Siyah/Sapphire');

    const changeColorName = (name) => {
        setColorName(name)
    }

    return (
        <section>
            <div className='exterior-panel'>
                <div className='panel-texts'>
                    <div className='panel-title'>
                        <h1>Dış Görünüm</h1>
                        <h2>Gövde Rengi</h2>
                    </div>
                    <div className='colors'>
                        <img onClick={() => {
                            changeColor(`${bmwColor1}`);
                            changeColorName('Metalik Siyah/Sapphire');
                        }} className='exterior-c1' src={exteriorColor1} />
                        <img onClick={() => {
                            changeColor(`${bmwColor2}`);
                            changeColorName('Metalik Kırmızı/Melbourne');
                        }} className='exterior-c2' src={exteriorColor2} />
                        <img onClick={() => {
                            changeColor(`${bmwColor3}`);
                            changeColorName('Metalik Beyaz/Mineral');
                        }} className='exterior-c3' src={exteriorColor3} />
                        <img onClick={() => {
                            changeColor(`${bmwColor4}`);
                            changeColorName('Metalik Mavi/Portimao');
                        }} className='exterior-c4' src={exteriorColor4} />
                        <img onClick={() => {
                            changeColor(`${bmwColor5}`);
                            changeColorName('Metalik Gri/Brooklyn');
                        }} className='exterior-c5' src={exteriorColor5} />
                        <img onClick={() => {
                            changeColor(`${bmwColor6}`);
                            changeColorName('Metalik Gri/Skyscraper');
                        }} className='exterior-c6' src={exteriorColor6} />
                        <img onClick={() => {
                            changeColor(`${bmwColor7}`);
                            changeColorName('Metalik Gri/Dravit');
                        }} className='exterior-c7' src={exteriorColor7} />
                        <img onClick={() => {
                            changeColor(`${bmwColor8}`);
                            changeColorName('Metalik Mavi/Tanzanite');
                        }} className='exterior-c8' src={exteriorColor8} />
                    </div>
                    <div className='color-name'>
                        <h2>Renk İsmi</h2>
                        <p>{`${colorName}`}</p>
                    </div>
                </div>
                <div className='exterior-panel-img' style={{ backgroundImage: `url(${selectedColor})` }}></div>
            </div>
        </section>
    )
}

export default ExteriorColors;