"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Clock3,
  Headphones,
  Home as HomeIcon,
  MapPin,
  PackageCheck,
  Phone,
  Refrigerator,
  ShieldCheck,
  Sparkles,
  Truck,
  Tv,
  Wrench,
  X,
} from "lucide-react";

const phoneDisplay = "02 33 46 50 39";
const phoneHref = "tel:+33233465039";
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Bachelet+PM+40+Rue+de+la+Manche+50710+Creances";

const services = [
  {
    icon: Refrigerator,
    title: "Gros électroménager",
    text: "Lave-linge, sèche-linge, réfrigérateur, congélateur, four, cuisson et lave-vaisselle.",
  },
  {
    icon: Sparkles,
    title: "Petit électroménager",
    text: "Café, cuisine, entretien et soin de la maison : des appareils choisis pour durer.",
  },
  {
    icon: Tv,
    title: "Image & son",
    text: "Téléviseurs, vidéo et Hi-Fi avec les conseils d'un professionnel de proximité.",
  },
  {
    icon: Wrench,
    title: "Dépannage & réparation",
    text: "Diagnostic et réparation à domicile ou dans notre atelier de Créances.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  name: "Bachelet PM",
  legalName: "SARL BACHELET P M",
  description:
    "Vente, livraison, installation, dépannage et réparation d'électroménager, image et son à Créances.",
  foundingDate: "2007-05",
  telephone: "+33233465039",
  address: {
    "@type": "PostalAddress",
    streetAddress: "40 Rue de la Manche – ZI PACO III",
    postalCode: "50710",
    addressLocality: "Créances",
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "14:00",
      closes: "18:00",
    },
  ],
};

