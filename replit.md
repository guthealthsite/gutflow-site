# Trapped In The Gut - Book Sales Funnel

## Overview

This is a single-page application designed as a sales funnel for the book "Trapped In The Gut" by Gershom Phiri. The application targets IBS sufferers through an emotional journey from awareness to purchase, featuring social proof, reviews, and lead generation through email subscription. The architecture follows a modern full-stack approach with React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and premium styling
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for reviews and email subscriptions
- **Data Storage**: In-memory storage with interface for future database integration
- **Validation**: Zod schemas shared between frontend and backend

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Two main tables - reviews and email_subscribers
- **Migration Strategy**: Drizzle-kit for schema management
- **Connection**: Configured for Neon database through environment variables

## Key Components

### Sales Funnel Sections
1. **Hero Section**: Emotional hook targeting desperate searchers
2. **Social Proof Banner**: Trust indicators and guarantees
3. **Book Details**: Research-driven insights and differentiation
4. **Reviews Section**: Social proof through testimonials
5. **Author Section**: Credibility and contact information
6. **Final CTA**: Urgency-driven purchase button
7. **Disclaimer**: Medical and legal disclaimers

### Interactive Elements
- **Free Chapter Modal**: Lead generation through email capture
- **Review Modal**: User-generated content collection
- **Navigation**: Smooth scrolling between sections
- **Responsive Design**: Mobile-first approach with breakpoint optimization

### Data Models
- **Reviews**: Name, rating (1-5), comment, timestamp
- **Email Subscribers**: Email, optional name, timestamp
- **Validation**: Zod schemas for type safety and runtime validation

## Data Flow

### User Journey
1. **Awareness**: Emotional headline and social proof
2. **Interest**: Detailed book information and author credibility
3. **Desire**: Social proof through reviews and testimonials
4. **Action**: Multiple CTAs leading to external purchase link (Gumroad)
5. **Loyalty**: Email capture for ongoing relationship building

### API Endpoints
- `GET /api/reviews` - Fetch all reviews for social proof
- `POST /api/reviews` - Submit new review (with validation)
- `POST /api/subscribe` - Email subscription for lead generation
- `GET /api/subscribers` - Admin access to subscriber list

### State Management
- Server state managed through React Query with caching
- Local state for modals and form interactions
- Optimistic updates for better user experience

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, Class Variance Authority for component variants
- **Data Fetching**: TanStack React Query for server state
- **Validation**: Zod for runtime type checking
- **Date Handling**: date-fns for timestamp formatting

### Development Tools
- **Build**: Vite with React plugin and runtime error overlay
- **TypeScript**: Full type safety across frontend and backend
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Replit Integration**: Cartographer plugin for development environment

### External Services
- **Payment Processing**: Gumroad for book sales ($9.99 price point)
- **Database Hosting**: Neon serverless PostgreSQL
- **Email Service**: Not yet integrated (placeholder for future implementation)

## Deployment Strategy

### Build Process
- Frontend builds to `dist/public` directory
- Backend bundles with esbuild to `dist/index.js`
- Static assets served through Express in production
- Vite dev server with HMR in development

### Environment Configuration
- **Development**: Vite dev server with Express API proxy
- **Production**: Single Express server serving both API and static files
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Session Management**: Express sessions with PostgreSQL store

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database access
- Environment variables for database connection
- Static file serving capability

### Performance Optimizations
- Component lazy loading where applicable
- Image optimization through CSS and responsive design
- Tailwind CSS purging for minimal bundle size
- React Query caching for reduced API calls
- Premium styling with hardware-accelerated animations