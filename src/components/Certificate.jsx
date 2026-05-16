import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';

export default function Certificate({ certificate }) {
  return (
    <section id="certificate" className="relative bg-ivory px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,_rgba(242,184,75,0.2),_transparent_34%)]" />

      <motion.div
        initial={{ opacity: 0.9, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="relative mx-auto max-w-5xl rounded-[2rem] border-[10px] border-white bg-pearl p-6 text-center shadow-halo sm:p-10"
      >
        <div className="rounded-[1.5rem] border border-dashed border-plum/35 px-5 py-12 sm:px-10">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-plum text-white shadow-soft">
            <Award size={30} />
          </span>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.24em] text-clay">
            Certificado oficial
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-black leading-tight text-ink sm:text-6xl">
            {certificate.title}
          </h2>

          <p className="mt-8 text-lg font-bold text-ink/58">Concedido a</p>
          <p className="mt-2 font-display text-6xl font-black text-plum sm:text-7xl">
            {certificate.recipient}
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-ink/70">
            {certificate.award}
          </p>

          <div className="mt-10 grid gap-5 text-left sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-plum">Data</p>
              <p className="mt-2 text-2xl font-black text-ink">{certificate.date}</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-plum">
                Assinatura
              </p>
              <p className="mt-2 text-2xl font-black text-ink">{certificate.signature}</p>
            </div>
          </div>

          <div className="mx-auto mt-10 inline-flex items-center gap-2 rounded-full bg-marigold px-5 py-3 text-sm font-black text-ink">
            <BadgeCheck size={18} />
            Prêmio mais que merecido
          </div>
        </div>
      </motion.div>
    </section>
  );
}
