// src/components/SideBar.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FiSearch, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function SideBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // state
  const [categories, setCategories] = useState([]);
  const [showAllCats, setShowAllCats] = useState(false);

  const [selected, setSelected] = useState(new Set((searchParams.get("categories") || "").split(",").filter(Boolean)));
  const [q, setQ] = useState(searchParams.get("q") || "");
  const [min, setMin] = useState(searchParams.get("min") || "");
  const [max, setMax] = useState(searchParams.get("max") || "");

  // fetch cats
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((r) => r.json())
      .then((data) => setCategories(Array.isArray(data) ? data : []))
      .catch(() => setCategories([]));
  }, []);

  const hasFilters = useMemo(() => !!q || !!min || !!max || selected.size > 0, [q, min, max, selected]);

  const toggleCat = (cat) => {
    const next = new Set(selected);
    next.has(cat) ? next.delete(cat) : next.add(cat);
    setSelected(next);
  };

  const removeCat = (cat) => {
    const next = new Set(selected);
    next.delete(cat);
    setSelected(next);
  };

  const apply = () => {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    if (selected.size) sp.set("categories", [...selected].join(","));
    if (min) sp.set("min", String(min));
    if (max) sp.set("max", String(max));
    const qs = sp.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  };

  const reset = () => {
    setSelected(new Set());
    setQ("");
    setMin("");
    setMax("");
    router.push(pathname);
  };

  const inputBase =
    "w-full rounded-xl border <border-neutral-400></border-neutral-400> bg-white/80 px-3 py-2.5 text-sm outline-none transition " +
    "placeholder:text-neutral-400 focus:border-neutral-900 hover:border-neutral-900";

  const visibleCats = showAllCats ? categories : categories.slice(0, 6);

  return (
    <aside className="sticky top-20 rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-md backdrop-blur-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        {hasFilters && (
          <button onClick={reset} className="text-sm text-neutral-500 hover:text-black" title="Clear all filters">
            Clear all
          </button>
        )}
      </div>

      {/* Applied chips */}
      {hasFilters && (
        <div className="mb-4 flex flex-wrap gap-2">
          {[...selected].map((cat) => (
            <Chip key={cat} onRemove={() => removeCat(cat)}>
              {cat}
            </Chip>
          ))}
          {q && <Chip onRemove={() => setQ("")}>q: {q}</Chip>}
          {min && <Chip onRemove={() => setMin("")}>min: {min}</Chip>}
          {max && <Chip onRemove={() => setMax("")}>max: {max}</Chip>}
        </div>
      )}

      {/* Search */}
      <div className="mb-5">
        <label className="mb-2 block text-md font-medium text-black">Search</label>
        <div className="relative">
          <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && apply()}
            placeholder="Search products…"
            className={`${inputBase} pl-9`}
          />
          {q && (
            <button
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
              onClick={() => setQ("")}
            >
              <FiX />
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-5">
        <p className="mb-2 text-md text-black  font-medium">Categories</p>

        {!categories.length ? (
          <div className="space-y-2">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-2">
              {visibleCats.map((cat) => {
                const active = selected.has(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCat(cat)}
                    className={[
                      "rounded-full border px-3 py-1.5 text-sm transition",
                      active
                        ? "border-black bg-black text-white shadow"
                        : "border-neutral-300 text-neutral-700 hover:border-black",
                    ].join(" ")}
                  >
                    <span className="capitalize">{cat}</span>
                  </button>
                );
              })}
            </div>

            {categories.length > 6 && (
              <button
                onClick={() => setShowAllCats((s) => !s)}
                className="mt-3 inline-flex items-center gap-1 text-sm text-neutral-600 hover:text-black"
              >
                {showAllCats ? (
                  <>
                    Show less <FiChevronUp />
                  </>
                ) : (
                  <>
                    Show all <FiChevronDown />
                  </>
                )}
              </button>
            )}
          </>
        )}
      </div>

      {/* Price */}
      <div className="mb-6">
        <p className="mb-2 text-md font-medium text-black">Price</p>
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">$</span>
            <input
              type="number"
              inputMode="decimal"
              placeholder="Min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className={`${inputBase} w-28 pl-7`}
            />
          </div>
          <span className="text-neutral-400">–</span>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">$</span>
            <input
              type="number"
              inputMode="decimal"
              placeholder="Max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className={`${inputBase} w-28 pl-7`}
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={apply}
          className="flex-1 rounded-xl bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:translate-y-px"
        >
          Apply filters
        </button>
        <button
          onClick={reset}
          className="flex-1 rounded-xl border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
        >
          Reset
        </button>
      </div>
    </aside>
  );
}

function Chip({ children, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-700">
      {children}
      <button
        onClick={onRemove}
        className="ml-1 rounded p-0.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
        aria-label="Remove"
      >
        <FiX />
      </button>
    </span>
  );
}

function Skeleton() {
  return <div className="h-8 w-full animate-pulse rounded-lg bg-neutral-100" />;
}
