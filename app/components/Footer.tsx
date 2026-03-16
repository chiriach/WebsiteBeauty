import Image from 'next/image';

export default function Border() {
  return (
    <footer className="bg-[#002147] py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          {/* Left Side - Logo and Social Media */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <a href="/" className="inline-block transition-transform duration-300 hover:scale-105 w-fit">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </a>

            {/* Social Media Logos */}
            <div className="flex gap-6 items-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Image
                  src="/pagani.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </a>
            </div>

            {/* Simple text */}
            <p className="text-white text-sm">
              © alexandramarcut.ro – All Rights Reserved
            </p>
          </div>

          {/* Center - Contact Information */}
          <div className="flex flex-col gap-4 bg-[#0d1929] p-6 rounded-lg">
            <div className="text-white">
              <h3 className="font-semibold text-[#b87333] mb-4 text-lg">Contact Info</h3>
              <p className="text-sm mb-4">
                <strong>Contact:</strong><br />
                <a href="tel:+40769057471" className="hover:text-[#b87333] transition-colors">
                  +40 769 057 471
                </a>
              </p>
              <p className="text-sm mb-4">
                <strong>Adresă:</strong><br />
                Strada Fântânele 1
              </p>
              <p className="text-sm mb-6">
                <strong>Email:</strong><br />
                alexandra.blo093@gmail.com
              </p>
              
            </div>
          </div>

          {/* Right Side - Google Maps */}
          <div className="overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1690.5143512233128!2d23.55290459126055!3d46.768074015142204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490f75650e8477%3A0xdf4e7f45bb2613b!2sMAST%20Beauty%20Salon!5e1!3m2!1sen!2sro!4v1772697309068!5m2!1sen!2sro"
              width="400"
              height="250"
              style={{ border: 0, minHeight:0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}