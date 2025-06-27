import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export function TermsDialog() {
  return (
    <Dialog>
      <DialogTrigger className="hover:text-foreground transition-colors">
        Terms of Service
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Terms of Service</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h3>
              <p className="text-muted-foreground">
                By accessing and using ProDevOpsGuy Tech services, you accept and agree to be bound by the terms and conditions of this agreement.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">2. Description of Services</h3>
              <p className="text-muted-foreground">
                We provide various DevOps and cloud computing educational resources, including but not limited to:
              </p>
              <ul className="list-disc list-inside mt-2 text-muted-foreground">
                <li>Online courses and tutorials</li>
                <li>Project templates and resources</li>
                <li>Community forums and discussions</li>
                <li>Technical documentation and guides</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">3. User Responsibilities</h3>
              <p className="text-muted-foreground">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside mt-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">4. Intellectual Property</h3>
              <p className="text-muted-foreground">
                All content, features, and functionality of our services are owned by ProDevOpsGuy Tech and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">5. Limitation of Liability</h3>
              <p className="text-muted-foreground">
                ProDevOpsGuy Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">6. Changes to Terms</h3>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">7. Contact Information</h3>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at:
                <br />
                Email: legal@prodevopsguytech.com
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
} 