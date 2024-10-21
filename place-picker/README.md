# Place Picker

![Demo header](./images/web-header.PNG)
![Demo footer](./images/web-footer.PNG)

## Giới thiệu

Place Picker là một dự án được tao ra để lưu các địa điểm du lịch mà bạn muốn đi hoặc đã đi rồi.

## Tính năng

- **Xem địa điểm**: Hiển thị danh sách các địa điểm du lịch ở Việt Nam.
- **Thêm địa điểm**: Thêm địa điểm du lịch vào nhật ký hành trình.
- **Xóa địa điểm**: Xóa địa điểm khỏi nhật ký hành trình.

## Cài đặt

Thực hiện các bước sau để thiết lập và chạy dự án cục bộ:

1. **Clone this repository:**
   ```bash
   git clone https://github.com/minh-dev1801/react-project.git

   ```
2. **Install dependencies:**

   ```bash
   cd place-picker
   npm install

   ```

3. **Start the application:**

   ```bash
   npm run start

   ```

4. **Open the app:**
   ```bash
   Go to http://localhost:5173 in your browser.
   ```

## Công nghệ sử dụng

- **Tailwind CSS**: Giao diện người dùng của dự án được viết bằng thư viện Tailwind CSS.
- **Data**: Dữ liệu địa điểm được lưu file json trong backend.
- **ExpressJS**: Api để lấy và cập nhật dữ liệu viết bằng express.
- **useEffect**: Dùng để tạo side effect tính thời gian đóng modal bằng setInterval và setTimeout.
- **State**: Quản lý các state, fetch data của dự án bằng Redux tool kit.
- **Fetch data**: Dữ liệu được lấy bằng async/wait và fetch.
