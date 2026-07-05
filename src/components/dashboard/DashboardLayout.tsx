import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DashboardSidebar } from "./DashboardSidebar";

export function DashboardLayout() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);


  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-100">
        <DashboardSidebar />

        <div className="flex-1 flex flex-col min-w-0">
          {/* Mobile Header with Menu Trigger */}
          <header className="md:hidden sticky top-0 z-10 flex items-center gap-2 border-b bg-white border-gray-200 p-4">
            <SidebarTrigger className="-ml-1" />
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
