<<<<<<< HEAD
# Englify - Ứng dụng học tiếng Anh qua game

Englify là ứng dụng học tiếng Anh thông qua các trò chơi tương tác, giúp người dùng cải thiện vốn từ vựng và ngữ pháp một cách thú vị.

## Tính năng

- **Đăng nhập**: Màn hình đăng nhập đơn giản
- **3 trò chơi chính**:
  - Đoán từ: Đoán từ tiếng Anh dựa trên gợi ý
  - Điền chỗ trống: Chọn từ đúng để điền vào chỗ trống
  - Trắc nghiệm: Chọn đáp án đúng cho câu hỏi
- **3 cấp độ khó**: Mới tiếp cận, Khá, Tốt
- **Bảng xếp hạng**: Xem top người chơi
- **Kết quả**: Xem điểm số và phần trăm đúng sau mỗi game

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy ứng dụng:
```bash
npm start
```

3. Quét QR code bằng Expo Go app trên điện thoại hoặc chạy trên emulator:
- Android: `npm run android`
- iOS: `npm run ios`
- Web: `npm run web`

## Cấu trúc dự án

```
Englify/
├── App.js                 # Entry point và navigation
├── screens/
│   ├── LoginScreen.js     # Màn hình đăng nhập
│   ├── MainScreen.js      # Màn hình chính
│   ├── GameSelectionScreen.js  # Chọn trò chơi
│   ├── DifficultyScreen.js     # Chọn độ khó
│   ├── ResultsScreen.js        # Màn hình kết quả
│   └── games/
│       ├── WordGuessingGame.js  # Game đoán từ
│       ├── FillBlankGame.js     # Game điền chỗ trống
│       └── MultipleChoiceGame.js # Game trắc nghiệm
└── data/
    └── gameData.js        # Dữ liệu câu hỏi
```

## Công nghệ sử dụng

- React Native
- Expo
- React Navigation
- Expo Linear Gradient
- Expo Vector Icons

## Phát triển

Ứng dụng được xây dựng với React Native và Expo để hỗ trợ cả iOS và Android.

=======
# Englify
>>>>>>> 89464abedf9c0c3548ac60280ae7fcf0adeab4d2
