// src/pages/Welcome.jsx
import React from 'react'

const Welcome = () => {
  // Không cần background, không cần Header, không cần <main>
  // Vì tất cả đã nằm trong App.jsx
  return (
    <div className="flex-1 flex items-center justify-center">
      <h1 className="text-white bg-center text-4xl">Welcome page is running</h1>
      {/* Đây có thể là component "kính mờ" của bạn */}
    </div>
  )
}

export default Welcome