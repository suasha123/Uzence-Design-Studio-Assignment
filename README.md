# 📌 Assignment - UI Components

This repository contains the assignment submission for reusable UI components built with **React**, **TailwindCSS**, and **Storybook**.
[View Storybook Datatable](https://68a4ad831b959d101297676c-bcipuejtbw.chromatic.com/?path=/story/components-datatable--default)

---

## 📂 Folder Structure

assignment
└─ frontend
   ├─ src
   │  ├─ assets
   │  ├─ components
   │  ├─ stories
   │  ├─ App.tsx
   │  ├─ app.css
   │  ├─ index.css
   │  └─ main.tsx
   ├─ package.json
   └─ vite.config.ts



## ⚡ Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/suasha123/Uzence-Design-Studio-Assignment
cd Assignment/Frontend
npm install

Run the development server:
npm run dev


📖 Storybook
To run Storybook locally:
npm run storybook

🔗 Deployed Storybook Preview (Chromatic):
Deployed Storybook Preview



🎨 Components Overview
1. InputField

* Variants: filled, outlined, ghost

* States: default, disabled, invalid, with helper text, loading

Example usage:

<InputField 
  label="Email" 
  placeholder="Enter your email" 
  variant="outlined" 
  helperText="We will not share your email." 
/>


2. DataTable

* Simple demo table with mock data.

* Supports column headers and rows rendering.

Example usage:

<DataTable data={[{ name: "John", age: 25, email: "john@example.com" }]} />


📝 Approach

* Built reusable & accessible components with TailwindCSS utility classes.

* Used Storybook to document components and test different states.

* Deployed Storybook with Chromatic for easy preview and review.

