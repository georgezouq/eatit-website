import type { LocaleDictionary } from "@/i18n/dictionaries";

const HairwowFooter = ({ dictionary }: { dictionary: LocaleDictionary }) => {
  const navLinks = [
    { href: "#home", label: dictionary.nav.home },
    { href: "#why", label: dictionary.nav.features },
    { href: "#pricing", label: dictionary.nav.pricing },
    { href: "#download", label: dictionary.nav.download },
  ];

  const socials = [
    { href: "https://www.tiktok.com/", label: "TikTok" },
    { href: "https://www.instagram.com/", label: "Instagram" },
    { href: "https://www.youtube.com/", label: "YouTube" },
  ];

  return (
    <footer className="hairwow-footer">
      <div className="container">
        <div className="footer-content">
          <a className="footer-logo" href="#hero">
            HairWow
          </a>
          <p className="footer-tagline">{dictionary.footer.tagline}</p>
          <nav className="footer-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-socials">
            <span>{dictionary.footer.socialsLabel}</span>
            <ul>
              {socials.map((social) => (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-meta">{dictionary.footer.rights}</div>
      </div>
    </footer>
  );
};

export default HairwowFooter;
