import { auth } from "@clerk/nextjs";
import { OrgControl } from "./_components/org-control";


export async function generateMetadata() {
  const { orgSlug } = auth();

  if (!orgSlug) {
    return {
      title: "Organization",
    };
  }

  return {
    title: orgSlug || "org", // orgSlug will be used as the title if it exists
  };
}

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
