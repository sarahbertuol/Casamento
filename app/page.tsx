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
      <div className="flex justify-center pt-2 pb-4">
        <Image
          src="/inv/ilustracao-festa.png"
          alt=""
          width={1142}
          height={706}
          className="w-full h-auto mix-blend-multiply"
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
