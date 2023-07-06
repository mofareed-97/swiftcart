"use client";

import React from "react";

function Console({ items }: { items: any }) {
  console.log(`TESTING CONSOLE : ${items}`);
  return <div>Console</div>;
}

export default Console;
