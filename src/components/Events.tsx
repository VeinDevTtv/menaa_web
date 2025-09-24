import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, MapPin } from 'lucide-react'

const events = [
  {
    title: 'Cultural Night Showcase',
    date: 'October 15, 2025',
    time: '7:00 PM - 9:30 PM',
    location: 'De Anza Student Center',
    description: 'Join us for an evening celebrating MENA cultures with traditional music, dance performances, and authentic cuisine from across the region.',
    color: 'from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20'
  },
  {
    title: 'Middle Eastern Cooking Workshop',
    date: 'October 28, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Campus Kitchen',
    description: 'Learn to cook traditional dishes like hummus, falafel, and baklava. All skill levels welcome! Ingredients and recipes provided.',
    color: 'from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20'
  },
  {
    title: 'MENA Heritage Panel Discussion',
    date: 'November 10, 2025',
    time: '3:00 PM - 4:30 PM',
    location: 'Virtual & In-Person',
    description: 'Connect with MENA professionals and alumni as they share their journeys, career paths, and cultural experiences in Silicon Valley.',
    color: 'from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20'
  }
]

export default function Events() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className={`h-full rounded-2xl shadow-lg border-0 bg-gradient-to-br ${event.color} group-hover:shadow-xl transition-all duration-300`}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={16} className="mr-2 text-amber-600" />
                        <span>{event.date}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock size={16} className="mr-2 text-orange-600" />
                        <span>{event.time}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin size={16} className="mr-2 text-red-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <CardDescription className="text-foreground leading-relaxed">
                      {event.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
