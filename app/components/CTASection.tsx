import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to advance your DevOps journey?</h2>
          <p className="text-muted-foreground mb-8">
            Join our community today and get access to hands-on projects, resources, and a supportive network of DevOps professionals.
          </p>
          <Link href="/community">
            <Button size="lg" className="gap-2">
              Join Community
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 