import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  user: { username: string; unit: string; role?: string | null } | null;
  _hasHydrated: boolean;
  setUser: (user: { username: string; unit: string; role?: string | null }) => void;
  clearUser: () => void;
  setHasHydrated: (state: boolean) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      _hasHydrated: false,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: "user",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
