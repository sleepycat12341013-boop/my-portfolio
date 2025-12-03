"use client";

export default function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="w-6 h-6 text-white hover:text-blue-400 transition-transform transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      </a>

      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="w-6 h-6 text-white hover:text-blue-600 transition-transform transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full"
        >
          <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98S7.96 8.12 7.96 6.48 6.62 3.5 4.98 3.5zM2.4 9h5.16v12H2.4V9zm7.2 0h4.94v1.67h.07c.69-1.3 2.38-2.67 4.89-2.67 5.23 0 6.2 3.44 6.2 7.91V21H19v-6.83c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.77-2.62 3.61V21h-5.2V9z" />
        </svg>
      </a>
    </div>
  );
}
