import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-nature.png";
import meditationImage from "@/assets/meditation.png";
import stonesImage from "@/assets/stones.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-secondary mb-4 animate-fade-in-up">
              <Leaf size={20} />
              <span className="text-sm font-medium uppercase tracking-wider">
                Bien-être naturel
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Retrouvez votre équilibre avec la{" "}
              <span className="text-primary">sophrologie</span> et la{" "}
              <span className="text-accent">naturopathie</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Je suis Cécilia Decottignies, sophrologue et naturopathe certifiée. 
              Je vous accompagne vers un mieux-être global à travers des approches 
              naturelles et personnalisées.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a href="#rdv" className="btn-primary inline-flex items-center justify-center gap-2">
                Prendre rendez-vous
                <ArrowRight size={18} />
              </a>
              <Link 
                to="/a-propos" 
                className="btn-secondary inline-flex items-center justify-center gap-2 bg-background/80 text-foreground border border-border hover:bg-muted"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Un accompagnement holistique
            </h2>
            <p className="text-muted-foreground text-lg">
              La sophrologie et la naturopathie sont deux approches complémentaires 
              qui permettent de prendre soin de vous dans votre globalité : 
              corps, mental et émotions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Sophrologie Card */}
            <Link to="/sophrologie" className="group">
              <div className="card-nature h-full">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={meditationImage} 
                    alt="Séance de sophrologie - méditation et relaxation" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Heart className="text-primary-foreground" size={32} />
                  </div>
                </div>
                
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Sophrologie
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Technique de relaxation dynamique qui combine respiration, 
                  détente musculaire et visualisation positive pour gérer 
                  le stress, les émotions et améliorer votre quotidien.
                </p>
                
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <Leaf size={14} className="text-primary" />
                    Gestion du stress et des émotions
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf size={14} className="text-primary" />
                    Préparation aux examens
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf size={14} className="text-primary" />
                    Accompagnement périnatal
                  </li>
                </ul>
                
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Découvrir la sophrologie
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Naturopathie Card */}
            <Link to="/naturopathie" className="group">
              <div className="card-nature h-full">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={stonesImage} 
                    alt="Naturopathie - équilibre et bien-être naturel" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Sparkles className="text-primary-foreground" size={32} />
                  </div>
                </div>
                
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Naturopathie
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Médecine traditionnelle occidentale qui vise à renforcer 
                  les défenses naturelles de l'organisme par des moyens 
                  naturels : alimentation, hygiène de vie, plantes...
                </p>
                
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <Leaf size={14} className="text-accent" />
                    Rééquilibrage alimentaire
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf size={14} className="text-accent" />
                    Arrêt du tabac
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf size={14} className="text-accent" />
                    Séances de diapason
                  </li>
                </ul>
                
                <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                  Découvrir la naturopathie
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Prêt(e) à prendre soin de vous ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour une première consultation et découvrez 
            comment la sophrologie et la naturopathie peuvent vous accompagner 
            vers un mieux-être durable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#rdv" 
              className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-background/90 hover:shadow-lg"
            >
              Prendre rendez-vous
              <ArrowRight size={18} />
            </a>
            <Link 
              to="/tarifs" 
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-primary-foreground/10"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mes valeurs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Bienveillance
              </h3>
              <p className="text-muted-foreground">
                Un accompagnement dans le respect de votre rythme et de vos besoins, 
                sans jugement.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-accent" size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Naturalité
              </h3>
              <p className="text-muted-foreground">
                Des méthodes douces et naturelles pour respecter votre corps 
                et votre équilibre.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-secondary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Personnalisation
              </h3>
              <p className="text-muted-foreground">
                Chaque accompagnement est unique et adapté à votre situation 
                personnelle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
