import React from "react";
import ResourcesList from "./ResourcesList";
import { MOCK_RESOURCES } from "./MockResources";

export default {
  title: "Resources/ResourcesList",
  component: ResourcesList
};

export const Basic = (): JSX.Element => (
  <ResourcesList resources={MOCK_RESOURCES} />
);
