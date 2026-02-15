import './ToogleButton.css'
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Functions/ReduxTheme";

export const ToogleButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.mode);

    return (
        <label className="theme">
        <input
            type="checkbox"
            className="input"
            checked={theme === "dark"}
            onChange={() => dispatch(toggleTheme())}
        />

        {/* SUN */}
        <svg className="icon icon-sun" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
        </svg>

        {/* MOON */}
        <svg className="icon icon-moon" viewBox="0 0 24 24">
            <path d="m12.3 4.9..." />
        </svg>
        </label>
    );
};
