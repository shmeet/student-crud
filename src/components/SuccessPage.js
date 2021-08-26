import React from "react";
import { Link, useLocation } from "react-router-dom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function SuccessPage() {
  const query = useQuery();
  const msg = query.get("msg");
  return (
    <>
      <h2>Success</h2>
      <p>{msg}</p>
      <Link to="/">Home</Link>
    </>
  );
}
