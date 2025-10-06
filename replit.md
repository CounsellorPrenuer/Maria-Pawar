# Inspire2Grow - Career Guidance & Corporate Training Platform

## Overview

Inspire2Grow is a multi-page business website for Maria Pawar's career counseling and corporate training services. The platform showcases three main service areas: Career Guidance (in partnership with Mentoria), Learning & Development programs, and specialized Aviation training. The site features a premium glassmorphism design aesthetic, interactive pricing with booking functionality, and lead capture forms.

The application serves as both a marketing platform and a lead generation system, with an admin dashboard for managing bookings and contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18 with Vite as the build tool
- Client-side routing using Wouter (lightweight alternative to React Router)
- TypeScript for type safety across the application
- Multi-page architecture with dedicated route components for each service area

**UI Component System**
- Shadcn/ui component library built on Radix UI primitives
- Custom glassmorphism components (GlassCard) for premium visual effects
- Reusable presentational components (Timeline, StatsCard, ProgramGrid, etc.)
- Form handling with React Hook Form and Zod validation
- TanStack Query for server state management and caching

**Styling Approach**
- Tailwind CSS with custom design system configuration
- Dark mode optimized color palette (deep navy base, professional blue, emerald green, warm gold accents)
- CSS custom properties for theme values and glass effects
- Premium typography using Playfair Display (headings) and Montserrat (body)
- Animated scroll effects using Intersection Observer API

**State Management Strategy**
- Server state managed via TanStack Query with aggressive caching
- Form state handled locally with React Hook Form
- Modal state managed with component-level useState
- No global client state management (Redux/Context) - keeping it simple

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- RESTful API design pattern
- Development mode with Vite middleware for HMR
- Production mode serves static built assets

**API Structure**
- `/api/bookings` - CRUD operations for service bookings
- `/api/contacts` - Contact form submissions
- `/api/admin/stats` - Dashboard analytics (implied from frontend usage)
- Request/response validation using Zod schemas
- Centralized error handling middleware

**Data Models**
- **Users**: Authentication support (id, username, password) - currently unused but schema exists
- **Bookings**: Service purchases with payment tracking (name, email, phone, category, service name, price, payment status, Razorpay IDs)
- **Contacts**: Lead capture from contact forms (name, email, phone, message)

### Data Storage Solutions

**Database**
- PostgreSQL via Neon serverless driver
- Connection pooling for efficient resource usage
- Drizzle ORM for type-safe database queries
- Schema-first approach with migrations support

**Schema Design Decisions**
- UUID primary keys for all tables (using PostgreSQL's gen_random_uuid())
- Timestamps for audit trails (createdAt fields)
- Text fields for flexible content storage
- Integer for monetary values (stored in smallest currency unit - paise)
- Separate tables for bookings vs contacts to allow independent scaling and querying

**Storage Layer Abstraction**
- IStorage interface defines contract for data operations
- DatabaseStorage implements the interface with Drizzle queries
- Allows for future storage backend changes without affecting business logic

### External Dependencies

**Payment Integration**
- Razorpay payment gateway for service bookings
- Client-side SDK loaded via script tag
- Order creation and payment verification flow
- Payment status tracking (pending, success, failed)

**Third-Party Services**
- Mentoria partnership for career assessment delivery (mentioned in content, integration details not in codebase)
- Google Drive for asset hosting (logo and profile images)

**Font Services**
- Google Fonts for Playfair Display and Montserrat typography

**Development Tools**
- Replit-specific plugins for development environment
- Vite plugins for error overlay and dev tooling
- WebSocket for Neon database connections in serverless environment

**UI Component Libraries**
- Radix UI for accessible, unstyled component primitives
- Lucide React for consistent iconography
- date-fns for date formatting
- cmdk for command palette functionality

**Form & Validation**
- React Hook Form for performant form handling
- Zod for runtime schema validation
- @hookform/resolvers for integration between the two