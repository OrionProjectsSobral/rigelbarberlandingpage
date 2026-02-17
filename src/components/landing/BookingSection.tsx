import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import bookingCalendar from "@/assets/booking-calendar.jpg";

const benefits = [
  "Link exclusivo para sua barbearia",
  "Sem necessidade de baixar app",
  "Integração com Google Calendar",
];

const BookingSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-background flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="wireframe-container w-full aspect-square max-w-[500px] bg-background p-2 overflow-hidden">
            <img 
              src={bookingCalendar}
              alt="Sistema de agendamento online"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-primary/20 pointer-events-none"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col gap-8 w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-primary font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-4">
            <span className="w-12 h-[1px] bg-primary"></span>
            Experiência do Cliente
          </div>
          
          <h2 className="text-foreground text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Agendamento Simplificado
          </h2>
          
          <p className="text-text-secondary text-lg leading-relaxed font-medium">
            Abandone o papel e caneta. Ofereça uma experiência de agendamento online impecável para seus clientes, disponível 24 horas por dia. Seus clientes podem escolher o serviço, o profissional e o horário em segundos.
          </p>
          
          <ul className="flex flex-col gap-4 mt-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-4 text-foreground text-sm font-bold uppercase tracking-widest">
                <span className="w-5 h-5 flex items-center justify-center border border-primary text-primary">
                  <Check size={12} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
          
          <div className="pt-6">
            <button className="group flex items-center gap-4 text-primary text-xs font-black uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-foreground hover:border-foreground transition-all">
              Ver funcionalidades 
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;