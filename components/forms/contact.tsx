"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { contactSchema } from "@/lib/validation";
import { toast } from "sonner";
import { useState } from "react";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      message: "",
      email: "",
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsLoading(true);

    const telegramBotID = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API;
    const telegramChatID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    const promise = fetch(
      `https://api.telegram.org/bot${telegramBotID}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "cache-control": "no-cache",
        },
        body: JSON.stringify({
          chat_id: telegramChatID,
          text: `Name: ${values.name} \nEmail: ${values.email} \nMessage: ${values.message}`,
        }),
      },
    )
      .then(() => form.reset())
      .finally(() => setIsLoading(false));

    toast.promise(promise, {
      loading: "Loading...",
      success: "Successfully sent!",
      error: "Something went wrong!",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="h-32 resize-none"
                  placeholder="Ask question or just say Hi"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email address"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Your name here"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-fit"
          size={"lg"}
          type="submit"
          disabled={isLoading}
        >
          <span>Send</span>
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
