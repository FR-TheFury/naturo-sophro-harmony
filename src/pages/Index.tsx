import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Sparkles, Wind, Sun, Flower2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import TreeOfLife from "@/components/TreeOfLife";
import RevealBlock from "@/components/RevealBlock";
import FloatingLeaves from "@/components/FloatingLeaves";
import heroImage from "@/assets/hero-nature.png";
import meditationImage from "@/assets/meditation.png";
import stonesImage from "@/assets/stones.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Tree of Life - Fixed trunk on left */}
      <TreeOfLife />
      
      {/* Floating leaves decoration */}
      <FloatingLeaves count={4} className="z-5" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-muted/30 to-cream" />
        
        {/* Background image overlay - full width */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 organic-blob bg-primary/5 blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-40 right-20 w-96 h-96 organic-shape bg-accent/5 blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
        
        {/* Main content */}
        <div className="container-custom mx-auto px-4 md:px-8 relative z-20 pt-24 pl-44 md:pl-52 lg:pl-60">
          <RevealBlock delay={500} immediate showBranch={false}>
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
                <Flower2 size={18} className="animate-pulse-soft" />
                <span className="text-sm font-medium tracking-wide">
                  Bien-être holistique & naturel
                </span>
              </div>
              
              <h1 className="text-display text-foreground mb-8 text-balance">
                Révélez votre{" "}
                <span className="text-gradient">équilibre intérieur</span>{" "}
                naturellement
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                Je suis <strong className="text-foreground">Cécilia Decottignies</strong>, 
                sophrologue et naturopathe certifiée. Ensemble, retrouvons le chemin 
                de votre mieux-être.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#rdv" className="btn-primary inline-flex items-center justify-center gap-3 text-lg">
                  <Sparkles size={20} />
                  Prendre rendez-vous
                  <ArrowRight size={18} />
                </a>
                <Link 
                  to="/a-propos" 
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-lg"
                >
                  Découvrir mon approche
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-16 flex flex-wrap gap-8">
                <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm rounded-2xl p-4 border border-border/30">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Heart className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-foreground">100%</p>
                    <p className="text-sm text-muted-foreground">Personnalisé</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm rounded-2xl p-4 border border-border/30">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Leaf className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-foreground">Naturel</p>
                    <p className="text-sm text-muted-foreground">Sans effets secondaires</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-20">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary/50 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative h-24 -mt-24 z-30">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full">
          <path d="M0 50C240 80 480 100 720 90C960 80 1200 40 1440 50V100H0V50Z" fill="hsl(var(--muted))" fillOpacity="0.5"/>
        </svg>
      </div>

      {/* Introduction Section */}
      <section className="section-padding bg-gradient-organic relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 organic-blob bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-20 w-80 h-80 organic-shape bg-accent/5 blur-3xl" />

        <div className="container-custom mx-auto px-4 md:px-8 relative z-10 tree-content-area">
          <RevealBlock delay={0} branchOffsetY="20%">
            <div className="max-w-3xl mb-20">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Mes approches
              </span>
              <h2 className="text-title text-foreground mb-6 text-balance">
                Deux disciplines complémentaires pour un{" "}
                <span className="text-gradient">bien-être global</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                La sophrologie et la naturopathie s'associent harmonieusement 
                pour prendre soin de vous dans votre globalité : 
                corps, mental et émotions.
              </p>
            </div>
          </RevealBlock>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Sophrologie Card */}
            <RevealBlock delay={200} branchOffsetY="30%">
              <Link to="/sophrologie" className="group block">
                <div className="card-nature h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px]" />
                  
                  <div className="relative h-56 mb-8 rounded-2xl overflow-hidden">
                    <img 
                      src={meditationImage} 
                      alt="Séance de sophrologie - méditation et relaxation" 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                        <Wind className="text-primary" size={24} />
                      </div>
                      <span className="text-primary-foreground font-heading text-lg font-semibold">
                        Respiration & Sérénité
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-subtitle text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    Sophrologie
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Une méthode douce qui allie respiration, détente musculaire 
                    et visualisation positive pour harmoniser le corps et l'esprit.
                  </p>
                  
                  <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                    {["Gestion du stress et des émotions", "Préparation aux examens", "Accompagnement périnatal"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Leaf size={12} className="text-primary" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                    Découvrir la sophrologie
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </RevealBlock>

            {/* Naturopathie Card */}
            <RevealBlock delay={400} branchOffsetY="30%">
              <Link to="/naturopathie" className="group block">
                <div className="card-nature h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-[100px]" />
                  
                  <div className="relative h-56 mb-8 rounded-2xl overflow-hidden">
                    <img 
                      src={stonesImage} 
                      alt="Naturopathie - équilibre et bien-être naturel" 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                        <Sun className="text-accent" size={24} />
                      </div>
                      <span className="text-accent-foreground font-heading text-lg font-semibold">
                        Équilibre & Vitalité
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-subtitle text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    Naturopathie
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Une approche globale qui renforce vos défenses naturelles 
                    par des moyens doux : alimentation, hygiène de vie, plantes...
                  </p>
                  
                  <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                    {["Rééquilibrage alimentaire", "Arrêt du tabac", "Séances de diapason"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Leaf size={12} className="text-accent" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300">
                    Découvrir la naturopathie
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-forest" />
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-primary-foreground/30" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-primary-foreground/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-foreground/10" />
        </div>
        
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10 tree-content-area">
          <RevealBlock delay={0} branchOffsetY="50%">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground mb-8">
                <Sparkles size={18} />
                <span className="text-sm font-medium">Votre bien-être m'attend</span>
              </div>
              
              <h2 className="text-title text-primary-foreground mb-6 text-balance">
                Prêt(e) à vous reconnecter à votre nature profonde ?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-10">
                Prenez rendez-vous pour une première consultation et découvrez 
                comment la sophrologie et la naturopathie peuvent transformer votre quotidien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#rdv" 
                  className="inline-flex items-center justify-center gap-3 bg-background text-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-organic-lg text-lg"
                >
                  <Sparkles size={20} />
                  Prendre rendez-vous
                  <ArrowRight size={18} />
                </a>
                <Link 
                  to="/tarifs" 
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground/50 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground text-lg"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/5 to-transparent" />
        
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10 tree-content-area">
          <RevealBlock delay={0} branchOffsetY="30%">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-earth text-sm font-medium mb-4">
                Ma philosophie
              </span>
              <h2 className="text-title text-foreground mb-4">
                Les valeurs qui guident ma pratique
              </h2>
            </div>
          </RevealBlock>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Bienveillance",
                description: "Un accompagnement dans le respect de votre rythme et de vos besoins, sans jugement.",
                color: "primary"
              },
              {
                icon: Leaf,
                title: "Naturalité",
                description: "Des méthodes douces et naturelles pour respecter votre corps et votre équilibre.",
                color: "accent"
              },
              {
                icon: Sparkles,
                title: "Personnalisation",
                description: "Chaque accompagnement est unique et adapté à votre situation personnelle.",
                color: "gold"
              }
            ].map((value, index) => (
              <RevealBlock key={value.title} delay={index * 200} branchOffsetY="40%">
                <div className="group text-center p-8 rounded-3xl bg-card border border-border/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-organic">
                  <div className={`relative w-20 h-20 mx-auto mb-6`}>
                    <div className={`absolute inset-0 organic-blob bg-${value.color}/10 group-hover:scale-110 transition-transform duration-500`} />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <value.icon className={`text-${value.color}`} size={32} />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
