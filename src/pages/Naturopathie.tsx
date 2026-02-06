import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Apple, Cigarette, Music, Sparkles, Sun, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import stonesImage from "@/assets/stones.jpg";
import natureLeavesImage from "@/assets/nature-leaves.png";

const Naturopathie = () => {
  const services = [
    {
      icon: Apple,
      title: "Rééquilibrage alimentaire",
      description: "Adoptez une alimentation adaptée à vos besoins pour retrouver vitalité et énergie au quotidien."
    },
    {
      icon: Cigarette,
      title: "Arrêt du tabac",
      description: "Un accompagnement naturel et personnalisé pour vous libérer définitivement de la cigarette."
    },
    {
      icon: Sun,
      title: "Bien-être quotidien",
      description: "Conseils en hygiène de vie, gestion du stress et sommeil pour améliorer votre qualité de vie."
    },
    {
      icon: Music,
      title: "Séances de diapason",
      description: "Harmonisez vos énergies grâce aux vibrations sonores thérapeutiques des diapasons."
    },
    {
      icon: Leaf,
      title: "Phytothérapie",
      description: "Utilisez le pouvoir des plantes pour soutenir votre organisme naturellement."
    },
    {
      icon: Sparkles,
      title: "Aromathérapie",
      description: "Découvrez les bienfaits des huiles essentielles pour votre santé et votre bien-être."
    },
  ];

  const pillars = [
    {
      title: "L'alimentation",
      description: "Une nutrition adaptée et équilibrée est la base d'une bonne santé."
    },
    {
      title: "L'exercice physique",
      description: "Le mouvement est essentiel pour maintenir un corps sain et un esprit équilibré."
    },
    {
      title: "La gestion du stress",
      description: "Apprendre à gérer ses émotions pour préserver son énergie vitale."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${natureLeavesImage})` }}
        />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              La <span className="text-accent">Naturopathie</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              La naturopathie est une médecine traditionnelle occidentale qui vise 
              à renforcer les défenses naturelles de l'organisme par des moyens 
              naturels et biologiques.
            </p>
          </div>
        </div>
      </section>

      {/* What is Naturopathie */}
      <section className="section-padding bg-muted/50 py-16 sm:py-20 md:py-28">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src={stonesImage} 
                alt="Naturopathie - pierres d'équilibre et bien-être naturel" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                <Clock size={24} className="mb-2" />
                <p className="text-sm font-medium">Consultation 1h30</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Qu'est-ce que la naturopathie ?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Reconnue par l'OMS comme médecine traditionnelle, la naturopathie 
                  considère l'être humain dans sa globalité : physique, émotionnelle, 
                  mentale et énergétique.
                </p>
                <p>
                  Elle ne se substitue pas à la médecine conventionnelle mais 
                  la complète en agissant sur les causes profondes des déséquilibres 
                  plutôt que sur les symptômes.
                </p>
                <p>
                  Mon rôle est de vous accompagner vers une meilleure hygiène de vie 
                  en vous donnant les clés pour devenir acteur de votre santé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Pillars */}
      <section className="section-padding py-16 sm:py-20 md:py-28">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Les 3 piliers de la naturopathie
            </h2>
            <p className="text-muted-foreground text-lg">
              La naturopathie repose sur trois techniques majeures pour 
              retrouver et maintenir une santé optimale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center p-8 bg-card border border-border rounded-lg">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl font-bold text-accent">{index + 1}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted/50 py-16 sm:py-20 md:py-28">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mes accompagnements en naturopathie
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-nature">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Process */}
      <section className="section-padding py-16 sm:py-20 md:py-28">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Déroulement d'une consultation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Anamnèse
              </h3>
              <p className="text-muted-foreground text-sm">
                Échange approfondi sur votre histoire, votre mode de vie, 
                vos habitudes alimentaires et vos attentes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Bilan de vitalité
              </h3>
              <p className="text-muted-foreground text-sm">
                Évaluation de votre état de santé global à travers 
                différentes techniques (iridologie, morphologie...).
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Programme personnalisé
              </h3>
              <p className="text-muted-foreground text-sm">
                Remise d'un programme d'hygiène vitale adapté à vos 
                besoins avec conseils en alimentation, phyto, etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent text-accent-foreground py-16 sm:py-20 md:py-28">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Prêt(e) à prendre votre santé en main ?
          </h2>
          <p className="text-accent-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour un bilan de vitalité complet et 
            recevez un programme personnalisé adapté à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#rdv" 
              className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-background/90"
            >
              Prendre rendez-vous
              <ArrowRight size={18} />
            </a>
            <Link 
              to="/tarifs" 
              className="inline-flex items-center justify-center gap-2 border-2 border-accent-foreground px-8 py-4 rounded-full font-medium transition-all hover:bg-accent-foreground/10"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Naturopathie;
