import { baseUrl } from "@/lib/metadata";

export default function Page() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${baseUrl}/docs`} />
      <meta name="robots" content="noindex, follow" />
    </>
  );
}
