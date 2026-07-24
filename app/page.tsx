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
