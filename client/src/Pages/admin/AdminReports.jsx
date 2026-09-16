import { useMemo, useState } from "react";

import ReportsPageHeader from "../../components/admin/reports/ReportsPageHeader";
import ReportFilters from "../../components/admin/reports/ReportFilters";
import ReportSummaryCards from "../../components/admin/reports/ReportSummaryCards";
import AcademicPerformanceReport from "../../components/admin/reports/AcademicPerformanceReport";
import EnrollmentReport from "../../components/admin/reports/EnrollmentReport";
import FinanceReport from "../../components/admin/reports/FinanceReport";
import EnquiryReport from "../../components/admin/reports/EnquiryReport";
import SupportReport from "../../components/admin/reports/SupportReport";
import ReportInsights from "../../components/admin/reports/ReportInsights";
import ReportEmptyState from "../../components/admin/reports/ReportEmptyState";

const AdminReports = () => {
    const [period, setPeriod] = useState("current_month");
    const [grade, setGrade] = useState("all");
    const [reportType, setReportType] = useState("overview");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [isRefreshing, setIsRefreshing] = useState(false);

    /*
     * API integration will replace these placeholders
     * with aggregated report data from the backend.
     */
    const summaryData = {};

    const academicData = [];
    const enrollmentData = [];
    const financeData = [];
    const enquiryData = [];
    const supportData = [];
    const insights = [];

    const hasCustomRangeError = useMemo(() => {
        if (period !== "custom") {
            return false;
        }

        if (!startDate || !endDate) {
            return false;
        }

        return startDate > endDate;
    }, [period, startDate, endDate]);

    const handleClearFilters = () => {
        setPeriod("current_month");
        setGrade("all");
        setReportType("overview");
        setStartDate("");
        setEndDate("");
    };

    const handleRefresh = () => {
        setIsRefreshing(true);

        setTimeout(() => {
            setIsRefreshing(false);
        }, 500);
    };

    const handleExport = () => {
        console.log("Export report");
    };

    return (
        <div className="min-h-full">
            <ReportsPageHeader
                onRefresh={handleRefresh}
                onExport={handleExport}
            />

            <ReportFilters
                period={period}
                setPeriod={setPeriod}
                grade={grade}
                setGrade={setGrade}
                reportType={reportType}
                setReportType={setReportType}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                onClear={handleClearFilters}
            />

            {hasCustomRangeError && (
                <div className="mx-auto max-w-[1280px] px-4 pb-3 sm:px-6 lg:px-7">
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-red-600">
                        End date should be on or after the start date.
                    </div>
                </div>
            )}

            {isRefreshing && (
                <div className="mx-auto max-w-[1280px] px-4 pb-3 sm:px-6 lg:px-7">
                    <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-xs font-semibold text-blue-600">
                        Refreshing report workspace...
                    </div>
                </div>
            )}

            <ReportSummaryCards data={summaryData} />

            {reportType === "overview" && (
                <>
                    <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                        <div className="grid gap-4 xl:grid-cols-2">
                            <AcademicPerformanceReport
                                data={academicData}
                            />

                            <EnrollmentReport
                                data={enrollmentData}
                            />
                        </div>
                    </div>

                    <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                        <div className="grid gap-4 xl:grid-cols-2">
                            <FinanceReport
                                data={financeData}
                            />

                            <EnquiryReport
                                data={enquiryData}
                            />
                        </div>
                    </div>

                    <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                        <SupportReport
                            data={supportData}
                        />
                    </div>

                    <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                        <ReportInsights
                            insights={insights}
                        />
                    </div>
                </>
            )}

            {reportType === "academic" && (
                <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                    <AcademicPerformanceReport
                        data={academicData}
                    />
                </div>
            )}

            {reportType === "enrollment" && (
                <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                    <EnrollmentReport
                        data={enrollmentData}
                    />
                </div>
            )}

            {reportType === "finance" && (
                <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                    <FinanceReport
                        data={financeData}
                    />
                </div>
            )}

            {reportType === "enquiries" && (
                <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                    <EnquiryReport
                        data={enquiryData}
                    />
                </div>
            )}

            {reportType === "support" && (
                <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                    <SupportReport
                        data={supportData}
                    />
                </div>
            )}

            {reportType !== "overview" &&
                reportType !== "academic" &&
                reportType !== "enrollment" &&
                reportType !== "finance" &&
                reportType !== "enquiries" &&
                reportType !== "support" && (
                    <ReportEmptyState />
                )}
        </div>
    );
};

export default AdminReports;