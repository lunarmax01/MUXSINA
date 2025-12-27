import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import OrderDrawer from "./OrderDrawer";


const HeroSection = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const typedRef = useRef(null);


    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                "TABRIKLAR UCHUN YARATILGAN.",
                "SO‘ZLAR YETARLI BO‘LMAGANDA — TABRIK GAPIRADI.",
                "SAMIMIY HISLAR UCHUN YARATILGAN MAXSUS XIZMAT.",
                "BIR O‘QISHDA YURAKKA YETIB BORADIGAN TABRIKLAR.",
                "YAQININGIZNI HAYRATDA QOLDIRING.",
                "BAYRAMNI UNUTILMAS QILING.",
                "ODDIY SO‘Z EMAS — HISLAR IFODASI.",
                "BIR ZUMDA TABRIK, BUTUN UMRGA XOTIRA.",
                "ENG MUHIM INSONLAR UCHUN.",
                "QALBDAN CHIQQAN SO‘ZLAR BILAN.",
                "TABRIK EMAS — TUYG‘U ULASHING.",
                "HAR BIR SO‘ZIDA MEHR BOR.",
                "BUGUN TABRIKLANG, ERTAGA ESLANING.",
                "BAYRAM BOSHLANISHI SHU YERDAN."
            ],
            typeSpeed: 40,
            backSpeed: 25,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='w-full min-h-screen bg-black/30 rounded-lg mt-16 sm:mt-20 flex flex-col'>

            {/* HERO TEXT */}
            <div className='w-full flex flex-col items-center pt-10 sm:pt-14 px-4'>

                <div className='text-white text-center font-semibold 
      text-[28px] xs:text-[32px] sm:text-[42px] md:text-[62px] leading-tight'>
                    <span ref={typedRef}></span>
                </div>

                <h1 className='text-white text-center font-semibold mt-4
      text-[18px] sm:text-[24px] md:text-[35px]'>
                    BIZ SIZGA BAYRAMONA HISLAR ULASHAMIZ
                </h1>

                <p className="text-gray-300 text-center mt-4 max-w-xl
      text-[14px] sm:text-base">
                    Tabrik — bu oddiy so‘z emas, u qalbdan chiqadigan eng samimiy tuyg‘ular ifodasidir.
                    Siz yaqinlaringizni quvontiring, biz esa bu lahzani unutilmas qilamiz.
                </p>
            </div>

            {/* HOW IT WORKS */}
            <section className="w-full py-16 sm:py-24 text-white px-4">
                <h2 className="font-bold text-center mb-12
      text-[22px] sm:text-3xl md:text-4xl">
                    Qanday ishlaydi?
                </h2>

                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center items-center">

                    {/* Card */}
                    <div className="group w-full max-w-[280px] p-6 sm:p-8 rounded-2xl 
        bg-white/5 backdrop-blur-xl border border-emerald-400/30
        hover:border-emerald-400 hover:-translate-y-3 transition-all duration-300">
                        <div className="text-3xl sm:text-4xl mb-4">✍️</div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">
                            Tabrik yozing
                        </h3>
                        <p className="text-sm text-white/70">
                            Yurakdan chiqqan samimiy so‘zlaringizni yozing
                        </p>
                    </div>

                    <div className="group w-full max-w-[280px] p-6 sm:p-8 rounded-2xl 
        bg-white/5 backdrop-blur-xl border border-emerald-400/30
        hover:border-emerald-400 hover:-translate-y-3 transition-all duration-300">
                        <div className="text-3xl sm:text-4xl mb-4">📤</div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">
                            Yuboring
                        </h3>
                        <p className="text-sm text-white/70">
                            Bir zumda yaqinlaringizga yetib boradi
                        </p>
                    </div>

                    <div className="group w-full max-w-[280px] p-6 sm:p-8 rounded-2xl 
        bg-white/5 backdrop-blur-xl border border-emerald-400/30
        hover:border-emerald-400 hover:-translate-y-3 transition-all duration-300">
                        <div className="text-3xl sm:text-4xl mb-4">🎉</div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">
                            Qabul qiling
                        </h3>
                        <p className="text-sm text-white/70">
                            Quvonch va unutilmas hislarni ulashing
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className='w-full py-10 flex items-center justify-center'>
                <button
                    onClick={() => setDrawerOpen(true)}
                    className="w-[220px] sm:w-[280px] h-12
  text-[18px] sm:text-[28px]
  rounded-md bg-gradient-to-r from-blue-400 via-green-700 to-blue-400
  bg-clip-text text-transparent animate-gradientBlur">
                    buyurtma berish
                </button>

                <OrderDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

            </div>
        </div>

    );
};

export default HeroSection;
