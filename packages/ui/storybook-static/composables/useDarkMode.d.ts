type Theme = 'light' | 'dark';
export declare function useDarkMode(): {
    isDark: import('vue').Ref<boolean, boolean>;
    setTheme: (theme: Theme) => void;
    toggle: () => void;
};
export {};
