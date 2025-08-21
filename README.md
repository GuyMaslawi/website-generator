# Website Generator

A modern, feature-rich website builder built with React 18+, TypeScript, and Styled Components.

## 🏗️ Project Structure

```
src/
├── components/           # Shared UI components
│   ├── ErrorBoundary/   # Error handling component
│   ├── GalleryEditor/   # Gallery management component
│   ├── InlineText/      # Inline text editing component
│   ├── ResponsiveToggle/ # Responsive preview toggle
│   └── ServiceEditor/   # Service management component
├── features/            # Feature-based modules
│   ├── color-picker/    # Color selection and management
│   ├── font-picker/     # Typography selection
│   ├── image-editor/    # Image editing and transformation
│   ├── website-editor/  # Main website editing interface
│   └── website-preview/ # Live website preview
├── pages/               # Page components
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── shared/              # Shared utilities and state
│   ├── constants/       # Application constants
│   ├── hooks/          # Custom React hooks
│   ├── store/          # Zustand state management
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── styles/              # Global styles
└── tests/               # Test files
```

## ✨ Features

- **Visual Editor**: Real-time website content editing
- **Live Preview**: Split-view preview with responsive toggle
- **Color Management**: Advanced color picker with preset palettes
- **Typography Control**: Font selection with live preview
- **Image Editing**: Canvas-based transformations (scale, rotation, brightness, contrast)
- **Gallery Management**: Drag-and-drop image organization
- **Service Management**: Dynamic service addition/removal
- **Validation**: Input validation with error handling
- **Responsive Design**: Mobile and desktop preview modes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd website-generator

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
```

## 🧪 Testing

The project uses Vitest for testing with 100% test coverage:

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests in watch mode
pnpm test --watch
```

## 🏗️ Architecture

### State Management
- **Zustand**: Lightweight state management for website data
- **Local Storage**: Persistent data storage
- **Real-time Updates**: Immediate preview updates

### Component Architecture
- **Feature-based**: Components organized by feature domain
- **Shared Components**: Reusable UI components
- **Custom Hooks**: Encapsulated business logic
- **Styled Components**: CSS-in-JS styling solution

### Data Flow
1. User edits content in EditorShell
2. Changes update Zustand store
3. LivePreview reflects changes immediately
4. Data persists to local storage

## 🎨 Styling

- **Styled Components**: Component-scoped styling
- **Design System**: Consistent spacing, colors, and typography
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean, intuitive interface

## 🔧 Development

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **100% Test Coverage**: Comprehensive testing

### Performance
- **React 18**: Latest React features
- **Memoization**: Optimized re-renders
- **Lazy Loading**: Code splitting support
- **Bundle Optimization**: Vite build optimization

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Styled Components for CSS-in-JS solution
- Zustand for lightweight state management
- Vitest for fast testing framework 