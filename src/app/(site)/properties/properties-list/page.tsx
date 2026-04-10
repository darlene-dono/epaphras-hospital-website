import React from 'react';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Properties List",
};

const Page = ({ searchParams }: any) => {
  const category = searchParams?.category || ''; 

  return (
    <> </>
  );
};

export default Page;
