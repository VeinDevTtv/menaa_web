import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function About() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            About Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Our Mission</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                  Building bridges across cultures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
                  The Middle East & North Africa Association at De Anza College is dedicated to 
                  fostering cultural understanding, celebrating our rich heritage, and creating 
                  an inclusive space for students from all backgrounds. We organize cultural events, 
                  educational workshops, and community service projects that connect our diverse 
                  student body while promoting awareness of MENA cultures, traditions, and contemporary issues.
                </p>
              </CardContent>
            </Card>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-amber-200 via-orange-200 to-red-200 dark:from-amber-800 dark:via-orange-800 dark:to-red-800 flex items-center justify-center shadow-lg">
                <div className="text-6xl">🕌</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
