import { PageWrapper } from "~/components/PageWrapper/PageWrapper.styled";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <PageWrapper>{slug}</PageWrapper>;
}
