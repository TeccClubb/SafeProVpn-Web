import React from "react";
import Section from "@/components/sections/Section";
import { Card, CardBody, CardHeader } from "@heroui/card";
import ServersTable from "@/components/ServersTable";

const page = () => {
  return (
    <Section
      heading={
        <>
          Global <span className="text-primary">Server Network</span>
        </>
      }
      description="Connect to our high-performance servers across 100+ locations worldwide. Experience blazing-fast speeds and rock-solid reliability wherever you are."
    >
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          { title: "100+", subTitle: "Server Locations" },
          { title: "2500+", subTitle: "High-Speed Servers" },
          { title: "65", subTitle: "Countries" },
          { title: "99%", subTitle: "Uptime" },
        ].map(({ title, subTitle }, index) => (
          <Card key={index}>
            <CardBody className="p-6 items-center gap-y-3">
              <h1 className="text-primary text-3xl font-bold">{title}</h1>
              <span className="text-default-500 text-base">{subTitle}</span>
            </CardBody>
          </Card>
        ))}
      </div>

      <Card className="w-full p-4 mt-16">
        <CardHeader className="text-2xl font-bold">Server Locations</CardHeader>
        <CardBody className="p-0">
          <ServersTable />
        </CardBody>
      </Card>
    </Section>
  );
};

export default page;
