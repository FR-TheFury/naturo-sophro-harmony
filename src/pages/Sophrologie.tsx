import { Link } from "react-router-dom";
import { ArrowRight, Heart, Brain, Users, Home, Briefcase, Baby, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import meditationImage from "@/assets/meditation.png";
import heroImage from "@/assets/hero-nature.png";

const Sophrologie = () => {
  const services = [
    {
      icon: Heart,
      title: "Gestion du stress",
      description: "Apprenez à identifier et gérer votre stress grâce à des techniques de respiration et de relaxation profonde."
    },
    {
      icon: Brain,
      title: "Préparation mentale",
      description: "Préparez-vous sereinement aux examens, entretiens, compétitions ou événements importants."
    },
    {
      icon: Baby,
      title: "Accompagnement périnatal",
      description: "Vivez votre grossesse et votre accouchement en toute sérénité grâce à la sophrologie."
    },
    {
      icon: Users,
      title: "Séances collectives",
      description: "Partagez un moment de détente en groupe pour découvrir la sophrologie dans une ambiance conviviale."
    },
    {
      icon: Home,
      title: "Séances à domicile",
      description: "Je me déplace chez vous pour un accompagnement dans le confort de votre environnement."
    },
    {
      icon: Briefcase,
      title: "Entreprise",
      description: "Interventions en entreprise pour améliorer le bien-être au travail et la gestion du stress professionnel."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              La <span className="text-primary">Sophrologie</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              La sophrologie est une méthode psychocorporelle qui utilise la respiration, 
              la détente musculaire et la visualisation positive pour développer 
              sérénité et bien-être au quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* What is Sophrologie */}
      <section className="section-padding bg-muted/50 py-16 sm:py-20 md:py-28">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Qu'est-ce que la sophrologie ?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Créée en 1960 par le neuropsychiatre Alfonso Caycedo, la sophrologie 
                  est une méthode qui combine des techniques occidentales (relaxation, 
                  hypnose) et orientales (yoga, méditation, zen).
                </p>
                <p>
                  Elle permet de développer la conscience de soi, de renforcer 
                  les capacités personnelles et d'améliorer la qualité de vie 
                  au quotidien.
                </p>
                <p>
                  Accessible à tous, la sophrologie s'adapte à vos besoins 
                  spécifiques et vous accompagne dans les différentes étapes 
                  de votre vie.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={meditationImage} 
                alt="Séance de sophrologie - relaxation et méditation" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <Clock size={24} className="mb-2" />
                <p className="text-sm font-medium">Séance de 1h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding py-16 sm:py-20 md:py-28">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Les bienfaits de la sophrologie
            </h2>
            <p className="text-muted-foreground text-lg">
              La sophrologie apporte de nombreux bénéfices pour votre bien-être 
              physique et mental.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Réduction du stress et de l'anxiété",
              "Amélioration du sommeil",
              "Gestion des émotions",
              "Renforcement de la confiance en soi",
              "Préparation aux événements",
              "Soulagement des douleurs",
              "Amélioration de la concentration",
              "Développement personnel"
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-4 flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
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
              Mes accompagnements en sophrologie
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-nature">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={24} />
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

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground py-16 sm:py-20 md:py-28">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Envie de découvrir la sophrologie ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour une première séance découverte et 
            commencez votre chemin vers le mieux-être.
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
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground px-8 py-4 rounded-full font-medium transition-all hover:bg-primary-foreground/10"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sophrologie;
