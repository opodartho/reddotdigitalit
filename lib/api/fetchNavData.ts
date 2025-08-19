import { staticNavData, NavLink } from "@/lib/data/navBarData";

export async function getNavLinks(): Promise<NavLink[]> {
  return Promise.resolve(staticNavData);
}

export type { NavLink };
