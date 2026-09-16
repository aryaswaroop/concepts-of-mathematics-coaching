import { Save } from "lucide-react";
import { useEffect, useState } from "react";

const AdminProfileForm = ({
    profile = {},
    onSubmit,
}) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        designation: "",
    });

    useEffect(() => {
        setForm({
            name: profile.name || "",
            email: profile.email || "",
            phone: profile.phone || "",
            designation: profile.designation || "",
        });
    }, [profile]);

    const updateField = (field, value) => {
        setForm((current) => ({
            ...current,
            [field]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(form);
    };

    return (
        <section className="rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">
            <div className="border-b border-slate-100 px-5 py-4">
                <h2 className="text-sm font-extrabold text-slate-950">
                    Personal information
                </h2>

                <p className="mt-0.5 text-xs text-slate-400">
                    Update the information associated with your administrator
                    account.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 p-5 sm:grid-cols-2">
                    <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-600">
                            Full name
                        </label>

                        <input
                            value={form.name}
                            onChange={(event) =>
                                updateField("name", event.target.value)
                            }
                            placeholder="Administrator name"
                            className="form-input"
                        />
                    </div>

                    <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-600">
                            Designation
                        </label>

                        <input
                            value={form.designation}
                            onChange={(event) =>
                                updateField(
                                    "designation",
                                    event.target.value
                                )
                            }
                            placeholder="Administrator"
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
                            Phone
                        </label>

                        <input
                            type="tel"
                            value={form.phone}
                            onChange={(event) =>
                                updateField("phone", event.target.value)
                            }
                            placeholder="Phone number"
                            className="form-input"
                        />
                    </div>
                </div>

                <div className="flex justify-end border-t border-slate-100 bg-slate-50/50 px-5 py-4">
                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700"
                    >
                        <Save className="h-3.5 w-3.5" />
                        Save profile
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AdminProfileForm;