import { Fragment } from "react";
import type { ReactNode } from "react";

import Subtitle from "../Subtitle";

type DescriptionListProps = {
  title: ReactNode;
  data: Record<string, ReactNode>;
};

/**
 * Renders a section with titled
 * description items.
 */
function DescriptionList(props: DescriptionListProps) {
  const { title, data } = props;

  return (
    <section>
      <Subtitle>{title}</Subtitle>

      <dl>
        {Object.entries(data).map(([name, value]) => (
          <Fragment key={name}>
            <dt>
              <strong>{name}</strong>{" "}
            </dt>
            <dd className="mb-2">{value}</dd>
          </Fragment>
        ))}
      </dl>
    </section>
  );
}

export default DescriptionList;
