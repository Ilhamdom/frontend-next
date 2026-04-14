import LayoutShell from "@/components/LayoutShell";

export default function UserLayoutRoot({ children }: { children: React.ReactNode }) {
  return <LayoutShell>{children}</LayoutShell>;
}
