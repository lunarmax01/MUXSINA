import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-20 px-4 pb-8 text-white">

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 sm:pt-8 md:pt-10">

        {/* TOP */}
        <div className="
          flex flex-row justify-between items-start
          sm:items-center
          gap-4 sm:gap-8 md:gap-12
        ">

          {/* LOGO + DESC */}
          <div className="flex-1">
            <h2 className="
              text-[18px]
              sm:text-[22px]
              md:text-[26px]
              lg:text-[30px]
              font-semibold
              bg-gradient-to-r from-blue-400 via-green-400 to-blue-400
              bg-clip-text text-transparent animate-gradientBlur
            ">
              MUXSINA
            </h2>

            <p className="
              mt-1 sm:mt-2
              text-[10px]
              sm:text-xs
              md:text-sm
              text-white/60
              max-w-[160px]
              sm:max-w-[240px]
              md:max-w-[320px]
            ">
              Qalbdan chiqqan tabriklar bilan eng muhim insonlarni quvontiring.
            </p>
          </div>

          {/* LINKS */}
          <div className="
            flex flex-row
            gap-4
            sm:gap-8
            md:gap-12
            lg:gap-16
          ">

            {/* Pages */}
            <div>
              <h3 className="
                text-[11px]
                sm:text-xs
                md:text-sm
                font-semibold
                mb-1 sm:mb-2
              ">
                Sahifalar
              </h3>
              <ul className="
                space-y-[2px]
                sm:space-y-1
                md:space-y-2
                text-[10px]
                sm:text-xs
                md:text-sm
                text-white/60
              ">
                <li className="hover:text-white transition">Bosh sahifa</li>
                <li className="hover:text-white transition">Qanday ishlaydi</li>
                <li className="hover:text-white transition">Natijalar</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="
                text-[11px]
                sm:text-xs
                md:text-sm
                font-semibold
                mb-1 sm:mb-2
              ">
                Aloqa
              </h3>
              <ul className="
                space-y-[2px]
                sm:space-y-1
                md:space-y-2
                text-[10px]
                sm:text-xs
                md:text-sm
                text-white/60
              ">
                <li className="hover:text-white transition">Telegram</li>
                <li className="hover:text-white transition">Instagram</li>
                <li className="hover:text-white transition">Admin</li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="
          mt-4 sm:mt-6 md:mt-8
          pt-3 sm:pt-4
          border-t border-white/5
          flex flex-row justify-between items-center
          text-[9px]
          sm:text-[10px]
          md:text-xs
          text-white/40
        ">
          <p>© {new Date().getFullYear()} MUXSINA</p>
          <p>Made with ❤️</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
