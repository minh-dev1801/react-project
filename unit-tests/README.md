# Unit Tests

![Demo 1](./public/1.png)

## Introduction

**Unit Tests** là một dự án minh họa việc triển khai kiểm thử đơn vị (unit testing) trong React. Dự án này trình bày các phương pháp và kỹ thuật viết unit test hiệu quả cho các component và custom hooks trong ứng dụng React. Thông qua các ví dụ thực tế, bạn sẽ học được cách viết và tổ chức unit test một cách có hệ thống.

Các tính năng chính được trình bày:

- Viết unit test cho React components 
- Kiểm thử custom hooks và logic nghiệp vụ
- Sử dụng Jest và React Testing Library
- Mock functions và dependencies trong testing

## Installation

Follow the steps below to set up and run the project locally:

1. **Clone this repository:**
   ```bash
   git clone https://github.com/minh-dev1801/react-project.git
   ```
2. **Navigate to the project directory and install dependencies:**
   ```bash
   cd unit-tests
   npm install
   ```
3. **Start the application:**
   ```bash
   npm run dev
   ```
4. **Open the app:**
   Open your browser and go to [http://localhost:5173](http://localhost:5173).

## Technologies Used

1. **Testing Libraries & Tools**: 
   - Jest: Framework testing chính
   - React Testing Library: Thư viện testing cho React components
   - @testing-library/hooks: Testing custom hooks
   - @testing-library/user-event: Mô phỏng tương tác người dùng

2. **Testing Patterns & Approaches**: 
   - Component Testing: Kiểm thử render output và user interactions
   - Hook Testing: Kiểm thử custom hooks độc lập
   - Integration Testing: Kiểm thử tương tác giữa các components
   - Mock Testing: Mô phỏng API calls và external dependencies

3. **Testing Best Practices**:
   - Arrange-Act-Assert pattern
   - Test cases độc lập và có thể tái sử dụng
   - Example:
     ```jsx
     describe('ProductComponent', () => {
       it('should render product details correctly', () => {
         // Arrange
         render(<ProductComponent {...mockProps} />);
         
         // Act
         const productTitle = screen.getByText(/product name/i);
         
         // Assert
         expect(productTitle).toBeInTheDocument();
       });
     });
     ```

4. **Testing Coverage & Quality**:
   - Jest coverage reports
   - Unit test cho critical business logic
   - Integration tests cho user flows
   - Example configuration:
     ```jsx
     // jest.config.js
     module.exports = {
       collectCoverageFrom: [
         'src/**/*.{js,jsx}',
         '!src/index.js',
       ],
       coverageThreshold: {
         global: {
           statements: 80,
           branches: 80,
           functions: 80,
           lines: 80,
         }
       }
     };
     ```
   - Benefits:
     - Phát hiện lỗi sớm trong quá trình phát triển
     - Đảm bảo chất lượng code
     - Tài liệu hóa hành vi của ứng dụng
