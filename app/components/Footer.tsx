import { motion } from "motion/react";
import { Github, Linkedin, Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <motion.a
              href="https://github.com/AdrianRydin"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-muted-foreground hover:text-[#e94560] transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/adrian-r-a31343177/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-muted-foreground hover:text-[#e94560] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>

          <div className="text-center text-muted-foreground">
            <p className="flex items-center gap-2 flex-wrap justify-center">
              <span>{currentYear} Made with</span>
              <Heart className="w-4 h-4 fill-[#e94560] text-[#e94560]" />
              <span>by Adrian Rydin</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
