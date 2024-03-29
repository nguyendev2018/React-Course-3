import React, { useEffect, useState } from "react";

export default function ChildHookEffect() {
  useEffect(() => {
    // Viết cho didUpdate
    console.log("didUpdate");
    return () => {
      console.log("will unmount");
    };
  });

  return (
    <div>
      <h1>Update</h1>
    </div>
  );
}
