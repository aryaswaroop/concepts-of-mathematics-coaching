import { motion } from "framer-motion";

const AuthInput = ({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    autoComplete,
    required = true,
}) => {
    return (
        <div className="space-y-2">
            <label
                htmlFor={name}
                className="block text-xs font-bold tracking-wide text-slate-700"
            >
                {label}
            </label>

            <motion.div
                whileFocus={{ scale: 1.01 }}
                className="relative"
            >
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    required={required}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm font-medium text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
            </motion.div>
        </div>
    );
};

export default AuthInput;