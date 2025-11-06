"use client";

import { motion } from "framer-motion";
import ParticlesCanvas from "@/components/ParticlesCanvas";

export default function PromoSequence() {
  return (
    <section className="relative isolate min-h-[90vh] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 via-black to-black p-6 sm:p-10">
      <ParticlesCanvas />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center sm:items-start sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 backdrop-blur"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live ITSM with Agentic AI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text pb-2 text-4xl font-semibold leading-[1.1] text-transparent sm:text-6xl"
        >
          Resolve tickets before they escalate.
          <br />
          Delight users with autonomous service.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg"
        >
          An agentic ITSM copilot that triages, diagnoses, and remediates across your stack?
          end-to-end, 24/7. Integrates with your tools. Auditable by design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#demo"
            className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Watch the 60s promo
            <svg
              className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Book a live demo
          </a>
        </motion.div>

        <div className="pointer-events-none relative mt-12 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
          {/* Mock "video" timeline as animated sequence */}
          <div className="relative h-[320px] w-full overflow-hidden rounded-xl bg-black sm:h-[420px]">
            <VisualTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualTimeline() {
  return (
    <div className="relative h-full w-full">
      {/* Frame 1: KPI counters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 grid grid-cols-3 place-items-center gap-3 p-6 text-center sm:gap-6"
      >
        <KpiCard label="MTTR" value="-63%" subtitle="Automated remediation" />
        <KpiCard label="CSAT" value="+28pts" subtitle="Proactive resolutions" />
        <KpiCard label="Cost" value="-47%" subtitle="Fewer handoffs" />
      </motion.div>

      {/* Frame 2: Flow diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.0, duration: 0.7 }}
        className="absolute inset-0 hidden place-items-center p-6 sm:grid"
      >
        <FlowDiagram />
      </motion.div>

      {/* Frame 3: Chat + Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.2, duration: 0.7 }}
        className="absolute inset-0 flex items-center justify-center p-4"
      >
        <ChatMock />
      </motion.div>
    </div>
  );
}

function KpiCard({ label, value, subtitle }: { label: string; value: string; subtitle: string }) {
  return (
    <div className="w-full max-w-[220px] rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-white">
      <div className="text-xs uppercase tracking-widest text-zinc-400">{label}</div>
      <div className="mt-1 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-semibold text-transparent">{value}</div>
      <div className="mt-1 text-sm text-zinc-300">{subtitle}</div>
    </div>
  );
}

function FlowDiagram() {
  const nodes = ["Intake", "Triage", "Diagnosis", "Action", "Verify"];
  return (
    <div className="flex items-center gap-3 sm:gap-5">
      {nodes.map((n, i) => (
        <motion.div
          key={n}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 + i * 0.15, duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            {n}
          </div>
          {i < nodes.length - 1 && (
            <svg className="h-5 w-5 text-zinc-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function ChatMock() {
  return (
    <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-zinc-900/60 p-4 text-left text-white shadow-2xl backdrop-blur">
      <div className="text-sm text-zinc-300">User: "VPN is down in EMEA. Help!"</div>
      <div className="mt-3 rounded-xl bg-black/60 p-3 text-sm text-zinc-100">
        Agent: Investigating VPN gateways in eu-west-1...
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-zinc-300">
        <div className="rounded-lg border border-white/10 bg-white/5 p-2">Checked CloudWatch metrics</div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-2">Identified packet loss on gw-42</div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-2">Applied route failover</div>
      </div>
      <div className="mt-3 rounded-xl bg-emerald-500/15 p-3 text-sm text-emerald-200">
        Resolved. Latency back to normal. Closing incident with postmortem draft.
      </div>
    </div>
  );
}
