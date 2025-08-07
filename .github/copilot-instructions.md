# HCB Mobile - React Native Expo App

HCB Mobile is a React Native Expo application for Hack Club Bank, supporting iOS, Android, and web platforms. It connects to the HCB v4 API and provides mobile banking functionality for Hack Club organizations.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Initial Setup

- Copy environment variables: `cp .env.example .env`
- Install dependencies: `npm install` -- **NEVER CANCEL: Takes 6-7 minutes. Set timeout to 15+ minutes.**
- Validate installation: `npm run ts:check && npm run lint && npm run format:check`

### Development Commands

- Start Expo development server: `npm start` -- starts Metro bundler on http://localhost:8081
- Start web development: `npm run web` -- may require: `npx expo install @expo/metro-runtime`
- iOS development: `npm run ios` -- requires Xcode and iOS simulator
- Android development: `npm run android` -- requires Android Studio, AVD with API >= 34, and Java 17 SDK

### Code Quality and Validation

- Run linting: `npm run lint` -- takes ~3 seconds, may show warnings but should not error
- Fix linting issues: `npm run lint:fix`
- Check formatting: `npm run format:check` -- takes ~3 seconds
- Auto-format code: `npm run format`
- TypeScript check: `npm run ts:check` -- takes ~6 seconds
- **ALWAYS run all three before committing**: `npm run lint && npm run format:check && npm run ts:check`

### Build and Deployment

- EAS build for iOS: `eas build -p ios` -- **NEVER CANCEL: Can take 10+ minutes. Set timeout to 20+ minutes.**
- EAS build for Android: `eas build -p android` -- **NEVER CANCEL: Can take 10+ minutes. Set timeout to 20+ minutes.**
- Build types available: development, preview, production (see eas.json)

## Validation Requirements

### Manual Testing Scenarios

After making changes, ALWAYS test at least one of these scenarios:

- **Basic App Launch**: Start development server with `npm start`, verify Metro bundler responds at http://localhost:8081
- **Web Version**: Run `npm run web` and verify the app loads with HCB title in browser
- **API Connection**: Verify the app can connect to HCB API (requires valid environment variables)
- **Navigation Flow**: Test main navigation between different screens if UI changes are made

### Development Environment Requirements

- Node.js (compatible with React Native/Expo)
- Java 17 SDK for Android builds (JAVA_HOME must be set)
- Android Studio with AVD (API level >= 34) for Android development
- Xcode for iOS development (macOS only)
- EAS CLI: `npm install -g eas-cli` for production builds

### Environment Configuration

- **Production HCB**: Use variables from .env.example (default setup)
- **Development HCB**: Requires local Rails server and custom Doorkeeper app configuration
- **Required variables**: EXPO_PUBLIC_API_BASE, EXPO_PUBLIC_CLIENT_ID, EXPO_PUBLIC_STRIPE_API_KEY

## Project Structure and Key Locations

### Main Application Files

- `App.tsx` -- Main app entry point with providers and Sentry initialization
- `src/AppContent.tsx` -- Core app content with navigation and authentication
- `src/Navigator.tsx` -- Navigation configuration and routing
- `src/AuthProvider.tsx` -- Authentication state management

### Key Directories

- `src/pages/` -- Main application screens:
  - `index.tsx` -- Home/dashboard screen
  - `login.tsx` -- Authentication screen
  - `cards/` -- Card-related screens
  - `organization/` -- Organization management screens
  - `settings/` -- User settings screens
- `src/components/` -- Reusable UI components
- `src/lib/` -- Utilities, API client, types, and helper functions
- `assets/` -- Images, fonts, and static assets

### Configuration Files

- `app.config.js` -- Expo configuration with build settings and permissions
- `eas.json` -- EAS build configuration for different environments
- `package.json` -- Dependencies and npm scripts
- `.eslintrc.js` -- ESLint configuration
- `tsconfig.json` -- TypeScript configuration
- `metro.config.js` -- Metro bundler configuration with Sentry integration

### Build and CI Configuration

- `.github/workflows/ci.yml` -- Runs ESLint, Prettier, and TypeScript checks
- `.github/workflows/preview.yml` -- Creates EAS preview builds for PRs
- `.github/workflows/testflight.yml` -- Deploys to iOS TestFlight on version tags

## Common Tasks and Troubleshooting

### Adding New Dependencies

- Use Expo-compatible packages: `npx expo install <package>`
- For React Native packages: Check Expo compatibility first
- Always test on all target platforms after adding dependencies

### Making UI Changes

- Follow existing component patterns in `src/components/`
- Use the established theme system from `src/ThemeContext.tsx`
- Test changes on both light and dark themes
- Validate accessibility with screen readers when possible

### Working with API Integration

- API client is in `src/lib/client.ts`
- Types are defined in `src/lib/types/`
- Authentication tokens are managed in `src/auth.ts`
- Always handle offline scenarios (see `src/lib/useOffline.ts`)

### Navigation Changes

- Main navigation structure is in `src/Navigator.tsx`
- Deep linking configuration in `src/getStateFromPath.ts`
- Always test deep linking after navigation changes

### Performance Considerations

- Images use `expo-image` for optimization
- Large lists should use FlatList or VirtualizedList
- Be mindful of bundle size when adding new dependencies

### Debugging Tips

- Use Expo development tools in the browser
- React DevTools work with the development server
- Sentry is configured for production error tracking
- Check Metro bundler output for build issues

## CI/CD Pipeline

### Automated Checks (GitHub Actions)

- **ESLint**: Code linting with custom rules
- **Prettier**: Code formatting validation
- **TypeScript**: Type checking and compilation
- All checks must pass for PR merge

### Build Environments

- **Development**: Uses development client with debug features
- **Preview**: Internal distribution for testing
- **Production**: App Store/Play Store releases with production API

### Release Process

- Tag with version format `v*.*.*` triggers TestFlight build
- Preview builds are created automatically for PRs
- Production releases require manual App Store/Play Store submission

Remember: This is a mobile-first application. Always consider mobile UX patterns and constraints when making changes. Test thoroughly on device simulators and ensure proper handling of device-specific features like notifications, camera access, and biometric authentication.
