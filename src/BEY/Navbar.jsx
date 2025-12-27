import React from 'react';

const NAVBAR = () => {
    return (
        <header className="w-full h-[64px] sm:h-[72px] flex items-center justify-between
            px-4 sm:px-8 backdrop-blur-md bg-black/30 fixed top-0 left-0 z-50">

            {/* Logo */}
            <h1 className="font-semibold select-none
                text-[22px] sm:text-[28px] md:text-[32px]
                bg-gradient-to-r from-blue-400 via-green-400 to-blue-400
                bg-clip-text text-transparent animate-gradientBlur">
                MUXSINA
            </h1>

            {/* Buttons */}
            <div className="flex items-center gap-3 sm:gap-4">

                {/* Admin Telegram */}
                <a
                    href="https://t.me/zayniddinovaaaaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            inline-flex items-center justify-center
            px-4 sm:px-6 py-2
            text-[13px] sm:text-sm md:text-base font-semibold
            rounded-lg
            bg-gradient-to-r from-blue-400 via-green-400 to-blue-400
            text-black
            hover:scale-105 active:scale-95
            transition-all duration-300
            shadow-lg shadow-blue-400/30
          "
                >
                    Admin
                </a>
            </div>
        </header>
    );
};

export default NAVBAR;
