import { motion } from 'framer-motion'
import { useState } from 'react'
import QRCode from 'qrcode.react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Copy, Check, Share2 } from 'lucide-react'

export default function QRSection() {
  const [copied, setCopied] = useState(false)
  const websiteUrl = window.location.href

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(websiteUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            Share with Friends
          </h2>
          
          <Card className="rounded-2xl shadow-lg border-0 bg-card">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Share2 className="text-amber-600" size={24} />
                Share Our Website
              </CardTitle>
              <CardDescription>
                Scan the QR code or copy the link to share MENAA with others
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex flex-col items-center space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-4 bg-white rounded-xl shadow-inner"
              >
                <QRCode
                  value={websiteUrl}
                  size={200}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="M"
                  includeMargin={true}
                />
              </motion.div>
              
              <div className="w-full max-w-md space-y-3">
                <div className="p-3 bg-muted rounded-lg text-center">
                  <p className="text-sm text-muted-foreground break-all font-mono">
                    {websiteUrl}
                  </p>
                </div>
                
                <Button
                  onClick={copyToClipboard}
                  variant={copied ? "default" : "outline"}
                  className="w-full rounded-xl"
                  disabled={copied}
                >
                  {copied ? (
                    <>
                      <Check size={16} className="mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} className="mr-2" />
                      Copy Link
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
