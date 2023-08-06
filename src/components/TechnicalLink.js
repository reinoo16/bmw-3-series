import React from 'react'

function TechnicalLink() {
    return (
        <section id='technical'>
            <div className='container'>
                <div className='technical-title'>
                    <h1>YENİ BMW 3 SERİSİ SEDAN’IN TEKNİK VERİLERİ.</h1>
                </div>
                <div className='technical'>
                    <div className='technical-img'></div>
                    <div className='technical-texts'>
                        <div>
                            <h2>1/dk'da kW (bg) cinsinden motor gücü</h2>
                            <h2>125 (170)</h2>
                        </div>
                        <div>
                            <h2>0–100 km/sa hızlanma (sn)</h2>
                            <h2>8,1</h2>
                        </div>
                        <div>
                            <h2>Ortalama yakıt tüketimi (litre/100 km)</h2>
                            <h2>7,3-8,2</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnicalLink;