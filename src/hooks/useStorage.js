import { useState, useEffect } from "react";

//hook for persisting data on localstorage
const useStorage = (key, value) => {
  const [user, setUser] = useState(() => {
    if (typeof value === "function") {
      return value();
    }
    let item = localStorage.getItem(key);
    item = !!item ? JSON.parse(item) : value;
    return item;
  });

  const updateUser = (data) => {
    setUser(data);
  };

  useEffect(() => {
    const save = (user) => {
      user = typeof user === "string" ? user : JSON.stringify(user);
      localStorage.setItem(key, user);
    };
    user !== undefined && save(user);
  }, [key, user]);

  return [user, updateUser];
};

export default useStorage;
