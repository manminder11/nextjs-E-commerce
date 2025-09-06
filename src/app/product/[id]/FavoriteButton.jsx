// app/product/[id]/FavoriteButton.jsx
"use client";

import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      title="Add to Favorites"
      type="button"
      onClick={() => setIsFavorite((v) => !v)}
      className="rounded-lg bg-black p-3 text-md  h-10 w-10 text-white transition hover:opacity-90 active:translate-y-px cursor-pointer "
    >
      {isFavorite ? <FaStar className="text-yellow-400" /> : <FaRegStar />}
    </button>
  );
}
