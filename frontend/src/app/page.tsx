import HeadComponent from "@/component/shared/head.component";
import HeroComponent from "@/component/home/hero.component";
import SummaryComponent from "@/component/home/summaryComponent";
import AboutComponent from "@/component/home/about.component";
import WhoUseUsComponent from "@/component/home/whouseus.component";
import EventComponent from "@/component/home/event.component";
import FeatureComponent from "@/component/home/feature.component";
import DemoComponent from "@/component/home/demo.component";
import FooterComponent from "@/component/shared/footer.component";
import { ConnectComponent } from "@/component/shared/ConnectComponent";
import React from "react";
import NoteComponent from "@/component/note/note.component";
export default function Home() {
  return (
    <section className="w-full overflow-hidden">
      {/*<LampsContainer />*/}
      <HeadComponent state="home" />
      <HeroComponent />
      <ConnectComponent />
      <SummaryComponent />
      <AboutComponent  />
      <WhoUseUsComponent />
      <FeatureComponent />
      <EventComponent />
      <DemoComponent />
      <FooterComponent />
    </section>
  );
}
