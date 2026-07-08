"use client";

import React from "react";
import { motion } from "motion/react";
import {
    ArrowRight,
    Check,
    ChevronDown,
    Palette,
    Layers,
    MapPin,
    Menu,
    MousePointer2,
    Play,
    Search,
    Settings2,
    Sparkles,
    Star,
    Zap,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
};

function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <span className={`inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur ${className}`}>
            {children}
        </span>
    );
}

function Button({ children, dark = false, className = "" }: { children: React.ReactNode; dark?: boolean; className?: string }) {
    return (
        <button
            className={`inline-flex h-10 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition active:scale-[0.98] ${dark
                    ? "bg-zinc-950 text-white shadow-lg shadow-zinc-900/15 hover:bg-zinc-800"
                    : "border border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-50"
                } ${className}`}
        >
            {children}
        </button>
    );
}

function SectionTitle({ eyebrow, title, muted }: { eyebrow: string; title: string; muted: string }) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="mx-auto mb-10 max-w-xl text-center"
        >
            <p className="mb-2 text-xs font-semibold text-sky-500">{eyebrow}</p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-zinc-950 md:text-5xl">{title}</h2>
            <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-6 text-zinc-500">{muted}</p>
        </motion.div>
    );
}

function MiniBrowser({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_24px_80px_rgba(24,24,27,0.08)] ${className}`}>
            <div className="flex h-9 items-center gap-1 border-b border-zinc-100 bg-zinc-50/80 px-4">
                <span className="h-2 w-2 rounded-full bg-zinc-300" />
                <span className="h-2 w-2 rounded-full bg-zinc-300" />
                <span className="h-2 w-2 rounded-full bg-zinc-300" />
            </div>
            {children}
        </div>
    );
}

function HeroCards() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative mx-auto mt-12 h-[310px] max-w-5xl"
        >
            <div className="absolute inset-x-0 top-16 h-48 rounded-[3rem] bg-gradient-to-b from-zinc-200/60 to-transparent blur-3xl" />

            <MiniBrowser className="absolute left-4 top-36 z-10 w-60 rotate-[-1deg] md:left-0 md:top-28">
                <div className="p-3">
                    <div className="mb-3 flex items-center justify-between text-[10px] text-zinc-400">
                        <span>My navigation</span><Search className="h-3 w-3" />
                    </div>
                    <div className="relative h-28 rounded-xl bg-zinc-100">
                        <div className="absolute left-7 top-7 h-2 w-2 rounded-full bg-sky-500" />
                        <div className="absolute right-12 top-14 h-2 w-2 rounded-full bg-amber-400" />
                        <div className="absolute bottom-7 left-20 h-2 w-2 rounded-full bg-violet-500" />
                        <div className="absolute inset-x-6 top-1/2 h-px bg-zinc-300" />
                        <MapPin className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-zinc-500" />
                    </div>
                    <div className="mt-3 rounded-xl border border-zinc-100 p-3">
                        <p className="text-xs font-semibold">Westfield Valley</p>
                        <p className="mt-1 text-[10px] text-zinc-400">2.4 miles away</p>
                    </div>
                </div>
            </MiniBrowser>

            <MiniBrowser className="absolute left-1/2 top-10 z-30 w-72 -translate-x-1/2 md:w-80">
                <div className="p-5">
                    <p className="text-[11px] font-medium text-zinc-400">Ask the assistant</p>
                    <p className="mt-3 text-sm leading-6 text-zinc-700">"Hi, we're searching for a minimal chair and a compact lamp for our new workspace."</p>
                    <div className="mx-auto mt-5 h-28 w-28 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-300 shadow-inner" />
                    <div className="mt-5 h-9 rounded-full bg-zinc-100" />
                </div>
            </MiniBrowser>

            <MiniBrowser className="absolute right-24 top-28 z-20 hidden w-56 rotate-[1deg] md:block">
                <div className="p-4">
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-500" />
                        <div>
                            <p className="text-sm font-semibold">Devon</p>
                            <p className="text-[10px] text-zinc-400">Product lead</p>
                        </div>
                    </div>
                    <div className="mt-4 space-y-2">
                        {["Design review", "Launch plan", "QA handoff"].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs text-zinc-600">
                                <span className="h-2 w-2 rounded-full bg-sky-500" /> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </MiniBrowser>

            <MiniBrowser className="absolute right-0 top-36 z-10 hidden w-64 md:block">
                <div className="p-5">
                    <p className="text-xs font-semibold">Swiftly Cloud</p>
                    <div className="mx-auto my-6 h-24 w-40 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-300 shadow-xl" />
                    <div className="mb-4 flex justify-between text-[10px] text-zinc-400">
                        <span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span>
                    </div>
                    <button className="w-full rounded-full bg-zinc-950 py-2 text-xs font-semibold text-white">Add to cart</button>
                </div>
            </MiniBrowser>
        </motion.div>
    );
}

function DashboardGrid() {
    const cards = [
        ["Connect", "42 synced sources", "h-28"],
        ["Review", "98% completion", "h-28"],
        ["Stats", "7.4k active users", "h-28"],
        ["Plans", "Subscription flows", "h-32"],
        ["Agents", "18 automations", "h-32"],
        ["Revenue", "$48.9k MRR", "h-32"],
    ];

    return (
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
            {cards.map(([title, text, height], index) => (
                <motion.div
                    key={title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    className={`rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm ${height}`}
                >
                    <div className="mb-4 flex items-center justify-between">
                        <p className="text-xs font-semibold text-zinc-700">{title}</p>
                        <span className="h-5 w-5 rounded-md bg-zinc-100" />
                    </div>
                    <p className="text-[11px] text-zinc-400">{text}</p>
                    <div className="mt-4 h-12 rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-200/80" />
                </motion.div>
            ))}
        </div>
    );
}

function SystemPreview() {
    return (
        <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-2">
            <MiniBrowser>
                <div className="p-4">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="font-semibold">Meetings</h3>
                        <Settings2 className="h-4 w-4 text-zinc-400" />
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-zinc-400">
                        {Array.from({ length: 35 }).map((_, i) => (
                            <div key={i} className={`rounded-md py-1 ${i === 10 || i === 22 ? "bg-sky-100 text-sky-600" : "bg-zinc-50"}`}>{(i % 31) + 1}</div>
                        ))}
                    </div>
                    <div className="mt-4 space-y-2">
                        <div className="rounded-xl bg-sky-50 p-3 text-xs font-medium text-sky-700">Daily strategy</div>
                        <div className="rounded-xl bg-orange-50 p-3 text-xs font-medium text-orange-700">Design sync</div>
                    </div>
                </div>
            </MiniBrowser>
            <MiniBrowser>
                <div className="p-4">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="font-semibold">Orders</h3>
                        <Menu className="h-4 w-4 text-zinc-400" />
                    </div>
                    <div className="space-y-3">
                        {["Castle harbor", "Harbor depot", "U.P. POD", "Brew labs"].map((x, i) => (
                            <div key={x} className="flex items-center justify-between rounded-xl border border-zinc-100 p-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-9 w-12 rounded-lg bg-gradient-to-br from-amber-100 to-zinc-200" />
                                    <div>
                                        <p className="text-xs font-semibold">{x}</p>
                                        <p className="text-[10px] text-zinc-400">Order #{2400 + i}</p>
                                    </div>
                                </div>
                                <span className="text-[10px] text-zinc-400">pending</span>
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 w-full rounded-full bg-zinc-950 py-2 text-xs font-semibold text-white">Track inventory</button>
                </div>
            </MiniBrowser>
        </div>
    );
}

function ComponentsGrid() {
    const items = [
        { icon: <MousePointer2 />, title: "Smart interactions", text: "Tiny details that make interfaces feel crisp and thoughtful." },
        { icon: <Layers />, title: "Reusable blocks", text: "Cards, dialogs, nav, dashboards, pricing, checkout, and more." },
        { icon: <Palette />, title: "Design resources", text: "Synced tokens and examples to help designers and engineers align." },
        { icon: <Zap />, title: "Ship faster", text: "Production-ready sections built with React and Tailwind CSS." },
        { icon: <Sparkles />, title: "Modern aesthetics", text: "Soft shadows, gradients, rounded panels, and clean typography." },
        { icon: <Star />, title: "Polished states", text: "Hover, active, loading, empty, and success states included." },
    ];
    return (
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
            {items.map(({ icon, title, text }, index) => (
                <motion.div
                    key={title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm"
                >
                    <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-white [&_svg]:h-4 [&_svg]:w-4">{icon}</div>
                    <h3 className="text-sm font-semibold text-zinc-950">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-zinc-500">{text}</p>
                </motion.div>
            ))}
        </div>
    );
}

function BigGradientPanel() {
    return (
        <section className="relative my-28 overflow-hidden rounded-[2.5rem] border border-zinc-200/70 bg-white py-20 shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_48%,rgba(251,146,60,.45),transparent_25%),radial-gradient(circle_at_78%_40%,rgba(99,102,241,.28),transparent_30%),radial-gradient(circle_at_50%_0%,rgba(56,189,248,.16),transparent_35%)] blur-2xl" />
            <div className="relative mx-auto max-w-2xl text-center">
                <p className="mb-2 text-xs font-semibold text-sky-600">For everyone</p>
                <h2 className="text-4xl font-semibold tracking-[-0.04em] text-zinc-950 md:text-5xl">Start from something real. <br /> Not a blank file.</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-600">Full-stack resources, interaction patterns, dashboards, and launch-ready marketing sections.</p>
                <div className="mt-6 flex justify-center gap-3">
                    <Button>View templates</Button>
                    <Button dark>Start building <ArrowRight className="h-4 w-4" /></Button>
                </div>
            </div>
            <MiniBrowser className="relative mx-auto mt-12 max-w-3xl">
                <div className="grid gap-4 p-5 md:grid-cols-4">
                    {["Revenue", "Orders", "Sales", "Profit"].map((x, i) => (
                        <div key={x} className="rounded-2xl border border-zinc-100 p-4">
                            <p className="text-[10px] text-zinc-400">{x}</p>
                            <p className="mt-2 text-lg font-semibold">${[228, 25, 48, 203][i]},{[441, 198, 320, 133][i]}</p>
                        </div>
                    ))}
                    <div className="h-40 rounded-2xl bg-gradient-to-t from-zinc-100 to-white md:col-span-2" />
                    <div className="h-40 rounded-2xl bg-gradient-to-br from-zinc-100 to-white md:col-span-2" />
                </div>
            </MiniBrowser>
        </section>
    );
}

function Pricing() {
    const plans = ["Indie", "Studio", "Scale"];
    return (
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
            {plans.map((plan, i) => (
                <div key={plan} className={`rounded-2xl border p-5 shadow-sm ${i === 2 ? "border-amber-200 bg-gradient-to-b from-amber-50 to-white" : "border-zinc-200 bg-white"}`}>
                    <p className="text-sm font-semibold text-zinc-950">{plan}</p>
                    <p className="mt-1 text-xs text-zinc-500">For launch-ready teams</p>
                    <div className="mt-5 flex items-end gap-1">
                        <span className="text-3xl font-semibold tracking-tight">${[239, 239, 319][i]}</span>
                        <span className="pb-1 text-xs text-zinc-400 line-through">${[299, 299, 399][i]}</span>
                    </div>
                    <button className={`mt-5 w-full rounded-full py-2 text-xs font-semibold ${i === 2 ? "bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-800"}`}>Get lifetime access</button>
                    <div className="mt-5 space-y-3">
                        {["Full React components", "Responsive layouts", "Design source files", "Lifetime updates", "Commercial license"].map((x) => (
                            <p key={x} className="flex items-center gap-2 text-xs text-zinc-600"><Check className="h-3.5 w-3.5 text-emerald-500" /> {x}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function FAQ() {
    const questions = [
        "What is included?",
        "Is this a template or a component library?",
        "Can I use it with Next.js?",
        "Do I get lifetime updates?",
        "Can I use it for client projects?",
        "Is there a refund policy?",
        "What payment methods are supported?",
    ];
    return (
        <div className="mx-auto max-w-xl divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white px-5 shadow-sm">
            {questions.map((q) => (
                <button key={q} className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-zinc-800">
                    {q}
                    <ChevronDown className="h-4 w-4 text-zinc-400" />
                </button>
            ))}
        </div>
    );
}

import { ThemeSwitcher } from "./components/theme-switcher";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#f7f7f6] text-zinc-950 selection:bg-sky-200/60 dark:bg-zinc-950 dark:text-zinc-50">
            <nav className="fixed inset-x-0 top-0 z-50 mx-auto flex h-16 max-w-5xl items-center justify-between px-5 backdrop-blur-xl">
                <div className="flex items-center gap-2 font-semibold tracking-tight">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 text-[10px] text-white dark:bg-white dark:text-zinc-900">h</span>
                    aero<span className="h-2 w-2 rounded-full bg-sky-500" />
                </div>
                <div className="hidden items-center gap-6 text-xs font-medium text-zinc-500 md:flex">
                    <a href="#components" className="hover:text-zinc-900 dark:hover:text-zinc-100">Components</a>
                    <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-zinc-100">Login</a>
                    <ThemeSwitcher />
                    <Button className="h-8 px-3 text-xs">Get lifetime pricing</Button>
                </div>
            </nav>

            <section className="relative overflow-hidden px-5 pb-20 pt-28">
                <div className="absolute inset-x-0 top-0 mx-auto h-[520px] max-w-5xl bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,.15),transparent_35%)]" />
                <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }} className="relative mx-auto max-w-3xl text-center">
                    <Pill className="mb-5">Launch price ends soon <ArrowRight className="h-3 w-3" /></Pill>
                    <h1 className="text-balance text-5xl font-semibold tracking-[-0.06em] text-zinc-950 md:text-7xl">Build products <br /> you're proud to ship</h1>
                    <p className="mx-auto mt-4 max-w-lg text-pretty text-sm leading-6 text-zinc-500">Premium React and Tailwind CSS components, templates, and app screens crafted for founders, designers, and teams.</p>
                </motion.div>
                <HeroCards />
            </section>

            <section className="px-5 py-20">
                <SectionTitle eyebrow="Default" title="Polished by default. Every edge case handled." muted="Launch-grade components with complete states, responsive behavior, and refined visuals out of the box." />
                <DashboardGrid />
            </section>

            <section className="px-5 py-24">
                <SectionTitle eyebrow="Design system" title="One design system. Beautiful everywhere." muted="The same thoughtful interface patterns for dashboards, mobile layouts, calendars, commerce, and content." />
                <SystemPreview />
            </section>

            <section id="components" className="px-5 py-24">
                <SectionTitle eyebrow="What's included" title="More than components. A complete system." muted="Everything you need to assemble premium marketing pages and SaaS experiences quickly." />
                <ComponentsGrid />
            </section>

            <div className="px-3 md:px-8">
                <BigGradientPanel />
            </div>

            <section id="pricing" className="px-5 py-20">
                <SectionTitle eyebrow="Pricing" title="Launch pricing. Lock it in." muted="Launch pricing ends soon. Get lifetime access to updates, templates, and design assets." />
                <Pricing />
            </section>

            <section className="px-5 py-20">
                <SectionTitle eyebrow="FAQs" title="Frequently asked questions" muted="Everything you need to know before building with the system." />
                <FAQ />
            </section>

            <section className="px-5 py-24 text-center">
                <p className="mb-2 text-xs font-semibold text-sky-500">License</p>
                <h2 className="text-4xl font-semibold tracking-[-0.04em]">Get your license. <br /><span className="text-zinc-400">Launch pricing ends soon.</span></h2>
                <div className="relative mx-auto mt-10 h-56 max-w-md">
                    <div className="absolute left-1/2 top-4 h-48 w-36 -translate-x-[80%] rotate-[-7deg] rounded-3xl bg-zinc-950 p-5 text-left text-white shadow-2xl">
                        <p className="text-xs text-zinc-400">License</p><p className="mt-20 font-semibold">Indie</p>
                    </div>
                    <div className="absolute left-1/2 top-0 h-52 w-36 -translate-x-[10%] rotate-[5deg] rounded-3xl bg-zinc-900 p-5 text-left text-white shadow-2xl ring-4 ring-emerald-400/60">
                        <p className="text-xs text-zinc-400">License</p><p className="mt-24 font-semibold">Team</p>
                    </div>
                </div>
                <Button dark>Get launch pricing <ArrowRight className="h-4 w-4" /></Button>
                <footer className="mx-auto mt-20 flex max-w-xl flex-wrap items-center justify-center gap-5 text-xs text-zinc-400">
                    <a>Terms</a><a>Components</a><a>License</a><a>Docs</a><a>Privacy</a>
                </footer>
            </section>
        </main>
    );
}
