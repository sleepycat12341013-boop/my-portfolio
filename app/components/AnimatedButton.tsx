"use client";

export default function AnimatedButton({ text }: { text: string }) {
  const email = "sleepycat12341013@gmail.com";
  return (
    <div className="flex justify-center mt-8">
      <a
        href="https://mail.google.com/mail/?view=cm&to=your.email@example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="mt-16 flex justify-center items-center rounded-full
          min-w-[140px] px-3 py-1 text-black text-lg cursor-pointer
          active:scale-95 animate-button"
        >
          <span
            className="bg-white px-4 py-2 rounded-full 
        w-full h-full transition-all"
          >
            {text}
          </span>
        </button>
      </a>
    </div>
  );
}
