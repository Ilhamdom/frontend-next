import UserLayoutShell from "@/components/user/UserLayoutShell";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return <UserLayoutShell>{children}</UserLayoutShell>;
}
