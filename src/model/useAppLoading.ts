import { useState } from "react";
import { createModel } from "hox";

function useAppLoading() {
  const [loading, setLoading] = useState(false);
  return {
    loading,
    setLoading,
  };
}

export default createModel(useAppLoading);