export default function Home() {
  const [showDemoNotice, setShowDemoNotice] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowDemoNotice(true), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="topline">
        <div className="shell topline-inner">
          <p><MapPin size={14} aria-hidden="true" /> Votre spécialiste à Créances</p>
          <a href={phoneHref} aria-label={`Appeler Bachelet PM au ${phoneDisplay}`}>
            <Phone size={14} aria-hidden="true" /> {phoneDisplay}
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#accueil" aria-label="Bachelet PM, accueil">
            <span className="brand-mark" aria-hidden="true">BP</span>
            <span className="brand-copy">
              <strong>BACHELET PM</strong>
              <small>ÉLECTROMÉNAGER · CRÉANCES</small>
            </span>
          </a>
          <nav aria-label="Navigation principale">
            <a href="#univers">Nos univers</a>
            <a href="#services">Nos services</a>
            <a href="#magasin">Le magasin</a>
          </nav>
          <a className="header-call" href={phoneHref}>
            <Phone size={17} aria-hidden="true" /> Appeler
          </a>
        </div>
      </header>

      <section className="hero" id="accueil">
        <img
          className="hero-photo"
          src="https://images.pexels.com/photos/18071814/pexels-photo-18071814.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Cuisine contemporaine équipée d'appareils électroménagers"
        />
        <div className="hero-shade" />
        <div className="shell hero-inner">
          <div className="hero-content">
            <p className="eyebrow">Vente · Livraison · Installation · Dépannage</p>
            <h1>Votre électroménager, avec le service en plus.</h1>
            <p className="hero-lead">
              Conseils en magasin, livraison et installation à domicile, dépannage
              et réparation : un interlocuteur local vous accompagne de A à Z.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={phoneHref}>
                <Phone size={19} aria-hidden="true" /> Appeler le magasin
              </a>
              <a className="button button-ghost" href={mapsHref} target="_blank" rel="noreferrer">
                <MapPin size={19} aria-hidden="true" /> Venir au magasin
              </a>
            </div>
            <div className="hero-proof" aria-label="Avantages">
              <span><Check size={16} aria-hidden="true" /> Entreprise locale depuis 2007</span>
              <span><Check size={16} aria-hidden="true" /> SAV de proximité</span>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-strip" aria-label="Informations essentielles">
        <div className="shell quick-grid">
          <article>
            <span className="quick-icon"><MapPin aria-hidden="true" /></span>
            <div><small>Nous trouver</small><strong>40 Rue de la Manche, Créances</strong></div>
            <a href={mapsHref} target="_blank" rel="noreferrer" aria-label="Ouvrir l'itinéraire"><ChevronRight /></a>
          </article>
          <article>
            <span className="quick-icon"><Clock3 aria-hidden="true" /></span>
            <div><small>Horaires</small><strong>Lun–Ven 9h–12h · 14h–19h</strong></div>
            <a href="#horaires" aria-label="Voir tous les horaires"><ChevronRight /></a>
          </article>
          <article>
            <span className="quick-icon"><Wrench aria-hidden="true" /></span>
            <div><small>Besoin d'un dépannage ?</small><strong>Atelier & intervention à domicile</strong></div>
            <a href={phoneHref} aria-label="Appeler pour un dépannage"><ChevronRight /></a>
          </article>
        </div>
      </section>

      <section className="section services-section" id="univers">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow dark">Tout pour équiper votre foyer</p>
              <h2>Le bon appareil. Le bon conseil. Le bon service.</h2>
            </div>
            <p>
              À Créances, Pierre et Marie Bachelet vous accueillent et vous orientent
              vers la solution adaptée à vos besoins, votre budget et votre logement.
            </p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <span className="service-icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={phoneHref}>Nous consulter <ArrowRight size={17} aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section expertise-section" id="services">
        <div className="shell expertise-grid">
          <div className="expertise-photo-wrap">
            <img
              className="expertise-photo"
              src="https://images.pexels.com/photos/31725399/pexels-photo-31725399.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Technicien intervenant sur un appareil électroménager"
              loading="lazy"
            />
            <div className="experience-badge">
              <strong>Depuis 2007</strong>
              <span>à vos côtés</span>
            </div>
          </div>
          <div className="expertise-copy">
            <p className="eyebrow dark">Bien plus qu'un magasin</p>
            <h2>Un service local, avant comme après votre achat.</h2>
            <p className="intro">
              Chez Bachelet PM, vous ne repartez pas simplement avec un carton.
              Vous bénéficiez d'un accompagnement humain et d'un service après-vente
              proche de chez vous.
            </p>
            <div className="benefit-list">
              <article>
                <span><Truck aria-hidden="true" /></span>
                <div><h3>Livraison à domicile</h3><p>Votre appareil est acheminé avec soin jusqu'à votre logement.</p></div>
              </article>
              <article>
                <span><PackageCheck aria-hidden="true" /></span>
                <div><h3>Installation & mise en service</h3><p>Une installation propre pour profiter sereinement de votre équipement.</p></div>
              </article>
              <article>
                <span><Wrench aria-hidden="true" /></span>
                <div><h3>Dépannage & réparation</h3><p>Intervention à domicile ou prise en charge dans notre atelier de Créances.</p></div>
              </article>
            </div>
            <a className="button button-dark" href={phoneHref}>
              Demander un renseignement <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="local-section">
        <div className="shell local-inner">
          <div>
            <p className="eyebrow">Le choix de la proximité</p>
            <h2>Des conseils utiles.<br />Un numéro qui répond.<br />Une équipe sur place.</h2>
          </div>
          <div className="local-cards">
            <article><BadgeCheck aria-hidden="true" /><strong>Conseils personnalisés</strong><p>Une recommandation adaptée à votre usage, sans jargon inutile.</p></article>
            <article><Headphones aria-hidden="true" /><strong>Un contact direct</strong><p>Pierre et Marie Bachelet vous accueillent et suivent votre demande.</p></article>
            <article><ShieldCheck aria-hidden="true" /><strong>SAV de proximité</strong><p>Un atelier local et une solution concrète en cas de panne.</p></article>
            <article><HomeIcon aria-hidden="true" /><strong>Ancrage local</strong><p>Une entreprise installée à Créances depuis plus de 18 ans.</p></article>
          </div>
        </div>
      </section>

      <section className="section store-section" id="magasin">
        <div className="shell store-grid">
          <div className="store-photo-wrap">
            <img
              className="store-photo"
              src="https://images.pexels.com/photos/7936636/pexels-photo-7936636.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Espace lumineux présentant des équipements pour la maison"
              loading="lazy"
            />
          </div>
          <div className="store-panel">
            <p className="eyebrow dark">Bachelet PM à Créances</p>
            <h2>Venez nous rencontrer</h2>
            <div className="store-line">
              <MapPin aria-hidden="true" />
              <div><small>Adresse</small><strong>40 Rue de la Manche</strong><span>ZI PACO III · 50710 Créances</span></div>
            </div>
            <div className="store-line">
              <Phone aria-hidden="true" />
              <div><small>Téléphone</small><a href={phoneHref}>{phoneDisplay}</a></div>
            </div>
            <div className="hours" id="horaires">
              <div><span>Lundi – Vendredi</span><strong>9h00–12h00 · 14h00–19h00</strong></div>
              <div><span>Samedi</span><strong>9h00–12h00 · 14h00–18h00</strong></div>
              <div><span>Dimanche</span><strong>Fermé</strong></div>
            </div>
            <div className="store-actions">
              <a className="button button-primary" href={mapsHref} target="_blank" rel="noreferrer">
                <MapPin size={18} aria-hidden="true" /> Obtenir l'itinéraire
              </a>
              <a className="text-call" href={phoneHref}><Phone size={17} aria-hidden="true" /> Appeler</a>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="shell closing-inner">
          <div><p>Une panne ou un projet d'équipement ?</p><h2>Parlons-en simplement.</h2></div>
          <a className="button button-light" href={phoneHref}><Phone size={19} aria-hidden="true" /> {phoneDisplay}</a>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <div className="footer-brand">
            <a className="brand footer-logo" href="#accueil">
              <span className="brand-mark" aria-hidden="true">BP</span>
              <span className="brand-copy"><strong>BACHELET PM</strong><small>ÉLECTROMÉNAGER · CRÉANCES</small></span>
            </a>
            <p>Vente, livraison, installation, dépannage et réparation d'électroménager, image et son.</p>
          </div>
          <div><h3>Navigation</h3><a href="#univers">Nos univers</a><a href="#services">Nos services</a><a href="#magasin">Le magasin</a></div>
          <div><h3>Coordonnées</h3><a href={phoneHref}>{phoneDisplay}</a><span>40 Rue de la Manche<br />50710 Créances</span></div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 SARL BACHELET P M · SIREN 498 210 392</span>
          <span>Photos d'illustration : <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">Pexels</a></span>
        </div>
      </footer>

      <div className="mobile-actions" aria-label="Actions rapides">
        <a href={phoneHref}><Phone aria-hidden="true" /> Appeler</a>
        <a href={mapsHref} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> Itinéraire</a>
      </div>

      {showDemoNotice && (
        <div className="demo-overlay" onMouseDown={() => setShowDemoNotice(false)}>
          <section
            className="demo-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-notice-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="demo-close"
              type="button"
              onClick={() => setShowDemoNotice(false)}
              aria-label="Fermer la fenêtre"
            >
              <X aria-hidden="true" />
            </button>
            <span className="demo-kicker">Une maquette Localia</span>
            <h2 id="demo-notice-title">Bonjour Pierre et Marie,</h2>
            <p>
              Ce site a été conçu à titre de démonstration, spécialement pour
              Bachelet PM. Il n&apos;a pas vocation à rester en ligne sous cette forme.
            </p>
            <p>
              Dites-moi si vous souhaitez qu&apos;on le mette en place pour de bon,
              avec votre propre nom de domaine, par exemple <strong>bachelet-pm.fr</strong>.
            </p>
            <div className="demo-actions">
              <a
                className="button button-primary"
                href="mailto:gestion.localia@gmail.com?subject=Bachelet%20PM%20-%20le%20site%20vous%20pla%C3%AEt%20%3F"
              >
                Écrire à Thibaut <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="demo-offers" href="https://localiapro.fr/" target="_blank" rel="noreferrer">
                Découvrir les offres Localia
              </a>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
