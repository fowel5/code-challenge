import { redirect } from "next/navigation";

export function redirectToMainPage() {
  return redirect("/");
}

export function getFullDate(date: Date): string {
  return `${date.getUTCDate()}-${
    date.getUTCMonth() + 1
  }-${date.getUTCFullYear()}`;
}
