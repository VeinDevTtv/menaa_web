import { motion } from 'framer-motion'
import { Instagram, MessageCircle, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              MENAA at De Anza
            </h3>
            <p className="text-background/70 mt-2">
              Connecting cultures, building community.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://instagram.com/menaa_deanza"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Instagram size={24} className="text-background" />
            </motion.a>
            
            <motion.a
              href="https://discord.gg/menaa-deanza"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <MessageCircle size={24} className="text-background" />
            </motion.a>
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-background/30 mx-auto" />
          
          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-background/60 text-sm">
              © 2025 Middle East & North Africa Association at De Anza College
            </p>
            <p className="text-background/50 text-xs flex items-center justify-center">
              Made with <Heart size={14} className="mx-1 text-red-400" /> for our community
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
