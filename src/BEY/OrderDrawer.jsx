import React, { useState } from "react";

const OrderDrawer = ({ open, onClose }) => {
  const [form, setForm] = useState({
    customerName: "",
    customerPhone: "+998",
    receiverName: "",
    receiverAge: "",
    receiverPhone: "+998",
    telegramUser: "",
  });

  const [loading, setLoading] = useState(false);

  const isValid = Object.values(form).every(v => v.trim() !== "" && v !== "+998");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Telefon raqamlarni formatlash
    if (name === "customerPhone" || name === "receiverPhone") {
      let digits = value.replace(/\D/g, "");
      if (!digits.startsWith("998")) digits = "998" + digits;
      setForm({ ...form, [name]: "+" + digits });
    } else if (name === "telegramUser") {
      // Telegram username @ bilan
      let val = value;
      if (!val.startsWith("@")) val = "@" + val.replace(/[^a-zA-Z0-9_]/g, "");
      else val = val.replace(/[^@a-zA-Z0-9_]/g, "");
      setForm({ ...form, telegramUser: val });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleFocus = (e) => {
    if ((e.target.name === "customerPhone" && !form.customerPhone) ||
        (e.target.name === "receiverPhone" && !form.receiverPhone)) {
      setForm({ ...form, [e.target.name]: "+998" });
    }
  };

  const handleSubmit = async () => {
    if (!isValid) return;

    const TELEGRAM_BOT_TOKEN = "8337342369:AAHLHM2c5GhY1cNJfSdMUqwZCmbGeFavB-E"; // ⚠️ O'zingiz bot token
    const CHAT_ID = "8187499623"; // ⚠️ Admin chat ID

    const text = `
📩 YANGI BUYURTMA
👤 Buyurtmachi: ${form.customerName}
📞 ${form.customerPhone}

🎁 Qabul qiluvchi: ${form.receiverName}
🎂 Yoshi: ${form.receiverAge}
📱 ${form.receiverPhone}

🔗 Telegram: ${form.telegramUser}
`;

    setLoading(true);

    try {
      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      });

      const data = await res.json();
      if (!data.ok) throw new Error(data.description);

      alert("✅ Buyurtma Telegramga yuborildi!");
      onClose();
      setForm({
        customerName: "",
        customerPhone: "+998",
        receiverName: "",
        receiverAge: "",
        receiverPhone: "+998",
        telegramUser: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Xatolik yuz berdi: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />

      {/* Drawer */}
      <div className={`
        absolute right-0 top-0 h-full
        w-[100%] xs:w-[360px] sm:w-[400px]
        bg-white/5 backdrop-blur-2xl
        border-l border-white/10
        px-5 py-6
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold
            bg-gradient-to-r from-blue-400 via-green-400 to-blue-400
            bg-clip-text text-transparent">
            Buyurtma berish
          </h2>
          <button onClick={onClose} className="text-white/60 hover:text-white text-2xl">✕</button>
        </div>

        {/* Inputs */}
        <div className="space-y-3">
          {[
            { name: "customerName", placeholder: "Ismingiz" },
            { name: "customerPhone", placeholder: "Telefon raqamingiz", type: "tel" },
            { name: "receiverName", placeholder: "Tabrik oluvchi F.I.Sh" },
            { name: "receiverAge", placeholder: "Tabrik oluvchi yoshi", type: "number" },
            { name: "receiverPhone", placeholder: "Tabrik oluvchi raqami", type: "tel" },
            { name: "telegramUser", placeholder: "Telegram username (@...)" },
          ].map((item, i) => (
            <input
              key={i}
              name={item.name}
              type={item.type || "text"}
              placeholder={item.placeholder}
              value={form[item.name]}
              onChange={handleChange}
              onFocus={handleFocus}
              className="
                w-full h-11 px-4 rounded-xl
                bg-black/40 text-white text-sm
                border border-white/10
                placeholder:text-white/40
                focus:outline-none focus:border-emerald-400
                focus:ring-1 focus:ring-emerald-400/40
                transition
              "
            />
          ))}
        </div>

        {/* Submit */}
        <button
          disabled={!isValid || loading}
          onClick={handleSubmit}
          className={`
            mt-6 w-full h-12 rounded-xl font-semibold text-base
            transition-all duration-300
            ${isValid && !loading
              ? "bg-gradient-to-r from-blue-400 via-green-500 to-blue-400 text-black hover:scale-[1.02]"
              : "bg-white/10 text-white/40 cursor-not-allowed"}
          `}
        >
          {loading ? "Yuborilmoqda..." : "Buyurtmani yuborish"}
        </button>

        <p className="text-center text-xs text-white/40 mt-4">
          Barcha ma’lumotlar maxfiy saqlanadi
        </p>
      </div>
    </div>
  );
};

export default OrderDrawer;
