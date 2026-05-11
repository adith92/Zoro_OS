# Project Overview

Zoro Endpoint Engine is a Soft SpaceShip AI Cockpit powered by Zoro APIs, Zoro AI, and a cosmic cat assistant named Zoro. 

## Key Philosophy
1. Interactive Cockpit: A web environment that acts as an operating system, offering various "modules" instead of standard pages.
2. Character-Driven: Zoro the cat provides contextual feedback, error handling, and personality to tasks.
3. Universal API Aggregation: Integrates 671 endpoints from Vtech API bridging tools from AI to downloader.
4. Security & Safety First: Potentially dangerous endpoints (NSFW, bypassing, temporary numbers) are identified, disabled by default, and isolated to prevent misuse.

## Architecture
- React 18, Vite, TypeScript
- Tailwind CSS
- Zustand (State Management)
- TanStack Query
- React Router DOM
- Three.js & Fiber (for the 3D aesthetic backgrounds and elements)

## Main App Flow
Users select modules from the sidebar (AI Hub, Media Tools, Islamic Tools, Gaming, Utilities). Each module displays a list of endpoints from the dynamically synced Registry. Users interact through a unified `EndpointForm` and see results in a specialized output parser terminal (`ToolResultViewer`).
