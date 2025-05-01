"use client";

import Image from "next/image";

// Using inline SVG icons instead of react-icons to avoid dependency issues
const socialIcons = {
  facebook: (size = 20) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.6 2h-13.2c-1.9 0-3.4 1.5-3.4 3.4v13.2c0 1.9 1.5 3.4 3.4 3.4h6.6v-9h-3v-3h3v-1.5c0-3 1.8-4.5 4.5-4.5 1.3 0 2.4 0.1 2.7 0.1v3.1h-1.8c-1.5 0-1.8 0.7-1.8 1.8v1h3.6l-0.5 3h-3.1v9h3.6c1.9 0 3.4-1.5 3.4-3.4v-13.2c0-1.9-1.5-3.4-3.4-3.4z" />
    </svg>
  ),
  twitter: (size = 20) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" />
    </svg>
  ),
  instagram: (size = 20) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.668.01 2.985.058 4.04.045.976.207 1.504.344 1.856.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.984-.01 4.04-.058.976-.045 1.504-.207 1.856-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.352.3-.88.344-1.856.048-1.055.058-1.372.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.684-.566-1.15-.748-.352-.137-.88-.3-1.856-.344-1.055-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.669a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
    </svg>
  ),
  linkedin: (size = 20) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  ),
  youtube: (size = 20) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2 3.14 3.14 0 00.71 1.36 2.86 2.86 0 001.49.78 45.18 45.18 0 008.4.31c3.77.25 7.39.12 11.17-.31a2.89 2.89 0 001.53-1.1 2.86 2.86 0 00.61-1.57 78.06 78.06 0 00.21-8.43zm-12.5 6.84v-7l6.32 3.5z" />
    </svg>
  ),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/main-logo.webp"
                alt="PT ALIM RUGI TEKNOLOGI"
                width={120}
                height={35}
                className="mr-2 object-contain"
                priority={false}
                sizes="120px"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Mitra teknologi terpercaya untuk solusi digital modern yang
              membantu bisnis Anda berkembang.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Kunjungi halaman Facebook PT ALIM RUGI TEKNOLOGI"
              >
                {socialIcons.facebook()}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Kunjungi Twitter PT ALIM RUGI TEKNOLOGI"
              >
                {socialIcons.twitter()}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Kunjungi Instagram PT ALIM RUGI TEKNOLOGI"
              >
                {socialIcons.instagram()}
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Kunjungi LinkedIn PT ALIM RUGI TEKNOLOGI"
              >
                {socialIcons.linkedin()}
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Kunjungi kanal YouTube PT ALIM RUGI TEKNOLOGI"
              >
                {socialIcons.youtube()}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-white">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Kembali ke beranda"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Tentang PT ALIM RUGI TEKNOLOGI"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Layanan yang kami tawarkan"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Portofolio proyek kami"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Daftar harga layanan"
                >
                  Harga
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Hubungi kami"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-white">Layanan Kami</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Layanan pembuatan website"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Layanan pembuatan aplikasi mobile"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Layanan desain grafis"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Solusi dan teknologi AI"
                >
                  AI Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Pelatihan IT profesional"
                >
                  IT Training
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-white">Kontak</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                KP. Karamat RT 003 RW 010, Desa Ciherang, Kecamatan Cianjur,
                Kabupaten Cianjur, Provinsi Jawa Barat.
              </li>
              <li>
                <a
                  href="tel:+6282216987541"
                  className="hover:text-white transition-colors"
                  aria-label="Telepon PT ALIM RUGI TEKNOLOGI di nomor +62 822-1698-7541"
                >
                  +62 822-1698-7541
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@alimrugi.id"
                  className="hover:text-white transition-colors"
                  aria-label="Kirim email ke PT ALIM RUGI TEKNOLOGI di alamat info@alimrugi.id"
                >
                  info@alimrugi.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} PT ALIM RUGI TEKNOLOGI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#terms"
                className="text-sm text-gray-400 hover:text-white transition-colors"
                aria-label="Baca Syarat dan Ketentuan"
              >
                Syarat dan Ketentuan
              </a>
              <a
                href="#privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
                aria-label="Baca Kebijakan Privasi"
              >
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
