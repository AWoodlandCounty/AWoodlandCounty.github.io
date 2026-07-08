import { motion, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Trees, 
  Factory, 
  Hammer, 
  Map, 
  Info
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary/50 selection:text-white mc-bg-grid relative flex flex-col overflow-x-hidden">
      {/* Background Image Setup */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-background/85 md:bg-background/80 z-10" />
        <img 
          src={`${import.meta.env.BASE_URL}hero-bg.jpg`}
          alt="Overhead view of a Minecraft town" 
          className="w-full h-full object-cover opacity-60 mix-blend-multiply"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-[#3c3c3c] border-b-[4px] border-b-black/50 border-t-[4px] border-t-white/20">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 font-serif text-[10px] md:text-sm text-primary drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
            <Trees className="w-5 h-5 text-primary" />
            <span>Woodland County</span>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm" className="bg-[#5D9A3C] hover:bg-[#6ab345] text-white mc-border-2 mc-border-active h-8 px-4 font-serif text-[10px] shadow-[2px_2px_0_rgba(0,0,0,0.6)] active:translate-y-[2px] active:shadow-none transition-none rounded-none" asChild>
              <a href="#download">
                <Download className="w-3 h-3 mr-2" /> Play
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center py-12 px-4 max-w-5xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full flex flex-col items-center text-center gap-8 md:gap-10"
        >
          {/* Header/Title */}
          <div className="flex flex-col items-center gap-6">
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-[#8B6449] hover:bg-[#8B6449] text-white mc-border-2 text-[9px] md:text-[10px] py-1.5 px-3 font-serif uppercase leading-none shadow-[2px_2px_0_rgba(0,0,0,0.6)] rounded-none">Minecraft 1.21.1</Badge>
              <Badge className="bg-[#5D9A3C] hover:bg-[#5D9A3C] text-white mc-border-2 text-[9px] md:text-[10px] py-1.5 px-3 font-serif uppercase leading-none shadow-[2px_2px_0_rgba(0,0,0,0.6)] rounded-none">NeoForge 21.1</Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-2xl md:text-4xl lg:text-5xl font-serif text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] leading-tight tracking-tight px-2">
              Woodland County
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="max-w-3xl bg-[#2D2D2D]/90 p-4 md:p-6 mc-border shadow-xl backdrop-blur-sm mx-2">
              <p className="text-sm md:text-base text-stone-200 leading-relaxed font-sans font-medium">
                A grounded, semi-realistic survival experience. Build a town, find employment, develop industry, and coordinate city planning. No magic. Just mechanics, community, and hard work.
              </p>
            </motion.div>
          </div>
          
          {/* Decorative pixel divider */}
          <motion.div variants={fadeInUp} className="flex gap-1.5 my-2">
            {[...Array(7)].map((_, i) => (
              <div key={i} className={`w-3 h-3 md:w-4 md:h-4 ${
                i % 2 === 0 ? 'bg-[#5D9A3C]' : 'bg-[#8B6449]'
              } shadow-[inset_2px_2px_rgba(255,255,255,0.3),inset_-2px_-2px_rgba(0,0,0,0.3)]`} />
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full px-2">
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-[#3c3c3c]/95 mc-border text-left hover:bg-[#4a4a4a] transition-colors rounded-none shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                <CardHeader className="p-4 md:p-5 pb-2">
                  <div className="flex items-center gap-3">
                    <Hammer className="w-6 h-6 text-[#6DB3F2] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]" />
                    <CardTitle className="text-[10px] md:text-[11px] font-serif text-white leading-loose tracking-wide">Employment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-5 pt-2 text-stone-300 text-xs md:text-sm leading-relaxed">
                  Take on specific roles. Specialized tools and economics make every job essential to the town.
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-[#3c3c3c]/95 mc-border text-left hover:bg-[#4a4a4a] transition-colors rounded-none shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                <CardHeader className="p-4 md:p-5 pb-2">
                  <div className="flex items-center gap-3">
                    <Factory className="w-6 h-6 text-[#A0522D] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]" />
                    <CardTitle className="text-[10px] md:text-[11px] font-serif text-white leading-loose tracking-wide">Industry</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-5 pt-2 text-stone-300 text-xs md:text-sm leading-relaxed">
                  Design assembly lines and process materials. Automation is grounded and requires planning.
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-[#3c3c3c]/95 mc-border text-left hover:bg-[#4a4a4a] transition-colors rounded-none shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                <CardHeader className="p-4 md:p-5 pb-2">
                  <div className="flex items-center gap-3">
                    <Map className="w-6 h-6 text-[#5D9A3C] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]" />
                    <CardTitle className="text-[10px] md:text-[11px] font-serif text-white leading-loose tracking-wide">City Planning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-5 pt-2 text-stone-300 text-xs md:text-sm leading-relaxed">
                  Use blueprints and road networks. World generation accommodates large-scale expansion.
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Download CTA */}
          <motion.div variants={fadeInUp} id="download" className="mt-4 flex flex-col items-center gap-4 w-full max-w-sm px-2">
            <Button 
              size="lg" 
              className="w-full bg-[#5D9A3C] hover:bg-[#6ab345] text-white mc-border mc-border-active text-[10px] md:text-[11px] h-14 md:h-16 px-8 font-serif rounded-none shadow-[4px_4px_0_rgba(0,0,0,0.6)] active:translate-y-[4px] active:shadow-none transition-none tracking-wide"
            >
              <Download className="w-5 h-5 mr-3 drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]" /> 
              Download Modpack
            </Button>
            <div className="flex items-center justify-center gap-2 text-[9px] md:text-[10px] font-serif text-stone-300 bg-black/60 px-4 py-3 mc-border-2 w-full shadow-[4px_4px_0_rgba(0,0,0,0.6)] rounded-none">
              <Info className="w-4 h-4 text-[#6DB3F2]" />
              <span>Download link coming soon</span>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
