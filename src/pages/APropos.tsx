import { ArrowRight, Heart, GraduationCap, Award, Leaf } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-nature.png";

const APropos = () => {
  const formations = [
    "Certification en Sophrologie",
    "Certification en Naturopathie",
    "Formation en Phytothérapie",
    "Formation en Aromathérapie",
    "Spécialisation périnatalité",
    "Formation Diapasons thérapeutiques"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              À propos de <span className="text-primary">Cécilia</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Découvrez mon parcours et ma philosophie d'accompagnement 
              en sophrologie et naturopathie.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                {/* Placeholder for photo */}
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Heart size={48} className="text-primary" />
                    </div>
                    <p className="text-muted-foreground italic">
                      Cécilia Decottignies
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sophrologue & Naturopathe
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                  <Award size={24} className="mb-1" />
                  <p className="text-sm font-medium">Certifiée</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Mon parcours
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Passionnée par le bien-être et les approches naturelles de la santé, 
                  j'ai choisi de me former en sophrologie et naturopathie pour 
                  accompagner les personnes vers un mieux-être global.
                </p>
                <p>
                  Ma démarche est holistique : je considère chaque personne dans 
                  sa globalité, en tenant compte de son histoire, de son environnement 
                  et de ses aspirations.
                </p>
                <p>
                  Mon objectif est de vous transmettre des outils concrets et 
                  accessibles pour que vous deveniez autonome dans la gestion 
                  de votre bien-être au quotidien.
                </p>
                <p>
                  À travers Gaïa Sensoria, je souhaite créer un espace bienveillant 
                  où chacun peut se reconnecter à lui-même et à la nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ma philosophie
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Écoute & Bienveillance
              </h3>
              <p className="text-muted-foreground">
                Chaque personne est unique. Je prends le temps de vous écouter 
                vraiment, sans jugement, pour comprendre vos besoins profonds.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-accent" size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Approche naturelle
              </h3>
              <p className="text-muted-foreground">
                Je privilégie les méthodes douces et naturelles qui respectent 
                votre corps et votre rythme. La nature est notre meilleure alliée.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-secondary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Autonomie
              </h3>
              <p className="text-muted-foreground">
                Mon but est de vous rendre autonome. Je vous transmets des outils 
                que vous pourrez utiliser seul(e) au quotidien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Mes formations
              </h2>
              <p className="text-muted-foreground mb-8">
                Je me forme continuellement pour vous proposer un accompagnement 
                de qualité, basé sur des connaissances solides et actualisées.
              </p>

              <div className="space-y-4">
                {formations.map((formation, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-primary" size={20} />
                    </div>
                    <span className="text-foreground font-medium">{formation}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 md:p-12">
              <blockquote className="text-center">
                <p className="font-heading text-2xl md:text-3xl text-foreground italic mb-6">
                  "La nature fait bien les choses. Mon rôle est de vous aider 
                  à vous reconnecter à cette sagesse naturelle qui est en vous."
                </p>
                <footer className="text-muted-foreground">
                  — Cécilia Decottignies
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Envie de me rencontrer ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour une première consultation et discutons 
            ensemble de vos besoins et de la façon dont je peux vous accompagner.
          </p>
          <a 
            href="#rdv" 
            className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-background/90"
          >
            Prendre rendez-vous
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
