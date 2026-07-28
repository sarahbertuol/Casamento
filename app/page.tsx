import Image from "next/image";
import { Hero } from "@/components/Hero";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { Countdown } from "@/components/Countdown";
import { EventCard } from "@/components/EventCard";
import { TrajeSection } from "@/components/TrajeSection";
import { GettingThere } from "@/components/GettingThere";
import { Lodging } from "@/components/Lodging";
import { RsvpForm } from "@/components/RsvpForm";
import { GiftSection } from "@/components/GiftSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeMessage />
      <Countdown />
      <div className="flex justify-center py-6 -mx-14 md:-mx-16">
        <Image
          src="/inv/ilustracao-festa.jpg"
          alt=""
          width={1134}
          height={736}
          className="w-full h-auto"
        />
      </div>
      <EventCard />
      <TrajeSection />
      <GettingThere />
      <Lodging />
      <RsvpForm />
      <GiftSection />
      <ContactSection />
    </>
  );
}
