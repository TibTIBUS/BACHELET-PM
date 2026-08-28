import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bachelet PM | Électroménager, dépannage et réparation à Créances",
  description:
    "Bachelet PM à Créances : vente d'électroménager, TV et Hi-Fi, livraison, installation, dépannage et réparation à domicile ou en atelier.",
  keywords: [
    "électroménager Créances",
    "dépannage électroménager Manche",
    "réparation électroménager Créances",
    "magasin télévision Créances",
    "Bachelet PM",
  ],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
