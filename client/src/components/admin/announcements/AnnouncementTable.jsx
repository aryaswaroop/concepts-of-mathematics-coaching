import { Bell } from "lucide-react";

import AnnouncementEmptyState from "./AnnouncementEmptyState";
import AnnouncementMobileCard from "./AnnouncementMobileCard";
import AnnouncementPagination from "./AnnouncementPagination";
import AnnouncementTableRow from "./AnnouncementTableRow";

const AnnouncementTable = ({
    announcements = [],
    hasFilters,
    onAddAnnouncement,
    onViewAnnouncement,
    onEditAnnouncement,
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">
                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                        <div>
                            <h2 className="text-sm font-extrabold text-slate-950">
                                Announcement records
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Notices, updates and student communication
                            </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                            <Bell className="h-4 w-4" />
                        </div>
                    </div>

                    {announcements.length > 0 ? (
                        <>
                            <div className="hidden border-b border-slate-100 bg-slate-50/70 px-5 py-3 md:grid md:grid-cols-[1.7fr_1fr_1fr_0.9fr_0.9fr_0.5fr] md:gap-4">
                                {[
                                    "Announcement",
                                    "Category",
                                    "Audience",
                                    "Date",
                                    "Status",
                                    "Action",
                                ].map((heading) => (
                                    <span
                                        key={heading}
                                        className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400"
                                    >
                                        {heading}
                                    </span>
                                ))}
                            </div>

                            {announcements.map(
                                (announcement) => (
                                    <div
                                        key={
                                            announcement.id ||
                                            announcement._id
                                        }
                                    >
                                        <AnnouncementTableRow
                                            announcement={announcement}
                                            onView={
                                                onViewAnnouncement
                                            }
                                            onEdit={
                                                onEditAnnouncement
                                            }
                                        />

                                        <div className="px-4 py-2 md:hidden">
                                            <AnnouncementMobileCard
                                                announcement={
                                                    announcement
                                                }
                                                onView={
                                                    onViewAnnouncement
                                                }
                                                onEdit={
                                                    onEditAnnouncement
                                                }
                                            />
                                        </div>
                                    </div>
                                )
                            )}

                            <AnnouncementPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    ) : (
                        <>
                            <AnnouncementEmptyState
                                hasFilters={hasFilters}
                                onAddAnnouncement={
                                    onAddAnnouncement
                                }
                            />

                            <AnnouncementPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AnnouncementTable;