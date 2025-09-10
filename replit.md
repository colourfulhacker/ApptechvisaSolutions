# Overview

This is a modern full-stack web application for "Apptechvisa", an IT services company. The application serves as a professional portfolio and business website, featuring sections for services, portfolio showcases, careers, and contact forms. Built with a React frontend and Express.js backend, the application emphasizes modern design with Indian-inspired theming and comprehensive form handling for business inquiries, demo requests, and career applications.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom Indian-inspired color scheme (saffron, navy, forest green, gold)
- **UI Components**: shadcn/ui component library with Radix UI primitives for accessibility
- **State Management**: TanStack Query for server state management and caching
- **Animation**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript for robust server-side logic
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for runtime type validation and API input sanitization
- **Development**: Hot reload setup with Vite middleware integration
- **Error Handling**: Centralized error handling middleware with structured responses

## Data Management
- **ORM**: Drizzle with PostgreSQL dialect for database interactions
- **Schema Definition**: Shared TypeScript types between frontend and backend
- **Database Tables**: Users, contacts, demo requests, and career applications
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless connection for cloud deployment

## Form Handling Strategy
- **Contact Forms**: React Hook Form with Zod validation for client-side validation
- **API Integration**: TanStack Query mutations for form submissions
- **Success Feedback**: Toast notifications for user confirmation
- **Data Persistence**: All form submissions stored in PostgreSQL with timestamps

## UI/UX Design Patterns
- **Design System**: Consistent spacing, typography, and color usage throughout
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI components ensure WCAG compliance
- **Performance**: Lazy loading, code splitting, and optimized asset delivery
- **Visual Identity**: Indian cultural elements integrated into modern design

## Development Environment
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared types
- **Code Quality**: ESLint and TypeScript compiler for code consistency
- **Development**: Hot reload for both frontend and backend development
- **Build Process**: Separate build pipelines for client and server with esbuild optimization

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Connection Pooling**: Built-in support for scalable database connections

## UI Framework Dependencies
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Production-ready motion library for React animations
- **Lucide React**: Modern icon library with consistent styling

## Development Tools
- **Vite**: Next-generation frontend tooling for fast development
- **TypeScript**: Static type checking for enhanced developer experience
- **PostCSS**: CSS post-processing for Tailwind and autoprefixer
- **Drizzle Kit**: Database migration and introspection tools

## Runtime Libraries
- **TanStack Query**: Powerful data synchronization for React applications
- **React Hook Form**: Performant forms library with minimal re-renders
- **Zod**: Schema validation library for TypeScript-first validation
- **Date-fns**: Modern date utility library for formatting and manipulation

## Cloud Infrastructure
- **Replit**: Development and hosting platform with integrated deployment
- **Serverless Architecture**: Optimized for cloud deployment with minimal configuration