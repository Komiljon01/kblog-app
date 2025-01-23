import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dot, Home, Mail, Phone, Send } from "lucide-react";
import Link from "next/link";

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative flex min-h-[40vh] flex-col items-center justify-end">
        <h2 className="section-title mt-2 text-center font-creteRound text-4xl">
          <span>Contact</span>
        </h2>

        <div className="mt-4 flex items-center gap-1">
          <Home className="h-4 w-4" />
          <Link
            href={"/"}
            className="opacity-90 hover:underline hover:opacity-100"
          >
            Home
          </Link>
          <Dot />
          <p className="text-muted-foreground">Contact</p>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-x-4 gap-y-20 max-md:grid-cols-1">
        <div className="flex flex-col">
          <h1 className="font-creteRound text-4xl">Contact KBlog</h1>
          <p className="mt-2 text-muted-foreground">
            I am here to help and answer any question you might have. I look
            forward to hearing from you
          </p>

          <div className="mt-12 flex items-center gap-3">
            <Mail className="h-4 w-4" />
            <p className="text-sm">info@kblog.ac</p>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <Phone className="h-4 w-4" />
            <p className="text-sm">+98 02 296 4902</p>
          </div>
        </div>

        <div>
          <h1 className="mb-2 font-creteRound text-4xl">Contact form</h1>
          <div className="flex flex-col space-y-3">
            <Textarea
              className="h-32 resize-none"
              placeholder="Ask question or just say Hi"
            />
            <Input placeholder="Email address" />
            <Input placeholder="Your name here" />
            <Button className="w-fit" size={"lg"}>
              <span>Send</span>
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
