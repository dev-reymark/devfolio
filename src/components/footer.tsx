import { data } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              © {new Date().getFullYear()} {data.name}. All rights reserved.
            </p>
          </div>

          <ul className="flex items-center gap-4 mt-2 sm:mt-0">
            {Object.values(data.contact.social).map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  className="text-gray-600 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className={`w-5 h-5 ${social.className}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
