# 🏸 Backend Website Bán Đồ Cầu Lông

Đây là dự án **Back-end cho hệ thống bán hàng cầu lông online**, được xây dựng nhằm phục vụ nhu cầu mua sắm các sản phẩm như vợt, giày, quần áo, phụ kiện,... Dự án hỗ trợ đầy đủ các chức năng cho cả **khách hàng** và **quản trị viên**, bao gồm: quản lý sản phẩm, giỏ hàng, đơn hàng, thanh toán online (VNPay, PayPal), chatbot hỗ trợ, đánh giá, xác thực người dùng (JWT), gửi email, báo cáo,... Hệ thống sử dụng các công nghệ như **Node.js**, **Express**, **MySQL**, **Sequelize**, cùng với các tích hợp như **Gemini AI**, **NodeMailer**, **VNPay**, **PayPal**.

---
## 🔧 Chức năng hệ thống

### 🛒 Khách hàng
- Quản lý giỏ hàng
- Đánh giá sản phẩm
- Chatbot hỗ trợ (Gemini AI)
- Thanh toán online:
  - VNPay
  - PayPal

### 🛠️ Quản trị viên
- Quản lý loại sản phẩm
- Quản lý sản phẩm
- Quản lý đơn hàng
- Quản lý người dùng
- Quản lý mã khuyến mãi
- Quản lý kho hàng
- Xem báo cáo (doanh thu, đơn hàng)

### 👥 Dùng chung (Khách hàng & Quản trị viên)
- Xác thực người dùng (JWT)
- Quản lý thông tin cá nhân

---
## 🚀 Hướng dẫn cài đặt

**Bước 1:** Clone repo từ GitHub về máy:

```bash
https://github.com/NotASleeper/BE_BadmintonWeb.git
```
**Bước 2:** Mở thư mục vừa tải về trong Visual Studio Code.
**Bước 3:** Mở terminal và cài đặt các thư viện cần thiết:
```bash
yarn add sequelize mysql2 express
```
```bash
yarn add nodemon --dev
```
```bash
yarn add sequelize-cli --dev
```
**Bước 4:** Mở MySQL Workbench và tạo một cơ sở dữ liệu mới.
**Bước 5:** Mở file config/config.json, sửa các thông tin kết nối cơ sở dữ liệu:
```json
{
  "username": "tên đăng nhập MySQL của bạn",
  "password": "mật khẩu MySQL của bạn",
  "database": "tên cơ sở dữ liệu vừa tạo"
}
```
**Bước 6:** Thực hiện migrate dữ liệu:
```bash
npx sequelize db:migrate
```
**Bước 7:** Seed dữ liệu mẫu:
```bash
npx sequelize db:seed:all
```
**Bước 8:** Chạy server:
```bash
yarn dev
```
 Khi server đã chạy, mở trình duyệt và truy cập: http://localhost:3030
**Bước 9:** Tạo thư mục gốc tạo file .env vào cập nhập các khóa vào
```bash
CLOUDINARY_NAME=<cloudinary_account_name>
CLOUDINARY_KEY=<cloudinary_api_key>
CLOUDINARY_SECRET=<cloudinary_api_secret>

EMAIL_USERNAME=<your_email_address>
EMAIL_PASSWORD=<your_email_app_password>

VNPAY_SECRET=<vnpay_hash_secret>
VNPAY_TMN_CODE=<vnpay_terminal_code>

CHATBOT_API_KEY=<gemini_or_ai_api_key>

PAYPAL_CLIENT_ID=<paypal_client_id>
PAYPAL_SECRET=<paypal_client_secret>
PAYPAL_BASE_URL=https://api-m.sandbox.paypal.com
```
---
## 🚀 Ngôn ngữ, công nghệ ứng dụng

### Back-end
![NodeJS](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge)
![ExpressJS](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white&style=for-the-badge)

### ORM
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=white&style=for-the-badge)

### Xác thực & Bảo mật
![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white&style=for-the-badge)

### Gửi Email
![NodeMailer](https://img.shields.io/badge/NodeMailer-3C4646?logo=gmail&logoColor=white&style=for-the-badge)

### Thanh toán
![VNPay](https://img.shields.io/badge/VNPay-DA251D?style=for-the-badge&logoColor=white)
![PayPal](https://img.shields.io/badge/PayPal-00457C?logo=paypal&logoColor=white&style=for-the-badge)

### AI tích hợp
![GeminiAI](https://img.shields.io/badge/Gemini_AI-4285F4?logo=google&logoColor=white&style=for-the-badge)

### Công cụ dev
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=white&style=for-the-badge)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=black&style=for-the-badge)

---
## 📂 Tài nguyên liên quan
Bạn có thể tham khảo phần **Front-end** của hệ thống và **tài liệu mô tả chi tiết** được thực hiện cùng lúc trong quá trình phát triển dự án để có thể chạy được dự án trọn vẹn và có cái nhìn tổng quan nhất.
- 🔗 **Front-end GitHub Repo:** [https://github.com/PhuongHo105/BadmintonGear.git](https://github.com/PhuongHo105/BadmintonGear.git)
- 📄 **Tài liệu mô tả dự án:** [Link Document](https://github.com/NotASleeper/BA_BadmintonWebsite.git)
