import React from "react";
import ResourceLink from "./ResourceLink";
import { MOCK_RESOURCES } from "./MockResources";

export default {
  title: "Resources/ResourceLink",
  component: ResourceLink
};

export const Basic = (): JSX.Element => (
  <ResourceLink resource={MOCK_RESOURCES[0]} />
);
