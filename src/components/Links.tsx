import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Instagram, MessageCircle, UserPlus, ExternalLink } from 'lucide-react'

const links = [
  {
    title: 'Follow us on Instagram',
    description: 'Stay updated with our latest events and photos',
    icon: Instagram,
    href: 'https://instagram.com/menaa_deanza',
    color: 'from-pink-500 to-purple-600'
  },
  {
    title: 'Join our Discord',
    description: 'Connect with fellow members and get real-time updates',
    icon: MessageCircle,
    href: 'https://discord.gg/menaa-deanza',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    title: 'Member Registration',
    description: 'Become an official member of MENAA',
    icon: UserPlus,
    href: 'https://forms.gle/menaa-registration',
    color: 'from-green-500 to-emerald-600'
  }
]

export default function Links() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            Quick Links
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {links.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Button
                  asChild
                  variant="outline"
                  className="w-full h-auto p-6 rounded-2xl border-2 bg-card hover:shadow-lg transition-all duration-300"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${link.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon size={32} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                    
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
