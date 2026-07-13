import { Bell, Store, User } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-slate-500">Settings</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Workspace settings
        </h1>
        <p className="mt-2 text-slate-600">
          Manage your profile, store details, and notification preferences.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card>
          <User className="mb-4 text-indigo-600" />
          <h2 className="text-lg font-semibold text-slate-950">Profile</h2>
          <p className="mt-2 text-sm text-slate-600">Sarah Chen</p>
          <p className="text-sm text-slate-500">sarah@storepulse.demo</p>
        </Card>

        <Card>
          <Store className="mb-4 text-indigo-600" />
          <h2 className="text-lg font-semibold text-slate-950">Store</h2>
          <p className="mt-2 text-sm text-slate-600">Sarah’s Studio</p>
          <p className="text-sm text-slate-500">Fashion & Apparel</p>
        </Card>

        <Card>
          <Bell className="mb-4 text-indigo-600" />
          <h2 className="text-lg font-semibold text-slate-950">
            Notifications
          </h2>
          <p className="mt-2 text-sm text-slate-600">Weekly insight summary</p>
          <p className="text-sm text-slate-500">Enabled</p>
        </Card>
      </div>
    </div>
  );
}