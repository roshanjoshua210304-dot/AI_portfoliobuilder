import { useState } from 'react';
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  Code2,
  Download,
  FileText,
  FolderKanban,
  GraduationCap,
  LayoutTemplate,
  Link2,
  Menu,
  Palette,
  Play,
  Plus,
  Sparkles,
  Star,
  UserRound,
  WandSparkles,
  X,
} from 'lucide-react';

const steps = [
  { number: '01', icon: UserRound, title: 'Enter your details', text: 'Add your experience, skills, education and achievements.' },
  { number: '02', icon: WandSparkles, title: 'AI generates content', text: 'Get polished, professional copy in seconds.' },
  { number: '03', icon: LayoutTemplate, title: 'Choose a template', text: 'Pick a design that feels like you and your work.' },
  { number: '04', icon: Download, title: 'Download & share', text: 'Publish your portfolio and share it anywhere.' },
];

const templates = [
  { name: 'Modern', tone: 'modern', color: 'bg-white' },
  { name: 'Minimal', tone: 'minimal', color: 'bg-[#f8fafc]' },
  { name: 'Creative', tone: 'creative', color: 'bg-[#112550]' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBuilder, setShowBuilder] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('Modern');

  const openBuilder = () => {
    setShowBuilder(true);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8faff] text-[#10203f]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#071938]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#5e9cff] to-[#3254ef] shadow-lg shadow-blue-900/30"><Sparkles size={18} /></span>
            <span>AI Portfolio Builder</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-blue-100/80 md:flex">
            <a className="transition hover:text-white" href="#home">Home</a>
            <a className="transition hover:text-white" href="#features">Features</a>
            <a className="transition hover:text-white" href="#templates">Templates</a>
            <a className="transition hover:text-white" href="#about">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={openBuilder} className="hidden rounded-full bg-[#3178f6] px-5 py-2.5 text-sm font-semibold shadow-lg shadow-blue-950/30 transition hover:bg-[#4b8bff] sm:block">Login</button>
            <button aria-label="Toggle menu" onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-lg p-2 md:hidden">{isMenuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
        {isMenuOpen && <div className="border-t border-white/10 px-5 py-4 md:hidden"><div className="grid gap-4 text-sm text-blue-100"><a href="#features">Features</a><a href="#templates">Templates</a><button className="text-left text-white" onClick={openBuilder}>Open builder</button></div></div>}
      </header>

      <main id="top">
        <section id="home" className="relative overflow-hidden bg-[#071938] pt-32 text-white lg:pt-40">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-700/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 lg:grid-cols-[1fr_0.96fr] lg:px-8 lg:pb-28">
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-3.5 py-2 text-xs font-semibold text-blue-200"><Sparkles size={14} /> Build something that gets noticed</div>
              <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">Your story.<br /><span className="bg-gradient-to-r from-[#8ac6ff] via-[#7f9bff] to-[#d0a0ff] bg-clip-text text-transparent">Beautifully built.</span></h1>
              <p className="mt-7 max-w-lg text-lg leading-8 text-blue-100/70">Create a stunning professional portfolio with AI. Showcase your skills, experience, projects and everything that makes you, you.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={openBuilder} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#397bff] to-[#6159ee] px-6 py-3.5 text-sm font-bold shadow-xl shadow-blue-950/50 transition hover:-translate-y-0.5 hover:shadow-blue-500/20">Create my portfolio <ArrowRight size={17} className="transition group-hover:translate-x-1" /></button>
                <a href="#templates" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"><Play size={16} fill="currentColor" /> See how it works</a>
              </div>
              <div className="mt-10 flex items-center gap-4 text-sm text-blue-100/60"><div className="flex -space-x-2">{['AR','NK','SJ','VP'].map((letters, i) => <span key={letters} className={`grid h-8 w-8 place-items-center rounded-full border-2 border-[#071938] text-[10px] font-bold text-white ${['bg-[#4387e8]', 'bg-[#e28b62]', 'bg-[#5ab89d]', 'bg-[#8e78d9]'][i]}`}>{letters}</span>)}</div><span>Trusted by 10,000+ creators</span><span className="text-amber-300">★★★★★</span></div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
              <div className="absolute -inset-5 rounded-[32px] bg-gradient-to-tr from-blue-600/30 to-fuchsia-500/20 blur-2xl" />
              <div className="relative rounded-[26px] border border-white/15 bg-[#102650]/90 p-3 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3"><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div><span className="rounded-full bg-white/10 px-3 py-1 text-[9px] text-blue-100/70">portfolio.ai / prathosh-r</span><span className="w-10" /></div>
                <div className="rounded-2xl bg-gradient-to-br from-[#e8f2ff] to-[#f8fbff] p-5 text-[#17264b] sm:p-7">
                  <div className="flex items-start justify-between"><div><div className="mb-3 h-2 w-16 rounded bg-blue-200" /><div className="h-3 w-36 rounded bg-[#16274e]" /><div className="mt-2 h-2 w-28 rounded bg-slate-300" /></div><div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#c1d5ee] to-[#788cae] p-1.5"><div className="h-full w-full rounded-full bg-[#e8c3a4]" /></div></div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2"><div className="rounded-xl bg-white p-4 shadow-sm"><div className="mb-3 flex items-center gap-2 text-[10px] font-bold"><span className="grid h-6 w-6 place-items-center rounded-md bg-blue-100 text-blue-600"><GraduationCap size={13} /></span> About me</div><div className="space-y-1.5"><div className="h-1.5 w-full rounded bg-slate-200" /><div className="h-1.5 w-4/5 rounded bg-slate-200" /><div className="h-1.5 w-11/12 rounded bg-slate-200" /></div></div><div className="rounded-xl bg-white p-4 shadow-sm"><div className="mb-3 flex items-center gap-2 text-[10px] font-bold"><span className="grid h-6 w-6 place-items-center rounded-md bg-blue-100 text-blue-600"><Code2 size={13} /></span> Skills</div><div className="flex flex-wrap gap-1.5"><span className="rounded bg-blue-50 px-2 py-1 text-[8px] text-blue-600">React</span><span className="rounded bg-blue-50 px-2 py-1 text-[8px] text-blue-600">TypeScript</span><span className="rounded bg-blue-50 px-2 py-1 text-[8px] text-blue-600">UI Design</span></div></div></div>
                  <div className="mt-3 rounded-xl bg-[#122858] p-4 text-white"><div className="mb-4 flex items-center justify-between"><span className="text-[10px] font-bold">Featured projects</span><span className="text-[9px] text-blue-300">View all →</span></div><div className="grid grid-cols-3 gap-2"><div className="h-16 rounded-lg bg-gradient-to-br from-[#4b91e9] to-[#b3d8fb]" /><div className="h-16 rounded-lg bg-gradient-to-br from-[#edaf76] to-[#804f6d]" /><div className="h-16 rounded-lg bg-gradient-to-br from-[#62c3b1] to-[#2b5875]" /></div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative border-t border-white/10 bg-white/[0.035]"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/40 lg:justify-between lg:px-8"><span>Crafted for creators</span><span>Designers</span><span>Developers</span><span>Students</span><span>Freelancers</span><span>Builders</span></div></div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">From blank page to wow</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0c1d3d] sm:text-5xl">A portfolio that works as hard as you do.</h2><p className="mt-5 text-base leading-7 text-slate-500">Skip the templates that all look the same. Build a portfolio with personality, without spending your weekend on it.</p></div><div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{steps.map(({ number, icon: Icon, title, text }) => <div key={number} className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_32px_rgba(31,65,114,0.05)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"><div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white"><Icon size={20} /></span><span className="font-mono text-xs font-bold text-slate-300">{number}</span></div><h3 className="mt-6 font-bold text-[#15264a]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>)}</div></section>

        <section id="templates" className="bg-[#edf4ff] px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Made to match you</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0c1d3d] sm:text-5xl">Your work deserves a great first impression.</h2><p className="mt-5 max-w-md leading-7 text-slate-500">Choose a visual direction, then make it yours. Every section is built to tell your story clearly and beautifully.</p><button onClick={openBuilder} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1d5fe9] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-[#164dcc]">Explore all templates <ArrowRight size={16} /></button></div><div className="grid gap-5 sm:grid-cols-3">{templates.map((template, index) => <button key={template.name} onClick={() => setSelectedTemplate(template.name)} className={`text-left transition ${selectedTemplate === template.name ? '-translate-y-2' : 'hover:-translate-y-1'}`}><div className={`relative h-64 overflow-hidden rounded-2xl border-2 p-3 shadow-lg ${selectedTemplate === template.name ? 'border-blue-500 shadow-blue-200' : 'border-white shadow-slate-200'} ${template.color}`}><div className={`h-full rounded-xl p-3 ${template.tone === 'creative' ? 'bg-[#162e67]' : 'bg-slate-50'}`}><div className="flex items-center gap-2"><span className={`h-8 w-8 rounded-full ${template.tone === 'creative' ? 'bg-blue-300' : 'bg-blue-200'}`} /><div className="space-y-1"><div className={`h-1.5 w-16 rounded ${template.tone === 'creative' ? 'bg-white/70' : 'bg-[#17264b]'}`} /><div className={`h-1 w-10 rounded ${template.tone === 'creative' ? 'bg-white/30' : 'bg-slate-300'}`} /></div></div><div className="mt-5 space-y-2"><div className={`h-2 w-3/4 rounded ${template.tone === 'creative' ? 'bg-white/70' : 'bg-[#17264b]'}`} /><div className="h-1.5 w-full rounded bg-slate-300/70" /><div className="h-1.5 w-4/5 rounded bg-slate-300/70" /></div><div className="mt-7 grid grid-cols-2 gap-2"><div className={`h-16 rounded-lg ${template.tone === 'creative' ? 'bg-blue-500/50' : 'bg-blue-100'}`} /><div className={`h-16 rounded-lg ${template.tone === 'creative' ? 'bg-fuchsia-500/40' : 'bg-slate-200'}`} /></div></div>{selectedTemplate === template.name && <span className="absolute right-5 top-5 grid h-6 w-6 place-items-center rounded-full bg-blue-600 text-white"><Check size={14} strokeWidth={3} /></span>}</div><p className="mt-3 text-center text-sm font-bold text-[#20355f]">{template.name}</p></button>)}</div></div></section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="rounded-[28px] bg-[#071938] px-6 py-12 text-center text-white shadow-2xl shadow-blue-200 sm:px-12"><div className="mx-auto max-w-2xl"><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-500/20 text-blue-300"><Bot size={28} /></div><h2 className="mt-6 text-3xl font-bold sm:text-4xl">Ready to be seen?</h2><p className="mt-4 text-blue-100/65">Your next opportunity could start with a better portfolio.</p><button onClick={openBuilder} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#15366f] transition hover:bg-blue-50">Start for free <ArrowRight size={16} /></button></div></div></section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-7 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row"><span className="font-semibold text-[#15264a]">AI Portfolio Builder</span><span>© 2026. Make your work impossible to ignore.</span></div></footer>

      {showBuilder && <div className="fixed inset-0 z-50 overflow-y-auto bg-[#071938]/70 p-4 backdrop-blur-sm sm:p-8"><div className="mx-auto min-h-full max-w-5xl rounded-3xl bg-[#f8faff] shadow-2xl"><div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-8"><div className="flex items-center gap-2 font-bold text-[#10203f]"><span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white"><Sparkles size={16} /></span> Portfolio workspace</div><button aria-label="Close builder" onClick={() => setShowBuilder(false)} className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"><X size={20} /></button></div><div className="grid lg:grid-cols-[220px_1fr]"><aside className="hidden border-r border-slate-200 bg-[#0b1f43] p-5 text-white lg:block"><p className="mb-6 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">Build your site</p>{['Personal details', 'Education', 'Skills', 'Projects', 'Experience', 'Template', 'Generate'].map((item, index) => <div key={item} className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-3 text-xs ${index === 0 ? 'bg-blue-600 font-semibold' : 'text-blue-100/60'}`}><span className="grid h-5 w-5 place-items-center rounded-full border border-current text-[9px]">{index + 1}</span>{item}</div>)}</aside><div className="p-5 sm:p-8"><div className="flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Step 1 of 7</p><h2 className="mt-2 text-2xl font-bold text-[#10203f]">Tell us about yourself</h2><p className="mt-1 text-sm text-slate-500">We’ll use this to create your portfolio content.</p></div><div className="hidden rounded-xl bg-blue-50 p-3 text-blue-600 sm:block"><UserRound size={22} /></div></div><div className="mt-8 grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold text-slate-700">Full name<input defaultValue="Prathosh R" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none ring-blue-500 transition focus:ring-2" /></label><label className="text-sm font-semibold text-slate-700">Email address<input defaultValue="prathosh.r@gmail.com" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none ring-blue-500 transition focus:ring-2" /></label><label className="text-sm font-semibold text-slate-700">Role or headline<input defaultValue="Computer Technology Student" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none ring-blue-500 transition focus:ring-2" /></label><label className="text-sm font-semibold text-slate-700">Location<input defaultValue="Coimbatore, Tamil Nadu" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none ring-blue-500 transition focus:ring-2" /></label><label className="text-sm font-semibold text-slate-700 sm:col-span-2">About me<textarea defaultValue="I am a curious creator interested in building useful digital experiences and learning something new every day." className="mt-2 min-h-32 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal leading-6 outline-none ring-blue-500 transition focus:ring-2" /></label></div><div className="mt-8 flex justify-end"><button onClick={() => setShowBuilder(false)} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">Save & continue <ArrowRight size={16} /></button></div></div></div></div></div>}
    </div>
  );
}

export default App;
