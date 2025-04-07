import type Owner from "src/modules/owner-form/types/owner";
import DescriptionList from "src/ui-kit/DescriptionList";

type OwnerDataProps = {
  owner: Owner;
};

/**
 * Renders passed owner data.
 */
function OwnerData(props: OwnerDataProps) {
  const { owner } = props;

  const data = {
    Name: owner.name,
    Email: owner.email,
    Phone: owner.phone ?? "-",
  };

  return <DescriptionList title="Owner" data={data} />;
}

export default OwnerData;
