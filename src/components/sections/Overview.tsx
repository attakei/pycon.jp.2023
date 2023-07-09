import { useTranslation } from "react-i18next";

import SectionTitle from "@/components/elements/SectionTitle";
import React from "react";
import Heading from "@/components/elements/Heading";
import TextCard from "@/components/organisms/TextCard";

export default function OverviewSection() {
  const { t } = useTranslation("OVERVIEW");
  return (
      <div className='my-4'>
        <SectionTitle title='Overview' subTitle='概要'/>
        <TextCard image={{src: '/unsplash.svg', alt: 'unsplash', width: 294, height: 442}}>
          <Heading>
            What is PyCon APAC
          </Heading>
          <p suppressHydrationWarning={true}>
            {t("APAC")}
          </p>
          <Heading>
            What is PyCon JP
          </Heading>
          <p suppressHydrationWarning={true}>
            {t("JP")}
          </p>
        </TextCard>
      </div>
  )
}
