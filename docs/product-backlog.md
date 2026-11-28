# Product Backlog - Brooz E-Commerce Store

## Backlog Summary
- Project: Brooz E-Commerce Store
- Total User Stories : 15

## User Types
1. Guest Visitor: Explores and searches products on Brooz without logging in.
2. Customer: Filters products, manages cart, places orders, and tracks delivery.
3. Admin: Manages products, stock levels, and customer order statuses.

## Must-Have Stories (Priority 1)

### Story 1: User Registration (5 points)
As a Guest Visitor,
I want to create an account on Brooz using my name, email, and password,
So that I can log in and place orders.

- Priority: Must-Have
- Depends on: Project and database setup
- Acceptance Criteria:
  1. Given I am on the register page, when I enter my name, a valid email, and a password (at least 8 characters), then my account is created and I am redirected to the home page.
  2. Given I enter an email that is already registered, when I submit the form, then I see an error message saying "Email already registered".

### Story 2: User Login and Logout (3 points)
As a Customer or Admin,
I want to log in with my email and password and log out,
So that I can access my account safely.

- Priority: Must-Have
- Depends on: Story 1
- Acceptance Criteria:
  1. Given I enter the right email and password, when I click Login, then I am logged into my account.
  2. Given I enter a wrong email or password, when I click Login, then I see "Invalid email or password".
  3. Given I am logged in, when I click Logout, then my session ends and I go back to the home page.

### Story 3: Explore Store Departments (3 points)
As a Guest Visitor or Customer,
I want to explore products in four departments (Men's, Women's, Accessories, Home Goods),
So that I can view items by category.

- Priority: Must-Have
- Depends on: Database setup
- Acceptance Criteria:
  1. Given I am on the store page, when I select a department like Men's Clothing, then only products in that department are shown with their image, name, and price.

### Story 4: Search and Filter Products (5 points)
As a Customer,
I want to search products by name and filter them by size and price,
So that I can find the item I want quickly.

- Priority: Must-Have
- Depends on: Story 3
- Acceptance Criteria:
  1. Given I type a product name in the search bar, when I press Enter, then matching products are displayed.
  2. Given I select a size (like L) and a maximum price, when I apply the filters, then only matching items appear.
  3. Given no products match my search or filters, when results load, then I see "No products found".

### Story 5: View Product Details and Stock (3 points)
As a Guest Visitor or Customer,
I want to view a product's images, description, price, and available sizes,
So that I can check if my size is in stock before buying.

- Priority: Must-Have
- Depends on: Story 3
- Acceptance Criteria:
  1. Given I click on a product, when the details page opens, then I see its description, price, images, and available sizes.
  2. Given a size has 0 items left, when I view the product, then that size is marked "Out of Stock" and cannot be selected.

### Story 6: Shopping Cart Management (5 points)
As a Customer,
I want to add products to my cart, change quantities, and remove items,
So that I can review my order before checkout.

- Priority: Must-Have
- Depends on: Story 5
- Acceptance Criteria:
  1. Given I choose an available size, when I click "Add to Cart", then the item is added and the cart counter updates.
  2. Given I am on the cart page, when I change an item's quantity or remove it, then the total price updates automatically.
  3. Given I try to add more than the available stock, when I increase the quantity, then the system stops at the maximum available stock.

### Story 7: Checkout and Place Order (8 points)
As a logged-in Customer,
I want to enter my shipping address and confirm my order,
So that I can buy the items in my cart.

- Priority: Must-Have
- Depends on: Story 2 and Story 6
- Acceptance Criteria:
  1. Given I am logged in with items in my cart, when I enter my address and click "Place Order", then the order is saved as "Pending" and my cart is cleared.
  2. Given an order is placed, when it completes, then the ordered quantity is subtracted from the product stock.
  3. Given I am a Guest Visitor, when I click Checkout, then I am asked to log in first.

### Story 8: Admin Product and Stock Management (8 points)
As an Admin,
I want to add, edit, or delete products and update stock quantities,
So that the store catalog stays accurate.

- Priority: Must-Have
- Depends on: Story 2
- Acceptance Criteria:
  1. Given I am logged in as Admin, when I add a new product with department, price, and stock, then it appears in the store.
  2. Given I edit a product's price or stock, when I save changes, then the updates show immediately.
  3. Given a normal Customer tries to open the admin dashboard link, when the page loads, then access is blocked.

## Should-Have Stories (Priority 2)

