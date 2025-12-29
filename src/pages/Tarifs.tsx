import { Link } from "react-router-dom";
import { ArrowRight, Check, Info } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Tarifs = () => {
  const sophroTarifs = [
    {
      title: "Séance individuelle",
      price: "60",
      duration: "1h",
      description: "Séance personnalisée adaptée à vos besoins",
      features: [
        "Bilan et échange personnalisé",
        "Exercices de relaxation dynamique",
        "Techniques de respiration",
        "Visualisation positive",
        "Fiche récapitulative des exercices"
      ]
    },
    {
      title: "Forfait 5 séances",
      price: "270",
      duration: "5 x 1h",
      description: "Accompagnement suivi pour des résultats durables",
      features: [
        "5 séances individuelles",
        "Suivi personnalisé",
        "Programme progressif",
        "Exercices à pratiquer chez soi",
        "Économie de 30€"
      ],
      popular: true
    },
    {
      title: "Séance collective",
      price: "15",
      duration: "1h",
      description: "Découverte en groupe (4-10 personnes)",
      features: [
        "Séance thématique",
        "Ambiance conviviale",
        "Échange entre participants",
        "Techniques accessibles à tous"
      ]
    }
  ];

  const naturoTarifs = [
    {
      title: "Première consultation",
      price: "80",
      duration: "1h30",
      description: "Bilan de vitalité complet",
      features: [
        "Anamnèse approfondie",
        "Bilan de vitalité",
        "Iridologie (si souhaité)",
        "Programme d'hygiène vitale personnalisé",
        "Conseils alimentaires et phyto"
      ],
      popular: true
    },
    {
      title: "Consultation de suivi",
      price: "60",
      duration: "1h",
      description: "Ajustement et accompagnement",
      features: [
        "Point sur les évolutions",
        "Ajustement du programme",
        "Nouveaux conseils si besoin",
        "Réponse à vos questions"
      ]
    },
    {
      title: "Séance Diapasons",
      price: "50",
      duration: "45min",
      description: "Harmonisation par les vibrations sonores",
      features: [
        "Rééquilibrage énergétique",
        "Relaxation profonde",
        "Harmonisation des chakras",
        "Moment de détente unique"
      ]
    }
  ];

  const TarifCard = ({ tarif, accent = "primary" }: { tarif: typeof sophroTarifs[0], accent?: string }) => (
    <div className={`bg-card border ${tarif.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg`}>
      {tarif.popular && (
        <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
          Le plus populaire
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          {tarif.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {tarif.description}
        </p>
        <div className="flex items-baseline gap-1 mb-6">
          <span className={`text-4xl font-bold ${accent === 'primary' ? 'text-primary' : 'text-accent'}`}>
            {tarif.price}€
          </span>
          <span className="text-muted-foreground">/ {tarif.duration}</span>
        </div>
        <ul className="space-y-3 mb-6">
          {tarif.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className={`${accent === 'primary' ? 'text-primary' : 'text-accent'} flex-shrink-0 mt-0.5`} size={18} />
              <span className="text-foreground text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <a 
          href="#rdv" 
          className={`w-full inline-flex items-center justify-center gap-2 ${tarif.popular ? 'btn-primary' : 'bg-muted text-foreground hover:bg-muted/80'} px-6 py-3 rounded-full font-medium transition-all duration-300`}
        >
          Réserver
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Mes <span className="text-primary">tarifs</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Des accompagnements accessibles pour prendre soin de votre bien-être. 
            Tous les tarifs sont à titre indicatif.
          </p>
        </div>
      </section>

      {/* Sophrologie Tarifs */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sophrologie
            </h2>
            <p className="text-muted-foreground">
              Des séances individuelles ou collectives adaptées à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sophroTarifs.map((tarif, index) => (
              <TarifCard key={index} tarif={tarif} accent="primary" />
            ))}
          </div>
        </div>
      </section>

      {/* Naturopathie Tarifs */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Naturopathie
            </h2>
            <p className="text-muted-foreground">
              Des consultations complètes pour retrouver votre vitalité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {naturoTarifs.map((tarif, index) => (
              <TarifCard key={index} tarif={tarif} accent="accent" />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Informations pratiques
            </h2>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 flex gap-4">
                <Info className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Moyens de paiement</h3>
                  <p className="text-muted-foreground">
                    Règlement par chèque, espèces ou virement bancaire. 
                    Le paiement s'effectue à la fin de chaque séance.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 flex gap-4">
                <Info className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Remboursement mutuelle</h3>
                  <p className="text-muted-foreground">
                    Certaines mutuelles prennent en charge les séances de sophrologie 
                    et de naturopathie. Renseignez-vous auprès de votre organisme. 
                    Une facture vous sera remise sur demande.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 flex gap-4">
                <Info className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Annulation</h3>
                  <p className="text-muted-foreground">
                    En cas d'empêchement, merci de prévenir au moins 48h à l'avance. 
                    Toute séance non annulée dans ce délai sera due.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 flex gap-4">
                <Info className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Déplacement à domicile</h3>
                  <p className="text-muted-foreground">
                    Je me déplace à domicile dans un rayon de 20 km. 
                    Des frais de déplacement peuvent s'appliquer selon la distance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Des questions sur les tarifs ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute question ou pour 
            discuter de votre accompagnement personnalisé.
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
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground px-8 py-4 rounded-full font-medium transition-all hover:bg-primary-foreground/10"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tarifs;
