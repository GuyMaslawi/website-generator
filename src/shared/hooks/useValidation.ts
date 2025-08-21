import { useState, useCallback } from "react";

interface ValidationRule {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    email?: boolean;
    phone?: boolean;
}

interface ValidationError {
    field: string;
    message: string;
}

export const useValidation = () => {
    const [errors, setErrors] = useState<ValidationError[]>([]);

    const validate = useCallback((value: string, field: string, rules: ValidationRule): boolean => {
        let hasErrors = false;
        
        if (rules.required && (!value || value.trim() === "")) {
            hasErrors = true;
        }

        if (value && rules.minLength && value.length < rules.minLength) {
            hasErrors = true;
        }

        if (value && rules.maxLength && value.length > rules.maxLength) {
            hasErrors = true;
        }

        if (value && rules.pattern && !rules.pattern.test(value)) {
            hasErrors = true;
        }

        if (value && rules.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            hasErrors = true;
        }

        if (value && rules.phone && !/^[\+]?[\d\s\-\(\)]+$/.test(value)) {
            hasErrors = true;
        }
        
        setErrors(currentErrors => {
            const newErrors = currentErrors.filter(err => err.field !== field);

            if (rules.required && (!value || value.trim() === "")) {
                newErrors.push({ field, message: "This field is required" });
            }

            if (value && rules.minLength && value.length < rules.minLength) {
                newErrors.push({ field, message: `Minimum ${rules.minLength} characters required` });
            }

            if (value && rules.maxLength && value.length > rules.maxLength) {
                newErrors.push({ field, message: `Maximum ${rules.maxLength} characters allowed` });
            }

            if (value && rules.pattern && !rules.pattern.test(value)) {
                newErrors.push({ field, message: "Invalid format" });
            }

            if (value && rules.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                newErrors.push({ field, message: "Please enter a valid email address" });
            }

            if (value && rules.phone && !/^[\+]?[\d\s\-\(\)]+$/.test(value)) {
                newErrors.push({ field, message: "Please enter a valid phone number" });
            }

            return newErrors;
        });

        return !hasErrors;
    }, []);

    const clearErrors = useCallback(() => {
        setErrors([]);
    }, []);

    const getError = useCallback((field: string) => {
        return errors.find(err => err.field === field)?.message;
    }, [errors]);

    const hasErrors = errors.length > 0;

    return {
        validate,
        clearErrors,
        getError,
        hasErrors,
        errors
    };
};