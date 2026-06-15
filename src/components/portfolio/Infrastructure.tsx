import { Section, SectionHeader } from "./Section";
import { Activity, Cpu, HardDrive, Wifi } from "lucide-react";

const metrics = [
  { icon: Activity, label: "Client Satisfaction", value: "98%", color: "text-[oklch(0.78_0.18_220)]" },
  { icon: HardDrive, label: "On-time Delivery", value: "95%", color: "text-[oklch(0.66_0.27_305)]" },
  { icon: Wifi, label: "Projects Shipped", value: "50+", color: "text-[oklch(0.70_0.32_340)]" },
  { icon: Cpu, label: "Tech Domains", value: "12+", color: "text-[oklch(0.75_0.20_195)]" },
];

const status = [
  { name: "HTML / CSS", state: "96%" },
  { name: "JavaScript / TypeScript", state: "92%" },
  { name: "React / Next.js", state: "90%" },
  { name: "Python", state: "88%" },
  { name: "UI / UX Design", state: "85%" },
  { name: "DevOps & Cloud", state: "80%" },
];

export function Infrastructure() {
  return (
    <Section id="infrastructure" reveal="right">
      <SectionHeader
        eyebrow="Infrastructure & Systems"
        title={<>Built to scale<br /><span className="text-gradient-neon">from one user to many.</span></>}
        description="From a single landing page to a multi-region platform, I architect systems that grow with your business without breaking under pressure."
      />

      <div className="mt-16 max-w-3xl mx-auto space-y-6">
    </Section>
  );
}