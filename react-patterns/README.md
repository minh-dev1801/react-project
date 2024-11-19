# React Patterns

![Demo 1](./public/1.png)
![Demo 2](./public/2.png)
![Demo 3](./public/3.png)

## Introduction

**React Patterns** is a project created to demonstrate common design patterns in React applications. This project showcases various implementation approaches including Render Props, Compound Components, and other advanced patterns. Through practical examples, you will learn how to structure your components for better reusability, maintainability, and flexibility in React applications.

Key patterns demonstrated:

- Render Props for flexible component rendering
- Compound Components for intuitive component composition
- State management patterns
- Component communication patterns

## Installation

Follow the steps below to set up and run the project locally:

1. **Clone this repository:**
   ```bash
   git clone https://github.com/minh-dev1801/react-project.git
   ```
2. **Navigate to the project directory and install dependencies:**
   ```bash
   cd react-patterns
   npm install
   ```
3. **Start the application:**
   ```bash
   npm run dev
   ```
4. **Open the app:**
   Open your browser and go to [http://localhost:5173](http://localhost:5173).

## Technologies Used

1. **Render Props Pattern**: 
   - Used in SearchableList component
   - Allows customization of how items are rendered
   - Example: `children(item)` pattern for flexible item rendering

2. **Compound Components Pattern**: 
   - Used in Accordion component
   - Components: Accordion.Item, Accordion.Title, Accordion.Content
   - Provides better component composition and flexibility

3. **Flexible Key Generation**:
   - Using `itemKeyFn` prop for dynamic key generation
   - Enhances list rendering flexibility
   - Examples:
     ```jsx
     // With objects containing id
     <SearchableList 
       items={[{ id: 1, name: "Item 1" }]} 
       itemKeyFn={(item) => item.id}
     />

     // With objects containing uuid
     <SearchableList 
       items={[{ uuid: "abc-123", name: "Item 1" }]} 
       itemKeyFn={(item) => item.uuid}
     />

     // With simple strings
     <SearchableList 
       items={["A", "B", "C"]} 
       itemKeyFn={(item) => item}
     />
     ```

4. **Debouncing Technique**:
   - Implemented in SearchableList for optimized search
   - Delays search execution until user stops typing
   - Example implementation:
     ```jsx
     function handleChange(event) {
       if (lastChange.current) {
         clearTimeout(lastChange.current);
       }
       lastChange.current = setTimeout(() => {
         setSearchTeam(event.target.value);
       }, 500);
     }
     ```
   - Benefits:
     - Reduces unnecessary API calls
     - Improves performance
     - Better user experience
