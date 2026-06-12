import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import logoImg from "@/assets/image.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logoImg} alt="Pro Technology" className="h-12 w-auto bg-white rounded-md p-1" />
            <div className="font-extrabold text-xl">PRO TECHNOLOGY</div>
          </div>
          <p className="text-xs text-primary-foreground/75 leading-relaxed">
            Mfg. of all types of Molds like Plastic Injection Mold, Dip Molding Parts, Rubber Compression molding parts, Plastic Injection Molding Components, Sheet Metal parts & Entire Packaging solutions.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="p-2 rounded-md bg-white/10 hover:bg-brand transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="p-2 rounded-md bg-white/10 hover:bg-brand transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="#" className="p-2 rounded-md bg-white/10 hover:bg-brand transition-colors"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/" className="hover:text-brand">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand">About Us</Link></li>
            <li><Link to="/products" className="hover:text-brand">Products</Link></li>
            <li><Link to="/certificates" className="hover:text-brand">Certificates</Link></li>
            <li><Link to="/career" className="hover:text-brand">Career</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Industries</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li>Automotive</li>
            <li>Electrical & Telecom</li>
            <li>Packaging Solutions</li>
            <li>Construction</li>
            <li>Agriculture</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-xs text-primary-foreground/75">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-brand flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-white">Unit 1 & 2:</span>
                Plot No. G1-606, RIICO Ind. Area Khushkhera, Tapukara, Rajasthan - 301707
              </div>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-brand flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-white">Unit 3:</span>
                Plot No. 103, Sector 7, IMT Manesar, Haryana - 122051
              </div>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 text-brand flex-shrink-0" />
              <span>+91 97118 59853 (T R Mishra)</span>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 text-brand flex-shrink-0" />
              <span>protechnology49@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Pro Technology. All Rights Reserved.</p>
          <p>Designed for VM Solutiions .</p>
        </div>
      </div>
    </footer>
  );
}
