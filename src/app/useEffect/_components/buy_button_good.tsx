"use client";
import React from "react";

export default function BuyButtonGood() {
  const handleBuyClick = () => {
    // 非同期で /api/buy に POST リクエストを送信
    fetch("/api/buy", { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        // 通知を表示するなどの処理
        alert("購入が完了しました");
      });
  };

  return <button onClick={handleBuyClick} className="border border-1 border-black p-1">購入する</button>;
}
