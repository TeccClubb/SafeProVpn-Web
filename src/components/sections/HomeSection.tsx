"use client"

import React, { FC } from "react";
import Section from "./Section";
import { Button } from "@heroui/react";

const HomeSection: FC = () => {
  return (
    <Section
      heading="Why Choose SafePro VPN?"
      description="Experience true internet freedom — with uncompromising security, lightning speed, and powerful privacy features. SafePro VPN gives you peace of mind, everywhere."
    >
        <Button color="primary" variant="shadow">Submit</Button>
    </Section>
  );
};

export default HomeSection;
