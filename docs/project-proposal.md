# Project Proposal: Brooz E-Commerce Store

## 1. Project Overview
Brooz is a web-based multi-category e-commerce platform that allows customers to explore and purchase men's and women's clothing, accessories, and home essentials online, while enabling store administrators to manage inventory and track orders centrally. The system is designed for everyday shoppers and retail businesses to simplify browsing across diverse product categories and streamline the checkout process.

## 2. Problem Statement
Currently, many local retail stores selling fashion, accessories, and home goods rely on social media pages and manual messaging (such as WhatsApp or Instagram) to showcase products and take orders. Customers struggle to filter items by category, size, or availability, while store owners face frequent human errors in tracking stock levels across diverse product lines and managing order statuses. This fragmented process causes wasted time, delayed responses, and lost sales opportunities.

## 3. Target Users

Primary User Type 1: Online Shopper (Customer)
Description: Individuals looking to buy men's/women's clothing, accessories, or home items online.
Goals: Explore organized categories, filter by size/type/price, add items to a cart, and track order delivery.
Pain Points: Difficulty finding specific sizes or styles on cluttered social media pages, unclear stock availability, and slow manual ordering via chat.

Primary User Type 2: Store Administrator
Description: The store owner or staff responsible for managing the product catalog, inventory, and customer orders.
Goals: Quickly add or update products across categories, monitor remaining stock and sizes, and update order statuses.
Pain Points: Losing track of remaining quantities and sizes, spending hours answering repetitive price messages, and manual order logging errors.

Secondary User Type 3: Guest Visitor
Description: First-time visitors exploring the store catalog before creating an account.
Goals: Explore products, view item details, and compare prices quickly without mandatory registration upfront.
Pain Points: Being forced to sign up before viewing product prices or available categories.

## 4. Core Features (Must-Have for MVP)

1. User Authentication & Profile
Description: Allows customers and admins to register, log in securely, and manage shipping addresses and account details.
User Benefit: Protects user accounts and saves delivery addresses for faster future checkouts.

2. Multi-Category Catalog & Filtering
Description: Organizes products into clear departments (Men's Clothing, Women's Clothing, Accessories, Home Goods) with search and filters (price, size, category).
User Benefit: Helps shoppers quickly find relevant items and check available sizes without endless scrolling.

3. Product Details View
Description: Displays product images, descriptions, pricing, available sizes/variants, and real-time stock status.
User Benefit: Gives customers complete clarity about product specifications before adding items to their cart.

4. Shopping Cart & Checkout
Description: Enables users to add multiple items, adjust quantities, view total costs, and submit orders with delivery details.
User Benefit: Provides a smooth, automated purchasing flow without needing to message the seller manually.

5. Order Tracking & History
Description: Lets customers view the real-time status of their orders (Pending, Processing, Shipped, Delivered) and past purchases.
User Benefit: Reduces customer anxiety and eliminates repetitive inquiries about delivery status.

6. Admin Inventory & Order Dashboard
Description: Dedicated dashboard for admins to add, edit, or delete products, update stock quantities, and change order statuses.
User Benefit: Centralizes store operations and prevents customers from ordering out-of-stock items.

## 5. Additional Features (Nice-to-Have)
1. Wishlist (Favorites) - Allows logged-in shoppers to save clothing, accessories, or home items to a personal list for future purchase.
2. Product Reviews & Ratings - Enables verified buyers to rate items (1-5 stars) and leave feedback regarding product quality or sizing.
3. Promo Codes & Discounts - Allows the admin to generate discount coupons that customers can apply during checkout.

## 6. Technical Stack

Frontend:
Framework: React.js (component-based architecture makes building reusable product cards and filters organized)
Styling: Tailwind CSS (speeds up responsive UI development for mobile and desktop screens)

Backend:
Framework: Node.js + Express.js (lightweight and uses JavaScript, matching the frontend language)
API: RESTful API (standard structure for handling CRUD operations via JSON)
Authentication: JWT (JSON Web Tokens) + bcrypt (secure stateless authentication with password hashing)

Database:
DBMS: PostgreSQL (reliable relational database for structured data like users, categories, products, and orders)
ORM: Prisma (simplifies database queries, migrations, and prevents SQL injection)

Development Tools:
Version Control: Git / GitHub
Project Management: GitHub Projects
Testing: Jest + Supertest (for unit and API integration testing to achieve 70%+ test coverage)
CI/CD: GitHub Actions (runs automated tests on pull requests)

