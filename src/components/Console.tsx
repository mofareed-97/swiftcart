"use client";

import React from "react";

function Console({ items }: { items: any }) {
  console.log(items);
  return <div>Console</div>;
}

export default Console;
