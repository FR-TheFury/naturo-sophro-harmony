import { Phone, Mail, MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-nature.png";

const Contact = () => {
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
              <span className="text-primary">Contact</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Vous avez des questions ou souhaitez prendre rendez-vous ? 
              N'hésitez pas à me contacter, je vous répondrai dans les meilleurs délais.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Mes coordonnées
              </h2>

              <a 
                href="tel:0677837716" 
                className="card-nature flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                  <p className="text-primary text-lg font-medium">06 77 83 77 16</p>
                </div>
              </a>

              <a 
                href="mailto:contact@gaiasensoria.fr" 
                className="card-nature flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-primary text-lg font-medium">contact@gaiasensoria.fr</p>
                </div>
              </a>

              <div className="card-nature flex items-start gap-6">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Zone d'intervention</h3>
                  <p className="text-muted-foreground">
                    Interventions à domicile et en entreprise<br />
                    Dans un rayon de 20 km
                  </p>
                </div>
              </div>

              <div className="card-nature flex items-start gap-6">
                <div className="w-14 h-14 bg-secondary/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                  <p className="text-muted-foreground">
                    Du lundi au samedi<br />
                    Sur rendez-vous uniquement
                  </p>
                </div>
              </div>
            </div>

            {/* RDV Card */}
            <div>
              <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-8 md:p-12">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-6">
                  <Calendar size={32} />
                </div>
                
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Prendre rendez-vous
                </h2>
                
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  Pour prendre rendez-vous, vous pouvez me contacter par téléphone 
                  ou par email. Je vous répondrai dans les plus brefs délais pour 
                  convenir d'un créneau qui vous convient.
                </p>

                <div className="space-y-4 mb-8">
                  <p className="flex items-center gap-3">
                    <Phone size={18} />
                    <span>Appelez-moi au 06 77 83 77 16</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail size={18} />
                    <span>Envoyez-moi un email</span>
                  </p>
                </div>

                <a 
                  href="tel:0677837716" 
                  className="w-full inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-background/90"
                >
                  Appeler maintenant
                  <ArrowRight size={18} />
                </a>

                <p className="text-sm text-primary-foreground/60 mt-6 text-center">
                  * Prise de rendez-vous en ligne bientôt disponible
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Comment se déroule une première séance ?
              </h3>
              <p className="text-muted-foreground">
                La première séance commence par un échange pour comprendre vos besoins 
                et vos attentes. Ensuite, nous pratiquons ensemble quelques exercices 
                adaptés à votre situation. Je vous remets des outils à pratiquer chez vous.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Combien de séances sont nécessaires ?
              </h3>
              <p className="text-muted-foreground">
                Le nombre de séances dépend de vos objectifs et de votre situation. 
                En général, un accompagnement de 5 à 10 séances permet d'obtenir 
                des résultats durables. Nous en discuterons ensemble.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Les séances sont-elles remboursées ?
              </h3>
              <p className="text-muted-foreground">
                La sophrologie et la naturopathie ne sont pas remboursées par la 
                Sécurité sociale. En revanche, de nombreuses mutuelles proposent 
                une prise en charge partielle. Renseignez-vous auprès de la vôtre.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Vous déplacez-vous à domicile ?
              </h3>
              <p className="text-muted-foreground">
                Oui, je me déplace à domicile dans un rayon de 20 km. 
                Des frais de déplacement peuvent s'appliquer selon la distance. 
                Contactez-moi pour en discuter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
