module.exports = {
  theme: {
    extend: {
      animation: {
        blink: "blink 1s step-start infinite",
      },
      keyframes: {
        blink: {
          "0%, 50%, 100%": { opacity: 1 },
          "25%, 75%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      animation: {
        "bounce-once": "bounce-once 0.3s ease-out 1",
      },
      keyframes: {
        "bounce-once": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }, // 上に跳ねる
          "100%": { transform: "translateY(0)" }, // 元に戻る
        },
      },
    },
  },
  plugins: [],
};
