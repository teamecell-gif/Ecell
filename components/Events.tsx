import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { eventsData, type EventItem, type EventStatus } from "@/data/events";
import SectionHeader from "./ui/SectionHeader";
import SectionBackground from "./ui/SectionBackground";

const EventLink = ({
  event,
  className,
  children,
}: {
  event: EventItem;
  className: string;
  children: ReactNode;
}) => (
  <Link
    href={event.href}
    target={event.external ? "_blank" : undefined}
    rel={event.external ? "noopener noreferrer" : undefined}
    className={className}
  >
    {children}
  </Link>
);

const ActiveEventCard = ({ event }: { event: EventItem }) => (
  <div className="relative overflow-hidden rounded-lg border border-ecell/40 bg-[#101827] p-6 shadow-[0_0_50px_rgba(59,130,246,0.16)]">
    <div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
      <div className="relative h-36 w-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(min-width: 768px) 220px, 80vw"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-ecell/40 bg-ecell/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-ecell-light">
            <span className="h-2 w-2 rounded-full bg-ecell" />
            Live
          </span>
          <h3 className="mt-4 text-3xl font-bold uppercase text-white md:text-4xl">
            {event.title}
          </h3>
          {event.tagline && (
            <p className="hidden sm:block mt-3 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
              {event.tagline}
            </p>
          )}
        </div>

        {(event.deadline || event.prizePool) && (
          <div className="grid gap-3 text-sm text-white/75 sm:grid-cols-2">
            {event.deadline && (
              <div className="rounded-md bg-white/5 p-3">
                <span className="block text-xs uppercase tracking-[0.18em] text-white/40">
                  Deadline
                </span>
                <span className="mt-1 block font-semibold text-white">
                  {event.deadline}
                </span>
              </div>
            )}
            {event.prizePool && (
              <div className="rounded-md bg-white/5 p-3">
                <span className="block text-xs uppercase tracking-[0.18em] text-white/40">
                  Prize Pool
                </span>
                <span className="mt-1 block font-semibold text-white">
                  {event.prizePool}
                </span>
              </div>
            )}
          </div>
        )}

        <div>
          <EventLink
            event={event}
            className="inline-flex rounded-md bg-ecell px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-ecell-deep"
          >
            Register Now
          </EventLink>
        </div>
      </div>
    </div>
  </div>
);

const EventCard = ({ event }: { event: EventItem }) => {
  const isActive = event.status === "active";
  const isComingSoon = event.status === "comingSoon";

  return (
    <div
      className={`group relative flex min-h-[360px] flex-col justify-between rounded-lg border bg-[#111111] p-6 transition duration-300 ${isActive
          ? "border-ecell/50 shadow-[0_0_35px_rgba(59,130,246,0.14)]"
          : isComingSoon
            ? "border-[#FBBF24]/40 shadow-[0_0_25px_rgba(251,191,36,0.10)]"
            : "border-white/10 opacity-50 hover:opacity-85"
        }`}
    >
      <div className="absolute right-4 top-4">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${isActive
              ? "bg-ecell/10 text-ecell-light"
              : isComingSoon
                ? "bg-[#FBBF24]/10 text-[#FBBF24]"
                : "bg-white/5 text-white/40"
            }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${isActive ? "bg-ecell" : isComingSoon ? "bg-[#FBBF24] animate-pulse" : "bg-white/30"
              }`}
          />
          {isActive ? "Live" : isComingSoon ? "Coming Soon" : "Past"}
        </span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-8 pt-8">
        <div className="relative h-28 w-full">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(min-width: 1024px) 260px, (min-width: 768px) 45vw, 80vw"
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-6">
          <h3 className="text-center text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-ecell to-ecell-deep">
            {event.title}
          </h3>
          <EventLink
            event={event}
            className={`w-full max-w-[190px] rounded-md border-2 py-3 text-center text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${isComingSoon
                ? "border-[#FBBF24] bg-transparent text-[#FBBF24] hover:bg-[#FBBF24] hover:text-black"
                : "border-ecell bg-transparent text-ecell hover:bg-ecell hover:text-white"
              }`}
          >
            {isComingSoon ? "Visit Past Event" : "Know More"}
          </EventLink>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const activeEvents = eventsData.filter((event) => event.status === "active");
  const otherEvents = eventsData
    .filter((event) => event.status !== "active")
    .sort((a, b) => {
      const order: Record<EventStatus, number> = { active: 0, comingSoon: 1, past: 2 };
      return order[a.status] - order[b.status];
    });

  return (
    <section id="events" className="mt-20 bg-black py-16">
      <SectionBackground variant="particles">
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.14)] to-black">
          <SectionHeader category="What's Happening" title="Events" />

        <div className="mx-auto mt-16 flex w-full max-w-7xl flex-col gap-12 px-6">
          {activeEvents.length > 0 && (
            <div className="flex flex-col gap-5">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/45">
                  What&apos;s On
                </p>
              </div>
              <div className="grid gap-6">
                {activeEvents.map((event) => (
                  <ActiveEventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </SectionBackground>
  </section>
);
};

export default Events;
