# Website Generator

A modern, feature-rich website builder built with React 18+, TypeScript, and Styled Components. Create professional websites with an intuitive visual editor, real-time preview, and comprehensive customization options.

## 🚀 Quick Start

### First Time Setup

1. **Install Node.js** (version 18 or higher)
   ```bash
   # Check if Node.js is installed
   node --version
   
   # If not installed, download from https://nodejs.org/
   ```

2. **Install pnpm** (recommended package manager)
   ```bash
   npm install -g pnpm
   
   # Verify installation
   pnpm --version
   ```

3. **Clone and Setup**
   ```bash
   # Clone the repository
   git clone <repository-url>
   cd website-generator
   
   # Install all dependencies
   pnpm install
   
   # Start the development server
   pnpm dev
   ```

4. **Open Your Browser**
   - Navigate to `http://localhost:5173`
   - You should see the Website Generator interface

## 🏗️ Project Structure

```
src/
├── app/                 # Application entry point
├── features/            # Feature-based modules
│   ├── website-editor/  # Main website editing interface
│   │   ├── components/  # Editor components
│   │   │   ├── AboutSection/      # About section editor
│   │   │   ├── ContactSection/    # Contact section editor
│   │   │   ├── ContentSection/    # Content section editor
│   │   │   ├── GallerySection/    # Gallery management
│   │   │   ├── HeroSection/       # Hero section editor
│   │   │   ├── ServicesSection/   # Services management
│   │   │   ├── TitleColorSection/ # Title color picker
│   │   │   └── TypographySection/ # Typography settings
│   │   └── EditorShell.tsx        # Main editor container
│   └── website-preview/ # Live website preview
├── shared/              # Shared utilities and state
│   ├── constants/       # Application constants
│   ├── design/          # Design tokens and themes
│   ├── hooks/           # Custom React hooks
│   ├── store/           # Zustand state management
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── ui/                  # Reusable UI components
│   ├── common/          # Common components
│   ├── forms/           # Form components
│   └── layout/          # Layout components
└── tests/               # Test setup and utilities
```

## ✨ Features & How to Use

### 🎨 Main Editor Interface

The **EditorShell** is your central workspace where you'll build your website:

- **Left Panel**: Content editing sections
- **Right Panel**: Live preview of your website
- **Responsive Toggle**: Switch between desktop and mobile views

### 📝 Content Sections

#### 1. Hero Section
- **Purpose**: Main headline and introduction
- **How to Use**:
  - Edit the main title text
  - Add a subtitle or description
  - Choose background colors
  - Set text colors for optimal contrast

#### 2. About Section
- **Purpose**: Company or personal information
- **How to Use**:
  - Write your company story
- **Customization**: 
  - Adjust text content
  - Modify section colors

#### 3. Services Section
- **Purpose**: Showcase your services or offerings
- **How to Use**:
  - Click "Add Service" to create new service
  - Fill in service name and description
  - Use the trash icon to remove services
  - Drag and drop to reorder services

#### 4. Gallery Section
- **Purpose**: Display images in an organized grid
- **How to Use**:
  - Click "Add Image" to upload new images
  - Drag and drop images to reorder
  - Click on images to edit them
  - Use the trash icon to remove images

#### 5. Contact Section
- **Purpose**: Contact information and form
- **How to Use**:
  - Add your contact details
  - Include social media links
  - Customize contact form fields

### 🎨 Color Management

#### Title Color Picker
- **Purpose**: Control colors for titles and headings
- **How to Use**:
  - Click on color swatches to change title colors
  - Use the color picker for custom colors
  - Preview changes in real-time

#### Content Color Section
- **Purpose**: Manage colors for content areas
- **How to Use**:
  - Select background colors for sections
  - Choose text colors for readability
  - Maintain color consistency across sections

### 🔤 Typography Control

#### Font Selection
- **Purpose**: Choose fonts for different text elements
- **How to Use**:
  - Select from available font families
  - Preview how fonts look in real-time
  - Adjust font sizes and weights

#### Text Styling
- **Purpose**: Customize text appearance
- **How to Use**:
  - Modify font sizes
  - Adjust line heights
  - Set text alignment