### Story 9: View Order History and Status (3 points)
As a Customer,
I want to view my previous orders and their delivery status (Pending, Processing, Shipped, Delivered),
So that I can track my orders.

- Priority: Should-Have
- Depends on: Story 7
- Acceptance Criteria:
  1. Given I am logged in, when I open "My Orders", then I see all my orders with the date, total price, and current status.

### Story 10: Admin Update Order Status (5 points)
As an Admin,
I want to view all customer orders and update their status,
So that customers know when their order is shipped.

- Priority: Should-Have
- Depends on: Story 7 and Story 8
- Acceptance Criteria:
  1. Given I am on the Admin Orders page, when I change an order status to "Shipped", then the customer sees the new status in "My Orders".

### Story 11: Edit Profile and Saved Address (3 points)
As a Customer,
I want to update my profile info and save a default shipping address,
So that I do not have to type my address every time I order.

- Priority: Should-Have
- Depends on: Story 1
- Acceptance Criteria:
  1. Given I save my address in Profile Settings, when I go to Checkout later, then my address is filled in automatically.

### Story 12: Product Reviews and Ratings (5 points)
As a Customer,
I want to rate products (1 to 5 stars) and write a short review,
So that I can share my opinion on product quality and sizing.

- Priority: Should-Have
- Depends on: Story 5 and Story 7
- Acceptance Criteria:
  1. Given I am on a product page, when I submit a star rating and comment, then my review appears on the page.

## Nice-to-Have Stories (Priority 3)

### Story 13: Wishlist (3 points)
As a Customer,
I want to save favorite products to a wishlist,
So that I can find and buy them later.

- Priority: Nice-to-Have
- Depends on: Story 2 and Story 5

### Story 14: Promo Codes at Checkout (5 points)
As a Customer,
I want to enter a discount promo code at checkout,
So that I get a discount on my order total.

- Priority: Nice-to-Have
- Depends on: Story 7

### Story 15: Admin Low-Stock and Sales Summary (5 points)
As an Admin,
I want to see total orders, total sales, and low-stock items on my dashboard,
So that I know which products need restocking.

- Priority: Nice-to-Have
- Depends on: Story 7 and Story 8

## Icebox (Future Ideas)
- Online card payment integration (Stripe or PayPal)
- Automated email notifications when order status changes

## Frontend User Stories (Storefront & Shopping Experience)

### US-01: Browse Store Categories
**As a** shopper,  
**I want to** browse products organized by main categories (Fashion, Accessories, Home Essentials),  
**So that** I can easily explore items relevant to my interests.

**Acceptance Criteria:**
- **Given** I am on the Brooz homepage or store page,
- **When** I select a specific category from the navigation menu or category cards,
- **Then** the product grid updates to display only products belonging to that selected category.

---

### US-02: Search Products by Keyword
**As a** customer,  
**I want to** search for products using keywords in a search bar,  
**So that** I can quickly find a specific item without scrolling through the entire catalog.

**Acceptance Criteria:**
- **Given** I am viewing the storefront,
- **When** I type a product name or keyword into the search bar and submit,
- **Then** matching products are displayed immediately, or a clear "No products found" message appears if there are no matches.

---

### US-03: Filter and Sort Products
**As a** budget-conscious buyer,  
**I want to** filter products by price range and sort them by price or newest arrivals,  
**So that** I can find the best options that fit my budget.

**Acceptance Criteria:**
- **Given** I am viewing a list of products,
- **When** I apply a price range filter or select a sorting option (e.g., Price: Low to High),
- **Then** the displayed products update dynamically to match the selected filter and sort order.

---

### US-04: View Product Details
**As a** potential buyer,  
**I want to** click on a product card to view its dedicated details page (high-resolution image, price, description, and stock availability),  
**So that** I can make an informed decision before purchasing.

**Acceptance Criteria:**
- **Given** I see a product card in the catalog,
- **When** I click on the product title or image,
- **Then** I am navigated to `/products/:id` showing the product's full description, price, availability status, and an "Add to Cart" button.

---

### US-05: Manage Shopping Cart
**As a** customer,  
**I want to** add products to my shopping cart, adjust item quantities, and remove items,  
**So that** I can review my selected items and total cost before checkout.

**Acceptance Criteria:**
- **Given** I am viewing a product or my shopping cart page,
- **When** I click "Add to Cart" or update item quantities,
- **Then** the cart badge counter and subtotal price update accurately in real time.