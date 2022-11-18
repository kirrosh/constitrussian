"use client";
import { Button, Collapse, Link } from "@nextui-org/react";
import { useState } from "react";

export default function Sidebar() {
  return (
    <div>
      <h4>Разделы</h4>
      <div className="flex flex-col gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <Item key={i} />
        ))}
      </div>
    </div>
  );
}

const Item = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);
  return (
    <div>
      <Button color="secondary" onClick={toggle}>
        Category
      </Button>
      <div
        style={{ maxHeight: open ? "500px" : 0 }}
        className="transition-all duration-500 overflow-hidden px-4"
      >
        {Array.from({ length: 10 }).map((_, j) => (
          <a
            key={j}
            className="before:w-1 before:h-1 before:mr-4 before:bg-slate-500 before:rounded-full block"
          >
            Go to Button
          </a>
        ))}
      </div>
    </div>
  );
};
