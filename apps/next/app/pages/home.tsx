"use client";

import { HomeScreen } from "@frontend/core";

type HomePageProps = {
  data: { id: string; name: string; url: string }[];
};

export const HomePage = ({ data }: HomePageProps) => {
  return <HomeScreen data={data} />;
};
