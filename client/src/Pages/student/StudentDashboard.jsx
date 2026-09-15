import DashboardHeader from "../../components/student/DashboardHeader";
import OverviewCards from "../../components/student/OverviewCards";
import LearningOverview from "../../components/student/LearningOverview";
import BatchOverview from "../../components/student/BatchOverview";
import PerformanceChart from "../../components/student/PerformanceChart";
import UpcomingTest from "../../components/student/UpcomingTest";
import RecentResults from "../../components/student/RecentResults";
import AnnouncementPreview from "../../components/student/AnnouncementPreview";
import RewardPreview from "../../components/student/RewardPreview";
import SupportCard from "../../components/student/SupportCard";

const StudentDashboard = () => {
    return (
        <div className="pb-10">
            {/* Header */}
            <DashboardHeader />

            <div className="space-y-4">
                {/* Overview */}
                <OverviewCards />

                {/* Learning */}
                <LearningOverview />

                {/* Batch + Performance */}
                <section className="px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-[1280px] gap-4 xl:grid-cols-[0.9fr_1.45fr]">
                        <BatchOverview />
                        <PerformanceChart />
                    </div>
                </section>

                {/* Upcoming Test + Recent Results */}
                <section className="px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-[1280px] gap-4 xl:grid-cols-[0.9fr_1.45fr]">
                        <UpcomingTest />
                        <RecentResults />
                    </div>
                </section>

                {/* Announcements + Rewards */}
                <section className="px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-[1280px] gap-4 xl:grid-cols-2">
                        <AnnouncementPreview />
                        <RewardPreview />
                    </div>
                </section>

                {/* Support */}
                <section className="px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-[1280px]">
                        <SupportCard />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default StudentDashboard;