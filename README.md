# Code Amigo Landing Page

Premium marketing site for Code Amigo — an AI-powered software development agency. Built with React, Material UI, and Framer Motion.

## Tech Stack

- **React 18** + **Vite** (ESBuild)
- **Material UI v5** (Emotion styling)
- **Framer Motion** (animations)
- **React Router v6** (client-side routing)
- **React Icons** (icon library)
- **Express** (backend server for email & job applications)

## Project Structure

```
src/
├── app/                          # App shell, routing, entry point
│   ├── App.jsx                   # Routes + React.lazy for all pages
│   └── main.jsx                  # Entry point
├── features/                     # Feature-based modules
│   ├── home/                     # Landing page sections
│   │   ├── components/           # Hero, Services, Process, TechStack, OurWork, Insights, CTA
│   │   ├── data/                 # homeServices, technologies, process, homePage
│   │   └── pages/HomePage.jsx
│   ├── services/                 # Service pages
│   │   ├── data/                 # services, serviceConfig, aiServiceMeta
│   │   └── pages/ServicePage.jsx
│   ├── careers/                  # Careers & job listings
│   │   ├── components/           # CareersSection, JobCard
│   │   ├── data/                 # jobs, careers
│   │   └── pages/                # CareersPage, JobDetailPage
│   └── blogs/                    # Blog pages
│       ├── data/blogs.js
│       └── pages/BlogDetailPage.jsx
└── shared/                       # Shared across all features
    ├── animations/               # Framer Motion presets (fadeInUp, stagger, hover)
    ├── components/               # Header, Footer, ContactModal, AISolutionsModal, BaseModal, SectionHeader, CountrySelector
    ├── constants/                # routes, navigation, company, footer
    ├── data/                     # countries, formOptions, aiServiceMeta
    ├── hooks/                    # useModal, useForm, useScrollToTop, useMediaQuery
    ├── services/                 # API layer (sendEmail, applyJob)
    ├── styles/                   # sectionStyles, buttonStyles, formStyles
    ├── theme/                    # MUI theme (theme.js)
    ├── ui/                       # Reusable UI primitives
    │   ├── form/                 # FormName, FormEmail, FormPhone, FormTextarea, FileUpload
    │   ├── Button.jsx            # PrimaryButton, PrimaryButtonLg, SecondaryButton, TextLink
    │   ├── HoverCard.jsx, Chip.jsx, NumberedSteps.jsx, PageCTA.jsx, LogoIcon.jsx, BackLink.jsx, FAQAccordion.jsx
    └── utils/                    # formatters (formatPhone, validateField, scrollToTop)
```

## Design System

All visual tokens live in `src/shared/theme/theme.js` under `theme.custom.*`:

| Token | Purpose |
|-------|---------|
| `brand.blue/purple/gradient` | Primary brand colors |
| `accent.green/cyan/pink/amber/error/success` | Semantic accent colors |
| `bg.light/chip/subtle/black` | Background tokens |
| `border.light/default/hover/focus` | Border tokens |
| `radius.xs/sm/md/lg/xl/xxl/pill/full` | Border radius tokens |
| `shadow.sm/md/lg` | Box shadow tokens |
| `fontSize.*` | Typography scale |
| `transition.*` | Animation timing |
| `hexToRgba(hex, alpha)` | Color utility |

**Rule:** No hardcoded colors in components. Always use `theme.custom.*` tokens via `useTheme()`.

## Code Conventions

### File Naming
- **Components/Pages:** PascalCase (`JobDetailPage.jsx`)
- **Hooks:** `useXxx` (`useScrollToTop.js`)
- **Data/Utils/Styles:** camelCase (`formatters.js`, `sectionStyles.js`)

### Component Pattern
```jsx
import { useTheme } from '@mui/material';

export default function MyComponent() {
  const theme = useTheme();
  const { brand, bg, radius, shadow, transition, hexToRgba } = theme.custom;

  return <Box sx={{ ... }} />;
}
```

### Shared Style Helpers
- `sectionStyles.js` — 16 reusable sx patterns (sectionWrapperSx, pageHeroSx, cardBaseSx, etc.)
- `buttonStyles.js` — gradientButtonSx, gradientButtonLgSx, outlinedButtonSx
- `formStyles.js` — fieldSx for consistent form inputs

### Shared Hooks
| Hook | Purpose |
|------|---------|
| `useModal(defaultOpen)` | `{ open, handleOpen, handleClose, toggle }` |
| `useForm({ fields, validate, onSubmit })` | Form state, validation, phone formatting, submit |
| `useScrollToTop(deps?)` | Scroll to top on mount / dependency change |
| `useMediaQuery(query)` | SSR-safe media query match |

### Code Splitting
All pages use `React.lazy()` + `Suspense` in `App.jsx` for automatic code splitting.

### Performance
- `useMemo` on all data lookups in page components (`getBlogBySlug`, `getRelatedBlogs`, `getServiceBySlug`, `parseMarkdown`, etc.)
- `useCallback` on all event handlers passed as props (`handleNavClick`, `handleLogoClick`, `handleServiceClick`, `isAiService`)
- `useMemo` on computed objects (`serviceColors`, `selectedCountry`)
- Static constants extracted outside components (`DEFAULT_LABELS`, `processSteps`, `previewJobs`)

## Getting Started

```bash
npm install
npm run dev          # Vite dev server
npm run build        # Production build → dist/
```

### Backend Server
```bash
cd server
npm install
node index.js        # Express server on port 3001
```

Environment variable `NOTIFY_EMAIL` configures the recipient for contact form submissions.

## Build Output

Production build produces code-split chunks:
- `index.js` — ~600 KB (MUI + React core)
- `HomePage.js` — ~73 KB
- `ServicePage.js` — ~78 KB
- `JobDetailPage.js` — ~42 KB
- `blogs.js` — ~35 KB
- Other pages — 4–23 KB each
