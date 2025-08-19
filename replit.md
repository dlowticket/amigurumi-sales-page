# Amigurumi Sales Page

## Overview

This is a React-based e-commerce sales page specifically designed for selling a PDF tutorial called "Amigurumi Dorminhoco" (Sleepy Amigurumi). The application is a single-page product showcase with conversion-optimized features including interactive galleries, shopping cart functionality, purchase modals, and FAQ sections. Built with modern web technologies, it emphasizes user experience through responsive design and accessibility features.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (August 19, 2025)

### Checkout Integration Update
- **Modified purchase flow**: Removed purchase modal system in favor of direct checkout redirects
- **Individual product checkout**: "Comprar Agora" button now redirects to `https://checkout.digitais.online/VCCL1O8SC61B`
- **Bundle/combo checkout**: When 2 products are selected in bundle section, redirects to `https://checkout.digitais.online/VCCL1O8SC62Q`
- **Simplified user experience**: Eliminated data collection forms, streamlined directly to external payment processor

## System Architecture

### Frontend Architecture
The application uses **React 18** with **TypeScript** as the primary frontend framework, organized in a component-based architecture. The main entry point is through `App.tsx` which implements client-side routing using **Wouter** for lightweight navigation. The UI is built using a combination of custom components and **Radix UI primitives** through **shadcn/ui** components, providing accessible and customizable UI elements.

**State Management**: Local state is managed through React hooks (`useState`, `useEffect`) with custom hooks like `useCart` for cart functionality. The cart state persists to localStorage for data retention between sessions. Query state is handled by **TanStack Query** for any future API integrations.

**Component Structure**: 
- Core page component: `AmigurumiSales` 
- Reusable UI components: `ProductGallery`, `PurchaseModal`, `FAQAccordion`, `BundleSection`
- UI primitives from shadcn/ui for consistent design system

### Styling and Design System
**Tailwind CSS** is used for styling with a custom configuration that extends the base design system. The application implements a cohesive color palette with CSS custom properties:
- Primary purple theme (`#A96FE2`) for CTAs and branding
- Neutral grays for backgrounds and text hierarchy
- Success green for confirmations and positive feedback

**Typography**: Uses Google Fonts with Poppins for headings and Inter for body text, providing a modern and readable interface.

**Responsive Design**: Mobile-first approach with defined breakpoints for mobile (≤600px), tablet (600-1024px), and desktop (≥1024px). The gallery component adapts from horizontal scrolling on mobile to vertical thumbnail layout on desktop.

### Backend Architecture
The backend is built with **Express.js** and follows a modular structure with separate route handlers and storage abstractions. Currently implements an in-memory storage system through the `MemStorage` class, but is designed to easily migrate to database solutions.

**Server Structure**:
- Main server setup in `server/index.ts` with middleware configuration
- Route registration system in `server/routes.ts` (currently minimal, ready for expansion)
- Storage abstraction layer in `server/storage.ts` with interface-based design for easy database migration

### Development and Build System
**Vite** is used as the build tool and development server, providing fast hot module replacement and optimized production builds. The configuration supports:
- TypeScript compilation with strict type checking
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- Runtime error overlay for development
- Cartographer plugin for Replit integration

**Database Preparation**: While currently using in-memory storage, the project is configured for **PostgreSQL** integration through **Drizzle ORM**. The schema definition and migration setup are in place, indicating preparation for persistent data storage.

### Development Workflow
The project uses a full-stack TypeScript setup with shared types between client and server. Build process creates separate bundles for frontend (static files) and backend (Node.js server), enabling flexible deployment strategies.

## External Dependencies

### UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives for dialogs, accordions, form controls
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **class-variance-authority & clsx**: Dynamic className generation and conditional styling
- **Google Fonts**: Poppins and Inter font families for typography
- **Font Awesome 6.4.0**: Icon library for UI elements

### State Management and Data
- **@tanstack/react-query**: Server state management and caching (prepared for future API integration)
- **react-hook-form & @hookform/resolvers**: Form handling with validation
- **zod**: Schema validation and type safety
- **localStorage**: Browser storage for cart persistence

### Backend and Database
- **Express.js**: Web application framework for Node.js
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL connection (configured but not actively used)
- **connect-pg-simple**: PostgreSQL session store for Express

### Development Tools
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **wouter**: Lightweight client-side routing library

### Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **nanoid**: Unique ID generation
- **embla-carousel-react**: Carousel component functionality

The application is structured to handle both development and production environments with different configurations, and includes Replit-specific integrations for seamless deployment and development experience.