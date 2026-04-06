
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import PerformanceMap from "@/components/PerformanceMap";

export default function DashboardPage() {
  return (
    <LayoutShell>
      <PageHeader 
        title="Dashboard Unit Kerja" 
        description="Peta Kinerja dan Sasaran Strategis." 
      />
      <div>
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4 px-2">Peta Kinerja</h3>
            <PerformanceMap />
          </div>
      </div>
    </LayoutShell>
  );
}
