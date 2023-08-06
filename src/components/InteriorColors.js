import React, { useState } from 'react';
import interiorColor1 from '../svg/interiorColor1.svg';
import InteriorColor2 from '../svg/interiorColor2.svg';
import interiorColor3 from '../svg/interiorColor3.svg';
import interiorColor4 from '../svg/interiorColor4.svg';
import interiorColor5 from '../svg/interiorColor5.svg';
import bmwInteriorColor1 from '../img/bmw-i-c1.jpg';
import bmwInteriorColor2 from '../img/bmw-i-c2.jpg';
import bmwInteriorColor3 from '../img/bmw-i-c3.jpg';
import bmwInteriorColor4 from '../img/bmw-i-c4.jpg';
import bmwInteriorColor5 from '../img/bmw-i-c5.jpg';


function InteriorColors() {

    const [interiorColor, setInteriorColor] = useState(bmwInteriorColor1);

    const changeInterior = (iColor) => {
        setInteriorColor(iColor);
    }

    const [interiorColorName, setInteriorColorName] = useState('Siyah/Alcantara-Sensatec/Mavi');

    const changeInteriorColorName = (interiorColor) => {
        setInteriorColorName(interiorColor);
    }

    return (
        <section>
            <div className='interior-panel'>
                <div className='panel-texts'>
                    <div className='panel-title'>
                        <h1>İç Görünüm</h1>
                        <h2>Döşeme Rengi</h2>
                    </div>
                    <div className='colors'>
                        <img onClick={() => {
                            changeInterior(`${bmwInteriorColor1}`);
                            changeInteriorColorName('Siyah/Alcantara-Sensatec/Mavi');
                        }} className='interior-c1' src={interiorColor1} />
                        <img onClick={() => {
                            changeInterior(`${bmwInteriorColor2}`);
                            changeInteriorColorName('Tacora Kırmızı/Sensatec Perfore');
                        }} className='interior-c2' src={InteriorColor2} />
                        <img onClick={() => {
                            changeInterior(`${bmwInteriorColor3}`);
                            changeInteriorColorName('Cognac/Sensatec Perfore');
                        }} className='interior-c3' src={interiorColor3} />
                        <img onClick={() => {
                            changeInterior(`${bmwInteriorColor4}`);
                            changeInteriorColorName('Mocha/Vernasca Deri');
                        }} className='interior-c4' src={interiorColor4} />
                        <img onClick={() => {
                            changeInterior(`${bmwInteriorColor5}`);
                            changeInteriorColorName('Oyster/Vernasca Deri');
                        }} className='interior-c5' src={interiorColor5} />
                    </div>
                    <div className='color-name'>
                        <h2>Renk İsmi</h2>
                        <p>{`${interiorColorName}`}</p>
                    </div>
                </div>
                <div className='interior-panel-img' style={{ backgroundImage: `url(${interiorColor})` }}></div>
            </div>
        </section>
    )
}

export default InteriorColors;