## 7. System Architecture
Brooz follows a 3-Tier Client-Server Architecture that separates the user interface, business logic, and data storage:

Data Flow:
User (Browser) -> Frontend (React SPA) -> REST API (HTTPS / JSON) -> Backend (Node.js / Express) -> ORM (Prisma) -> Database (PostgreSQL)

1. Presentation Layer (Frontend): Customers and Admins interact with the responsive React web interface to explore categories, manage carts, or update inventory.
2. Application Layer (Backend & REST API): Receives HTTP requests from the frontend, validates user permissions via JWT authentication, processes business logic (stock checks and order creation), and returns JSON responses.
3. Data Layer (Database): Stores persistent data across relational tables (Users, Categories, Products, CartItems, Orders, and OrderItems), accessed safely through Prisma ORM.

## 8. Project Timeline
Sprint 1 (Week 3-4): Project setup, GitHub repository & Kanban board setup, database schema design, and User Authentication (Register/Login).
Sprint 2 (Week 5-6): Multi-Category Catalog (Men's, Women's, Accessories, Home Goods), search & filtering by size/price, and Product Details View.
Sprint 3 (Week 7-8): Shopping Cart management (add/update/remove items) and Checkout Flow (shipping details and order placement).
Sprint 4 (Week 9-10): Order Tracking & History for shoppers, plus the Admin Dashboard for managing products and stock.
Sprint 5 (Week 11-12): Admin order status updates, Nice-to-Have features (Wishlist & Reviews if on schedule), polish, and writing unit/API tests (70%+ coverage).
Sprint 6 (Week 13-14): Final end-to-end integration testing, bug fixes, mobile responsiveness check, and presentation prep.

## 9. Success Criteria
The project will be considered successful if:
- [ ] All core features are implemented and working
- [ ] Users can complete primary workflows without errors
- [ ] Code is well-documented and maintainable
- [ ] Test coverage is at least 70%
- [ ] Application is responsive and user-friendly
- [ ] Security best practices are followed
- [ ] Project-specific: Shoppers can accurately filter products across all four departments (Men's, Women's, Accessories, and Home Goods) by category, size, and price range.
- [ ] Project-specific: Real-time inventory stock updates automatically upon order placement to prevent customers from ordering out-of-stock sizes or items.

## 10. Risks and Mitigation

Risk 1: Learning curve with new web technologies
Mitigation: Complete basic setup tutorials in Week 1, share code templates, and divide frontend/backend tasks based on each member's strengths.

Risk 2: Scope creep (adding too many features)
Mitigation: Strictly prioritize the 6 Core MVP features during Sprints 1-4; only start Nice-to-Have features in Sprint 5 if core tasks are complete.

Risk 3: Merge conflicts and integration issues
Mitigation: Use separate feature branches, require Pull Request reviews before merging to main, and integrate code weekly.

Risk 4: Team member unavailable or midterm exam pressure
Mitigation: Track all tasks transparently on GitHub Projects, hold brief weekly check-ins, and cross-train members to redistribute tasks early if needed.

## 11. Team Roles and Responsibilities

Majed Eyad Khamis Alladaa (120220270) - Product Owner:
- Manages product backlog
- Defines priorities
- Accepts completed work based on acceptance criteria

Abdulrazeq Ahmad Abdulrazeq Alriqeb (120230759) - Scrum Master:
- Facilitates Scrum ceremonies
- Removes blockers
- Tracks progress on GitHub Projects and manages repository PRs

Abdulrazeq Mohammad Abdulrazeq Alriqeb (120231502) - Lead Developer (Backend & Database):
- Backend architecture
- Database design (PostgreSQL & Prisma)
- REST API development and backend testing

Yaseen Mohammad Yousef Hania (120222726) - Frontend Developer:
- UI/UX implementation (React.js & Tailwind CSS)
- Frontend API integration
- Responsive design across devices

Note: All members contribute to coding and testing across all areas in every sprint; these are primary focuses.

## 12. Deliverables
- Working web application
- Source code on GitHub (https://github.com/aalriqeb-source/brooz-store)
- Documentation (README, team-formation.md, project-proposal.md, product-backlog.md, sprint-1-plan.md)
- Test suite (70%+ coverage)
- Presentation slides
- Demo video

Approved by Team:
Majed Eyad Khamis Alladaa - 26/11/2026
Abdulrazeq Ahmad Abdulrazeq Alriqeb - 26/11/2026
Abdulrazeq Mohammad Abdulrazeq Alriqeb - 26/11/2026
Yaseen Mohammad Yousef Hania - 26/11/2026
