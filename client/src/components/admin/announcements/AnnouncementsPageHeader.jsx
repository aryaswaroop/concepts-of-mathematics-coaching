import { Bell, Plus } from "lucide-react";

const AnnouncementsPageHeader = ({ onAddAnnouncement }) => {
    return (
        <section className="border-b border-slate-200/70 bg-white/75">
            <div className="mx-auto max-w-[1280px] px-4 py-6 sm:px-6 lg:px-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <Bell className="h-4 w-4" />
                            </span>

                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                                Communication / Announcements
                            </span>
                        </div>

                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                            Announcements management
                        </h1>

                        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">
                            Create and manage important notices for students.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onAddAnnouncement}
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-600"
                    >
                        <Plus className="h-4 w-4" />
                        Add announcement
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AnnouncementsPageHeader;