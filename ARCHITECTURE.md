# Clean Architecture Structure

This project follows clean architecture principles with clear separation of concerns.

## Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout with fonts & providers
│   ├── page.js            # Home page
│   └── projects/          # Projects page
│
├── components/            # React components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── sections/         # Page sections (Hero, Skills)
│   ├── ui/               # Reusable UI components (ThemeToggle, ProjectCard)
│   └── providers/        # Context providers
│
└── lib/                   # Business logic & utilities
    ├── constants/        # Static data (projects, skills, profile)
    ├── hooks/            # Custom React hooks
    └── utils/            # Utility functions (animations)
```

## Architecture Principles

### 1. Separation of Concerns
- **Data Layer** (`lib/constants/`): All static data centralized
- **Business Logic** (`lib/hooks/`, `lib/utils/`): Reusable logic extracted
- **Presentation** (`components/`): Pure UI components

### 2. Single Responsibility
- Each component has one clear purpose
- Hooks encapsulate specific behaviors (e.g., `useScrolled`)
- Constants files group related data

### 3. DRY (Don't Repeat Yourself)
- Animation variants extracted to `lib/utils/animations.js`
- Project data centralized in `lib/constants/projects.js`
- Reusable `ProjectCard` component

### 4. Component Composition
- Small, focused components
- Clear props interface
- Easy to test and maintain

## Key Improvements

✅ Extracted hardcoded data to constants
✅ Created custom hooks for reusable logic
✅ Centralized animation variants
✅ Component-based architecture
✅ Removed redundant CSS modules
✅ Better file organization
