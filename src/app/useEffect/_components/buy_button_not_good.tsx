"use client";
import React, { useState, useEffect } from "react";

export default function BuyButtonNotGood() {
  const [buy, setBuy] = useState(false);

  useEffect(() => {
    if (buy) {
      // 非同期で /api/buy に POST リクエストを送信
      fetch("/api/buy", { method: "POST" })
        .then((response) => response.json())
        .then((data) => {
          // 通知を表示するなどの処理
          alert("購入が完了しました");
          setBuy(false); // 状態をリセット
        });
    }
  }, [buy]);

  const handleBuyClick = () => {
    setBuy(true);
  };

  return (
    <button
      onClick={handleBuyClick}
      className="border border-1 border-black p-1 rounded"
    >
      購入する
    </button>
  );
}
