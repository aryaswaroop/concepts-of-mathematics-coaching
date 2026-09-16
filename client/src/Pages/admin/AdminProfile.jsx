import AdminProfileHeader from "../../components/admin/profile/AdminProfileHeader";
import AdminProfileCard from "../../components/admin/profile/AdminProfileCard";
import AdminProfileForm from "../../components/admin/profile/AdminProfileForm";
import AdminAccountSummary from "../../components/admin/profile/AdminAccountSummary";

const AdminProfile = () => {
    /*
     * API integration will replace this object
     * with the authenticated admin user.
     */
    const profile = {};

    const handleProfileSubmit = (data) => {
        console.log("Update admin profile:", data);
    };

    return (
        <div className="min-h-full">
            <AdminProfileHeader />

            <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 lg:px-7">
                <div className="grid gap-5 xl:grid-cols-[1.5fr_0.7fr]">
                    <div className="space-y-5">
                        <AdminProfileCard profile={profile} />

                        <AdminProfileForm
                            profile={profile}
                            onSubmit={handleProfileSubmit}
                        />
                    </div>

                    <div>
                        <AdminAccountSummary account={profile} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;