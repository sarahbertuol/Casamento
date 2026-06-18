import { Hero } from "@/components/Hero";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { Countdown } from "@/components/Countdown";
import { WeddingCard } from "@/components/WeddingCard";
import { PlaylistSection } from "@/components/PlaylistSection";
import { GettingThereAccordion } from "@/components/GettingThereAccordion";
import { Lodging } from "@/components/Lodging";
import { TipsGrid } from "@/components/TipsGrid";
import { ContactSection } from "@/components/ContactSection";
import { RsvpForm } from "@/components/RsvpForm";
import { GiftSection } from "@/components/GiftSection";
import { MessageForm } from "@/components/MessageForm";

export default function Home() {
  return (
    <div className="divide-y divide-wine/15">
      <Hero />
      <WelcomeMessage />
      <Countdown />
      <WeddingCard />
      <PlaylistSection />
      <GettingThereAccordion />
      <Lodging />
      <TipsGrid />
      <ContactSection />
      <RsvpForm />
      <GiftSection />
      <MessageForm />
    </div>
  );
}
