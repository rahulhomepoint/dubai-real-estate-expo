# Dubai Real Estate Expo

A modern, responsive website for the Dubai Real Estate Expo featuring exhibitors, properties, speakers, and event information.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dubai-real-estate-expo
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build Instructions

### Standard Build

```bash
# Production build
npm run build

# Start production server
npm run start
```

### Custom Build Script

```bash
# Run custom build with additional steps
npm run build:custom
```

This script includes:

- Environment validation
- Dependency installation
- Linting
- Build process
- Build analysis
- Deployment script generation

### Build Variants

```bash
# Build with bundle analysis
npm run build:analyze

# Production build with environment
npm run build:production

# Type checking
npm run type-check

# Clean build (removes .next and node_modules)
npm run clean
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
# Build the Docker image
docker build -t dubai-real-estate-expo .

# Run the container
docker run -p 3000:3000 dubai-real-estate-expo
```

### Docker Compose

```bash
# Development
docker-compose up

# Production (with nginx)
docker-compose --profile production up -d
```

## 📁 Project Structure

```
dubai-real-estate-expo/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout
│   └── page.jsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── about.jsx         # About section
│   ├── contact.jsx       # Contact section
│   ├── exhibitors.jsx    # Exhibitors section
│   ├── hero.jsx          # Hero section
│   ├── navbar.jsx        # Navigation
│   └── ...               # Other sections
├── public/               # Static assets
│   └── images/           # Image files
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── styles/               # Additional styles
├── build.js              # Custom build script
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose setup
└── next.config.mjs       # Next.js configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# App Configuration
NEXT_PUBLIC_APP_NAME="Dubai Real Estate Expo"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"

# Build Configuration
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# Optional: Analytics
# NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=""
# NEXT_PUBLIC_POSTHOG_KEY=""
```

### Next.js Configuration

The `next.config.mjs` includes:

- Standalone output for Docker
- Image optimization
- Security headers
- Bundle optimization
- Experimental features

## 📊 Build Analysis

After building, you can analyze the bundle:

```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Run analysis
npm run build:analyze
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start:production
```

### Docker Deployment

```bash
# Build and run with Docker
docker build -t dubai-real-estate-expo .
docker run -p 3000:3000 dubai-real-estate-expo

# Or use Docker Compose
docker-compose up -d
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts

### Code Quality

The project includes:

- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting
- Husky for git hooks (optional)

## 📱 Features

- **Responsive Design** - Mobile-first approach
- **Modern UI** - Built with shadcn/ui components
- **Performance Optimized** - Next.js 15 with App Router
- **SEO Friendly** - Meta tags and structured data
- **Accessible** - WCAG compliant components
- **Internationalization Ready** - Multi-language support structure

## 🎨 Styling

The project uses:

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

For support and questions:

- Create an issue on GitHub
- Contact the development team
- Check the documentation

---

Built with ❤️ for the Dubai Real Estate Expo
