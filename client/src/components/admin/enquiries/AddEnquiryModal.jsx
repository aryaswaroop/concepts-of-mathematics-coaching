import { X } from "lucide-react";
import { useState } from "react";

const initialForm = {
    name: "",
    phone: "",
    email: "",
    enquiryType: "course_information",
    grade: "",
    priority: "normal",
    status: "new",
    enquiryDate: "",
    followUpDate: "",
    message: "",
    adminNotes: "",
};

const AddEnquiryModal = ({ isOpen, onClose, onSubmit }) => {
    const [form, setForm] = useState(initialForm);

    if (!isOpen) {
        return null;
    }

    const updateField = (field, value) => {
        setForm((current) => ({
            ...current,
            [field]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(form);
        setForm(initialForm);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
            <div className="max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                            Communication
                        </p>

                        <h2 className="mt-1 text-lg font-extrabold text-slate-950">
                            Add enquiry
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="max-h-[calc(90vh-76px)] overflow-y-auto"
                >
                    <div className="grid gap-4 p-5 sm:grid-cols-2">
                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Name *
                            </label>

                            <input
                                required
                                value={form.name}
                                onChange={(event) =>
                                    updateField("name", event.target.value)
                                }
                                placeholder="Student / guardian name"
                                className="form-input"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Phone
                            </label>

                            <input
                                value={form.phone}
                                onChange={(event) =>
                                    updateField("phone", event.target.value)
                                }
                                placeholder="Phone number"
                                className="form-input"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Email
                            </label>

                            <input
                                type="email"
                                value={form.email}
                                onChange={(event) =>
                                    updateField("email", event.target.value)
                                }
                                placeholder="Email address"
                                className="form-input"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Class
                            </label>

                            <select
                                value={form.grade}
                                onChange={(event) =>
                                    updateField("grade", event.target.value)
                                }
                                className="form-input"
                            >
                                <option value="">Select class</option>
                                <option value="11">Class 11</option>
                                <option value="12">Class 12</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Enquiry type *
                            </label>

                            <select
                                required
                                value={form.enquiryType}
                                onChange={(event) =>
                                    updateField(
                                        "enquiryType",
                                        event.target.value
                                    )
                                }
                                className="form-input"
                            >
                                <option value="course_information">
                                    Course Information
                                </option>
                                <option value="batch_information">
                                    Batch Information
                                </option>
                                <option value="admission_fees">
                                    Admission & Fees
                                </option>
                                <option value="general_enquiry">
                                    General Enquiry
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Priority
                            </label>

                            <select
                                value={form.priority}
                                onChange={(event) =>
                                    updateField(
                                        "priority",
                                        event.target.value
                                    )
                                }
                                className="form-input"
                            >
                                <option value="low">Low</option>
                                <option value="normal">Normal</option>
                                <option value="high">High</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Status
                            </label>

                            <select
                                value={form.status}
                                onChange={(event) =>
                                    updateField("status", event.target.value)
                                }
                                className="form-input"
                            >
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="follow_up">Follow-up</option>
                                <option value="converted">Converted</option>
                                <option value="closed">Closed</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Enquiry date
                            </label>

                            <input
                                type="date"
                                value={form.enquiryDate}
                                onChange={(event) =>
                                    updateField(
                                        "enquiryDate",
                                        event.target.value
                                    )
                                }
                                className="form-input"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Follow-up date
                            </label>

                            <input
                                type="date"
                                value={form.followUpDate}
                                onChange={(event) =>
                                    updateField(
                                        "followUpDate",
                                        event.target.value
                                    )
                                }
                                className="form-input"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Enquiry message
                            </label>

                            <textarea
                                rows={3}
                                value={form.message}
                                onChange={(event) =>
                                    updateField("message", event.target.value)
                                }
                                placeholder="What does the student or guardian want to know?"
                                className="form-input min-h-[90px] resize-none"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Admin notes
                            </label>

                            <textarea
                                rows={3}
                                value={form.adminNotes}
                                onChange={(event) =>
                                    updateField(
                                        "adminNotes",
                                        event.target.value
                                    )
                                }
                                placeholder="Internal follow-up notes"
                                className="form-input min-h-[90px] resize-none"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-2 border-t border-slate-100 bg-slate-50/60 px-5 py-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 transition hover:bg-white"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-xl bg-slate-950 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-700"
                        >
                            Save enquiry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEnquiryModal;