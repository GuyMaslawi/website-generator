import { useEffect, useRef, useMemo, useCallback } from "react";

interface KeyboardOptions {
    ctrl?: boolean;
    cmd?: boolean;
    shift?: boolean;
    alt?: boolean;
}

export const useKeyboard = (
    key: string,
    callback: () => void,
    options: KeyboardOptions = {}
) => {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;


    const memoizedOptions = useMemo(() => options, [
        options.ctrl,
        options.cmd,
        options.shift,
        options.alt
    ]);


    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key.toLowerCase() !== key.toLowerCase()) return;

        const { ctrl, cmd, shift, alt } = memoizedOptions;

        if (ctrl && !event.ctrlKey) return;
        if (cmd && !event.metaKey) return;
        if (shift && !event.shiftKey) return;
        if (alt && !event.altKey) return;

        event.preventDefault();
        callbackRef.current();
    }, [key, memoizedOptions]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);
}; 