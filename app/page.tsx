export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Browser Automation Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Train Custom Autofill for{" "}
          <span className="text-[#58a6ff]">Any Website Form</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Record your form-filling patterns once. Replay them instantly across any similar form — with your own data sets. Built for QA engineers and developers who hate repetitive work.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Access — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Works with Chrome and Edge.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Record Once", desc: "Capture any form interaction in your browser with one click." },
            { title: "Manage Data Sets", desc: "Store multiple data templates in the web dashboard for different scenarios." },
            { title: "Auto-Fill Anywhere", desc: "The extension detects similar forms and fills them instantly using your patterns." },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Browser extension (Chrome & Edge)",
              "Unlimited form recordings",
              "Unlimited data set templates",
              "Web dashboard for management",
              "Pattern matching across sites",
              "Priority email support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start for $15/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the form pattern recording work?",
              a: "Install the browser extension, click Record, and fill out any form normally. The extension captures field names, types, and your input sequence. You can then replay this pattern on any structurally similar form.",
            },
            {
              q: "Can I use different data sets for the same form pattern?",
              a: "Yes. In the web dashboard you can create multiple data templates linked to a single recording. Switch between them before auto-filling — perfect for testing different user profiles or environments.",
            },
            {
              q: "Does it work on forms behind login or SPAs?",
              a: "Yes. The extension runs in your authenticated browser session, so it works on any page you can access — including single-page apps, dynamic forms, and internal tools.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Form Autofill Trainer. All rights reserved.
      </footer>
    </main>
  );
}
