import UserLayoutShell from "./components/UserLayout";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return <UserLayoutShell>{children}</UserLayoutShell>;
}
