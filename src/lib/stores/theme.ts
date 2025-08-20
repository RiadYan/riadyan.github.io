import { writable } from "svelte/store";

const isBrowser = typeof window !== "undefined";

const initialTheme = isBrowser
    ? localStorage.getItem("theme") || "dark"
    : "dark";

export const theme = writable(initialTheme);

theme.subscribe((val) => {
    if (isBrowser) {
        document.documentElement.classList.toggle("light", val === "light");
        localStorage.setItem("theme", val);
    }
});

