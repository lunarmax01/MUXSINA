import React from "react";

const GraphSection = () => {
  return (
    <section className="w-full py-20 sm:py-28 px-4 text-white">

      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-[26px] sm:text-3xl md:text-4xl font-bold">
          Raqamlar ham bizni tasdiqlaydi
        </h2>
        <p className="mt-4 text-white/70 text-sm sm:text-base">
          Har bir ko‘rsatkich — bu foydalanuvchilarimiz ishonchi va quvonchi.
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16">

        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-emerald-400/20 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-emerald-400">2 500+</h3>
          <p className="mt-2 text-sm text-white/70">Yuborilgan tabriklar</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-emerald-400/20 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-emerald-400">1 200+</h3>
          <p className="mt-2 text-sm text-white/70">Baxtli mijozlar</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-emerald-400/20 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-emerald-400">98%</h3>
          <p className="mt-2 text-sm text-white/70">Ijobiy fikrlar</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-emerald-400/20 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-emerald-400">24/7</h3>
          <p className="mt-2 text-sm text-white/70">Qabul va yetkazish</p>
        </div>
      </div>

      {/* Graph bars */}
      <div className="max-w-4xl mx-auto space-y-6">

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Qoniqish darajasi</span>
            <span>98%</span>
          </div>
          <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[98%] bg-gradient-to-r from-emerald-400 to-green-600 rounded-full"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Tezkorlik</span>
            <span>95%</span>
          </div>
          <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[95%] bg-gradient-to-r from-blue-400 to-green-500 rounded-full"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Takroriy buyurtmalar</span>
            <span>90%</span>
          </div>
          <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[90%] bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"></div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default GraphSection;
