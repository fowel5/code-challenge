import { redirect } from "next/navigation";

export function redirectToMainPage() {
  return redirect("/");
}
