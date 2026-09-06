import { Link } from "@tanstack/react-router";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-20 md:px-10">
      <div className="mx-auto grid max-w-[110rem] gap-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl tracking-[0.4em] uppercase">Aeryn</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Transformative garments, made in Britain. One piece, held in two forms.
          </p>
        </div>

        <div>
          <p className="eyebrow">Index</p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/shop" className="hover:text-foreground">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/story" className="hover:text-foreground">
                Story
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/account" className="hover:text-foreground">
                Account
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Information</p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/legal/$page" params={{ page: "privacy" }} className="hover:text-foreground">
                Privacy
              </Link>
            </li>
            <li>
              <Link
                to="/legal/$page"
                params={{ page: "shipping" }}
                className="hover:text-foreground"
              >
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/legal/$page" params={{ page: "returns" }} className="hover:text-foreground">
                Returns
              </Link>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[110rem] border-t border-border pt-10">
        <Newsletter compact />
        <p className="mt-10 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          © {new Date().getFullYear()} Aeryn Atelier, London
        </p>
      </div>
    </footer>
  );
}
