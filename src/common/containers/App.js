import { useEffect } from "react";
import { useStorage } from "../../hooks";
import { useSelector, useDispatch } from "react-redux";
import { setGlobalAction } from "../actions/actions";

export default function App({ children }) {
  const value = useSelector((state) => state.isDark);
  const userValue = useSelector((state) => state.user);

  const dispatcher = useDispatch();

  const [isDark] = useStorage("THEME", value);
  const [user] = useStorage("USER", userValue);

  // set initial state based on persisted state
  useEffect(() => {
    dispatcher(
      setGlobalAction({
        isDark,
        user,
      })
    );
  }, []);

  return children;
}
