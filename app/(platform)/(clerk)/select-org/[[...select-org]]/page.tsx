import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizatonPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
}
