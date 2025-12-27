## 🧱 Component Structure Overview

This project is a **React-based landing page** built with reusable components for clarity, scalability, and maintainability. The UI is divided into logical sections such as Hero, Services, Features, Technology, Statistics, CTA, and Footer.

---

## 🦸 Hero Section

### `HeroContainer`

The `HeroContainer` component renders the top section of the landing page. It includes the site header, hero content, background visuals, and the main hero illustration.

**Responsibilities:**
- Displays the background image
- Renders the navigation header
- Displays the hero content and main illustration


## 🧠 Main Content Area

### `Main`

The `Main` component houses all primary sections of the landing page. It is composed using a reusable `Content` component to ensure consistency and reduce duplication.

---

### Sections Included

#### 🔹 Services Section

Highlights key services offered by the platform using icons and descriptive text:
- Solve Problems Real Time
- Secured & Safe Payments
- 24/7 Customer Support

---

#### 🔹 Features Section
Showcases a core product feature alongside an illustration and supporting content.

---

#### 🔹 Technology Section
Explains the technology behind the platform and includes:
- Supporting content
- Author testimonial
- Author profile information
- Visual illustration

---

#### 🔹 Statistics Section
Displays key metrics and platform statistics in a concise and visually engaging format.

---

#### 🔹 Call-To-Action (CTA) Section
Encourages users to take action with:
- Clear messaging
- Call-to-action buttons
- Informational highlights

Buttons currently trigger a placeholder alert: "Feature not added yet/ Functionality not added yet"

## ♻️ Reusable Component

### `Content`

The `Content` component is a flexible, reusable UI block used throughout the application to render:
- Icons / Images
- Titles
- Subtitles
- Descriptions

This approach ensures consistency across sections and keeps the codebase clean and maintainable.

---

## 🧾 Footer

### `Footer`

The `Footer` component concludes the landing page with:
- Company mission statement
- Contact information (address & email)
- Navigation links
- Copyright notice
- Design credit

## ♿ Accessibility

The application follows accessibility best practices to improve usability for all users:
- Semantic HTML elements (`header`, `main`,`section`, `footer`)
- `aria-label` attributes for improved screen reader support
- Descriptive `alt` text for all images

---

## 🛠️ Tech Stack

The project was built using the following technologies:
- **React**
- **Vite**
- **CSS (Flexbox & Responsive Design)**
- **Reusable Component Architecture**


## 🎨 Design Credit

UI design inspired by **Sark (Figma)**.


