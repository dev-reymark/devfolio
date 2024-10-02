import { data } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <p className="text-xs text-gray-600 dark:text-neutral-400">
              © {new Date().getFullYear()} {data.name}. All rights reserved.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-4">
            {Object.values(data.contact.social).map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  className="text-xs text-gray-600 dark:text-neutral-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className={social.className} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
