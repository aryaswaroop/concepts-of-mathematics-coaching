import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordInput = ({
    label = "Password",
    name = "password",
    value,
    onChange,
    placeholder = "Enter your password",
    autoComplete = "current-password",
}) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="space-y-2">
            <label
                htmlFor={name}
                className="block text-xs font-bold tracking-wide text-slate-700"
            >
                {label}
            </label>

            <div className="relative">
                <input
                    id={name}
                    name={name}
                    type={visible ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 pr-12 text-sm font-medium text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />

                <motion.button
                    type="button"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.08 }}
                    onClick={() => setVisible((current) => !current)}
                    aria-label={visible ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {visible ? (
                            <motion.span
                                key="hide"
                                initial={{ opacity: 0, rotate: -20 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 20 }}
                            >
                                <EyeOff className="h-4 w-4" />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="show"
                                initial={{ opacity: 0, rotate: 20 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -20 }}
                            >
                                <Eye className="h-4 w-4" />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>
        </div>
    );
};

export default PasswordInput;