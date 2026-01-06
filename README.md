# BMS Tenant Web - Property Management System

A comprehensive tenant-facing property management web application built with HTML, CSS, and JavaScript, styled with Tailwind CSS.

## 📁 Project Structure

```
bms-tenant-web/
├── css/                          # CSS files
│   ├── input.css                 # Tailwind input file with custom components
│   ├── output.css                # Compiled CSS (generated)
│   ├── tailwind.config.js        # Tailwind configuration
│   └── postcss.config.js         # PostCSS configuration
├── src/                          # Source files
│   ├── components/               # Reusable HTML components
│   │   └── navbar.html           # Navigation sidebar
│   ├── layouts/                  # Page layouts
│   │   └── main-layout.html      # Main layout template
│   ├── pages/                    # Page-specific content
│   └── utils/                    # Utility functions
├── js/                           # JavaScript files
│   └── utils.js                  # Utility functions
├── assets/                       # Static assets
│   ├── images/                   # Image files
│   └── fonts/                    # Font files
├── *.html                        # HTML pages (38 pages)
├── package.json                  # Node.js dependencies
└── README.md                     # This file
```

## 🚀 Features

### Tenant Services
- **Dashboard** with rent payment status and quick actions
- **Payment Management** - Add methods, history, receipts
- **Amenity Booking** - Reserve building amenities
- **Maintenance Requests** - Submit and track requests
- **Document Library** - Access lease and building documents
- **Visitor Management** - Pre-register guests
- **Parking Management** - Request and manage parking spots
- **Communication** - Message threads with property management
- **Lease Management** - View agreements and terms
- **Security Settings** - Manage account preferences

### Technical Features
- **38 HTML pages** covering all tenant services
- **Tailwind CSS** with custom component classes
- **Dark mode support** with system preference detection
- **Material Icons** integration
- **Responsive design** for mobile and desktop
- **Component-based architecture** for maintainability

## 🎨 Styling System

### Custom Tailwind Configuration
- **Color Palette**:
  - Primary: #2563EB (blue)
  - Secondary: #10B981 (green)
  - Accent: #F59E0B (amber)
  - Success: #22C52E (green)
  - Warning: #F59E0B (amber)
  - Error: #EF4444 (red)
- **Dark Mode**: Class-based toggle with localStorage persistence
- **Custom Components**: Pre-built button, card, form, and navigation classes

### Component Classes
- `.btn-primary`, `.btn-secondary`, `.btn-outline`
- `.card`, `.card-header`, `.card-body`
- `.form-input`, `.form-label`
- `.nav-link`, `.nav-link-active`
- `.badge-success`, `.badge-warning`, `.badge-error`, `.badge-secondary`

## 🛠 Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Build CSS once
npm run build-css

# Watch for changes during development
npm run watch-css

# Or use the dev shortcut
npm run dev
```

### Build Process
The project uses Tailwind CSS CLI for compilation:
- **Input**: `css/input.css` (Tailwind directives + custom components)
- **Output**: `css/output.css` (Compiled CSS for production)
- **Config**: `css/tailwind.config.js` (Custom theme and settings)

## 📱 Usage

1. **Open any HTML file** in a web browser to view the application
2. **CSS is pre-compiled** and linked via `./css/output.css`
3. **For development**, run `npm run dev` to auto-rebuild on changes
4. **Dark mode** toggles via the `dark` class on the `<html>` element

## 🔧 Customization

### Adding New Components
1. Add component classes to `css/input.css` under the `@layer components` section
2. Use `@apply` directive for Tailwind utilities
3. Rebuild CSS with `npm run build-css`

### Modifying Theme
1. Edit `css/tailwind.config.js` for colors, fonts, and spacing
2. Update custom color definitions in the theme.extend section
3. Rebuild CSS to apply changes

### Adding New Pages
1. Create HTML file in root directory
2. Use the main layout structure from `src/layouts/main-layout.html`
3. Include navbar component from `src/components/navbar.html`
4. Link CSS: `<link href="./css/output.css" rel="stylesheet"/>`

## 📦 Dependencies

- **tailwindcss@^3.4.0** - CSS framework
- **postcss** - CSS post-processing
- **autoprefixer** - CSS vendor prefixes

## 🌟 Best Practices

- Use semantic HTML5 elements
- Follow BEM naming for custom CSS classes
- Implement proper form validation
- Ensure accessibility with ARIA labels
- Test responsive design on multiple devices
- Use utility classes for rapid development
- Leverage component classes for consistency

## 📄 License

ISC License - feel free to use this project for your property management needs.