### 🖼️ Image Management

#### Image Editor
- **Purpose**: Edit and transform uploaded images
- **Features**:
  - **Scale**: Resize images proportionally
  - **Rotate**: Turn images by 90-degree increments
  - **Brightness**: Adjust image brightness
  - **Contrast**: Modify image contrast
  - **Reset**: Return to original settings

#### Gallery Organization
- **Purpose**: Organize and display multiple images
- **How to Use**:
  - Upload images using the file picker
  - Drag and drop to reorder images
  - Click on images to edit them
  - Remove unwanted images

### 📱 Responsive Design

#### Preview Modes
- **Desktop View**: Full-width website preview
- **Mobile View**: Mobile-optimized layout
- **How to Use**:
  - Click the responsive toggle button
  - Switch between desktop and mobile views
  - Ensure your website looks great on all devices

## 🛠️ Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests in watch mode
pnpm test --watch

# Run tests with UI
pnpm test:ui

# Lint code
pnpm lint
```

## 🧪 Testing

The project maintains 100% test coverage:

- **Unit Tests**: Component functionality testing
- **Integration Tests**: Feature interaction testing
- **UI Tests**: User interface behavior testing

### Running Tests
```bash
# Run all tests once
pnpm test

# Run tests with coverage report
pnpm test:coverage

# Run tests in watch mode (recommended for development)
pnpm test --watch

# Open test UI for interactive testing
pnpm test:ui
```

## 🎯 Best Practices

### Content Creation
1. **Start with Hero**: Create an engaging headline
2. **Tell Your Story**: Use the About section effectively
3. **Showcase Services**: List your key offerings clearly
4. **Visual Appeal**: Use high-quality images in the gallery
5. **Contact Information**: Make it easy for visitors to reach you

### Design Tips
1. **Color Harmony**: Use consistent color schemes
2. **Typography**: Choose readable fonts
3. **Spacing**: Maintain consistent spacing between sections
4. **Mobile First**: Design for mobile, then enhance for desktop
5. **Visual Hierarchy**: Use size and color to guide attention

### Performance
1. **Image Optimization**: Use appropriately sized images
2. **Content Updates**: Save changes regularly
3. **Browser Testing**: Test in multiple browsers

## 🔧 Troubleshooting

### Common Issues

#### Development Server Won't Start
```bash
# Check if port 5173 is in use
lsof -i :5173

# Kill process if needed
kill -9 <PID>

# Restart development server
pnpm dev
```

#### Tests Failing
```bash
# Clear test cache
pnpm test --clearCache

# Run tests with verbose output
pnpm test --reporter=verbose
```

#### Build Errors
```bash
# Clear build cache
rm -rf dist node_modules/.vite

# Reinstall dependencies
pnpm install

# Try building again
pnpm build
```

### Getting Help
1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure Node.js version is 18+
4. Check browser console for client-side errors

## 🚀 Deployment

### Production Build
```bash
# Create production build
pnpm build

# Preview production build locally
pnpm preview
```

### Deployment Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository for automatic deployment
- **GitHub Pages**: Use GitHub Actions for deployment
- **Traditional Hosting**: Upload `dist` folder contents to your web server

## 📚 Advanced Features

### Custom Hooks
- **useKeyboard**: Keyboard shortcuts and navigation
- **useValidation**: Form validation and error handling

### State Management
- **Zustand Store**: Centralized website data management
- **Local Storage**: Persistent data across browser sessions
- **Real-time Updates**: Immediate preview synchronization

### Design System
- **Design Tokens**: Consistent spacing, colors, and typography
- **Component Library**: Reusable UI components
- **Theme Support**: Centralized styling configuration

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Write tests for new functionality
- Maintain 100% test coverage
- Follow TypeScript best practices
- Use meaningful commit messages
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team**: For the amazing framework
- **Styled Components**: For CSS-in-JS solution
- **Zustand**: For lightweight state management
- **Vitest**: For fast testing framework
- **Vite**: For fast build tooling

## 📞 Support

- **Issues**: Report bugs and request features on GitHub
- **Discussions**: Ask questions and share ideas
- **Documentation**: Check this README for common solutions

---

**Happy Website Building! 🎉** 