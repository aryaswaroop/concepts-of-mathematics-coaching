import { MoreHorizontal, Pencil, Eye, Power } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CourseRowActions = ({ course, onView, onEdit }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    const handleView = () => {
        setOpen(false);
        onView(course);
    };

    const handleEdit = () => {
        setOpen(false);
        onEdit(course);
    };

    const handleToggleStatus = () => {
        setOpen(false);

        // Backend integration will handle activation/deactivation later.
    };

    return (
        <div
            ref={menuRef}
            className="relative"
        >
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-label={`Actions for ${course.name}`}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
                <MoreHorizontal className="h-4 w-4" />
            </button>

            {open && (
                <div className="absolute right-0 top-10 z-30 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_14px_35px_rgba(15,23,42,0.12)]">
                    <button
                        type="button"
                        onClick={handleView}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                        <Eye className="h-3.5 w-3.5" />
                        View Course
                    </button>

                    <button
                        type="button"
                        onClick={handleEdit}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                    >
                        <Pencil className="h-3.5 w-3.5" />
                        Edit Course
                    </button>

                    <button
                        type="button"
                        onClick={handleToggleStatus}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-amber-600"
                    >
                        <Power className="h-3.5 w-3.5" />
                        {course.status === "active"
                            ? "Deactivate"
                            : "Activate"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default CourseRowActions;