/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#2563EB",
        "secondary": "#10B981",
        "accent": "#F59E0B",
        "success": "#22C52E",
        "warning": "#F59E0B",
        "error": "#EF4444",
        "background-light": "#F9FAFB",
        "background-dark": "#1F2937",
        "text-primary-light": "#111827",
        "text-primary-dark": "#F9FAFB",
        "text-secondary-light": "#6B7280",
        "text-secondary-dark": "#9CA3AF",
        "border-light": "#E5E7EB",
        "border-dark": "#374151"
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
