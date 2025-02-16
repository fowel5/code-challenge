import Image from "next/image";
import { TextHeader } from "~/components/TextHeader.styled";

export default function Home() {
  return (
    <>
      <TextHeader>TEST HEADER</TextHeader>
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </>
  );
}
