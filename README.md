# Equinox Dashboard

A scalable multitenant web application that enables businesses to manage users,
data and roles securely from a single platform.

## Overview
This project focuses on building a modern multitenant architecture using Next.js and Supabase.
The goal was to design a system where multiple organizations can operate independently while sharing the same infrastructure,
with proper authentication, authorization, and data isolation. It demonstrates how real-world SaaS platforms handle user management, 
protected routes, and role-based access at scale.

## Key Features
- Multitenant Architecture
  Supports multiple organizations with isolated data while running on a single codebase.
  
- Authentication & Authorization
  Secure sign-up, login, and session handling using Supabase Auth with role-based access control.
  
- Protected Routes & Dashboard Logic
  Users only access data and pages permitted by their role (customer, agent, or company).
  
-  Scalable Frontend Structure
  Clean, modular layout designed for future expansion into a full SaaS product.

## Tech Stack
- Frontend: React, Next.js, Tailwind CSS
- Backend: Supabase
- Animations: GSAP

## Live Demo
🔗 [Live Link](https://real-estate-dashboard-henna.vercel.app/)

## What I Learned
- How to design and implement a multitenant system using Supabase Row Level Security
- Managing authenticated user state across a Next.js App Router application
- Structuring scalable frontend architecture for SaaS products
- Combining React Query with global state for predictable data flow
- Building secure, production-ready auth flows instead of demo-level logic

## Getting Started

# Clone the repository
git clone https://github.com/abdulakeem-asiru/Real-Estate-Dashboard.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run the development server
npm run dev

## Screenshots
<img width="1500" height="1125" alt="MacBook #01@2x" src="https://github.com/user-attachments/assets/b4b657ea-2ede-46d1-89ec-960681e7ad28" />
<img width="1501" height="1126" alt="MacBook #13 (1)" src="https://github.com/user-attachments/assets/6bcd2241-2836-4dde-9264-a0aff5576926" />

## Author

Abdulakeem - Frontend Developer
I help startups and service businesses turn visitors into 
paying customers with high-performance websites.
