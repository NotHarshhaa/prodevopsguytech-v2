import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export function PrivacyDialog() {
  return (
    <Dialog>
      <DialogTrigger className="hover:text-foreground transition-colors font-medium">
        Privacy Policy
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] bg-background/95 backdrop-blur-xl border border-border/20 rounded-2xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight leading-tight">Privacy Policy</DialogTitle>
          <DialogDescription className="text-muted-foreground leading-relaxed">
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-2 tracking-wide">1. Information We Collect</h3>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, including but not limited to:
              </p>
              <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 tracking-wide">2. How We Use Your Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 tracking-wide">3. Information Sharing</h3>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 tracking-wide">4. Data Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 tracking-wide">5. Your Rights</h3>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 tracking-wide">6. Contact Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@prodevopsguytech.com
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
} 