# Dubai Real Estate Expo

A modern, high-contrast landing page for the Dubai Real Estate Expo built with Next.js 15, React 19, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd dubai-real-estate-expo

# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Building for Production

### Option 1: Safe Build (Recommended)

This disables CSS optimization to avoid potential build issues:

```bash
npm run build:safe
# or
pnpm run build:safe
```

### Option 2: Standard Build

```bash
npm run build
# or
pnpm run build
```

### Option 3: Custom Build Script

```bash
npm run build:custom
# or
pnpm run build:custom
```

### Option 4: Build and Start

```bash
npm run build:start
# or
pnpm run build:start
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. The build should work with the current configuration

### Manual Deployment

```bash
# Build the project
npm run build:safe

# Start production server
npm start
```

## 🔧 Troubleshooting

### Build Issues

If you encounter build errors related to `critters` or CSS optimization:

1. **Use the safe build command:**

   ```bash
   npm run build:safe
   ```

2. **Or set environment variable:**

   ```bash
   ENABLE_CSS_OPTIMIZATION=false npm run build
   ```

3. **Clean and reinstall:**
   ```bash
   npm run clean
   npm install
   npm run build:safe
   ```

### Common Issues

- **Missing critters module**: Use `build:safe` command or install critters manually
- **CSS optimization errors**: Disable CSS optimization in Next.js config
- **Peer dependency warnings**: These are warnings and won't affect the build

## 📁 Project Structure

```
dubai-real-estate-expo/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout
│   ├── page.jsx           # Home page
│   ├── error.jsx          # Error page
│   └── not-found.jsx      # 404 page
├── components/            # React components
│   ├── ui/               # UI components
│   └── *.jsx            # Page components
├── public/               # Static assets
├── scripts/              # Build scripts
├── next.config.mjs       # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🛠️ Technologies Used

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:safe` - Build with CSS optimization disabled
- `npm run build:custom` - Use custom build script
- `npm run build:start` - Build and start production server
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run clean` - Clean and reinstall dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build with `npm run build:safe`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
