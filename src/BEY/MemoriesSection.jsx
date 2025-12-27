import React, { useState } from "react";

const MemoriesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const cards = [
    {
      emoji: "💌",
      title: "Samimiy tabriklar",
      desc: "Qalbdan chiqqan so‘zlar eng uzoq eslanadi. Biz esa ularni mukammal shaklga keltiramiz.",
    },
    {
      emoji: "🎁",
      title: "Maxsus yondashuv",
      desc: "Har bir inson o‘ziga xos. Tabriklar ham aynan shunday bo‘lishi kerak.",
    },
    {
      emoji: "✨",
      title: "Unutilmas taassurot",
      desc: "Birgina tabrik bilan quvonch, hayrat va samimiy hislarni ulashing.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const botToken = "8337342369:AAHLHM2c5GhY1cNJfSdMUqwZCmbGeFavB-E";
    const chatId = "7167633948";

    const text = `💚 Yangi xotira\n\n👤 Ism: ${name}\n📝 Tabrik: ${message}`;

    try {
      await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`
      );
      setName("");
      setMessage("");
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="w-full py-20 px-4 text-white relative overflow-hidden">
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-[24px] sm:text-3xl md:text-4xl font-bold">
          Eng qimmatli xotiralar shu yerdan boshlanadi
        </h2>
        <p className="mt-4 text-white/70 text-sm sm:text-base">
          Har bir tabrik — umr bo‘yi eslanadigan his.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl
            border border-emerald-400/20 hover:border-emerald-400
            transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-3xl mb-4">{card.emoji}</div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-white/70">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3 rounded-xl font-semibold text-black
          bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400
          shadow-lg shadow-emerald-500/30 hover:scale-105 transition"
        >
          O‘z xotirangizni yarating
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-[92%] max-w-md p-6 rounded-2xl
            bg-[#0f172a]/90 border border-emerald-400/30 relative">

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-xl"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-6 text-center">
              Xotira yaratish
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Ismingiz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/5 border
                border-white/10 text-white placeholder-white/50
                focus:outline-none focus:border-emerald-400"
                required
              />

              <textarea
                placeholder="Tabrik matni"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full p-3 rounded-lg bg-white/5 border
                border-white/10 text-white placeholder-white/50
                focus:outline-none focus:border-emerald-400 resize-none"
                required
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 rounded-lg font-semibold text-black
                bg-emerald-400 hover:bg-emerald-500 transition disabled:opacity-50"
              >
                {sending ? "Yuborilmoqda..." : "Yuborish"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default MemoriesSection;
