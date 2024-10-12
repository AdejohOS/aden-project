"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    phone: z.string(),
    subject: z.string(),
    content: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      content: "",
    },
  });

  return (
    <>
      <form action="" className="space-y-3">
        <Form {...form}>
          <div className="flex   items-center w-full gap-2">
            <div className="w-full flex-1">
              <FormField
                control={form.control}
                name="name"
                render={(...field) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input {...field} placeholder="Enter name" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full flex-1">
              <FormField
                control={form.control}
                name="email"
                render={(...field) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input {...field} placeholder="Enter email" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex items-center w-full gap-2">
            <div className="w-full flex-1">
              <FormField
                control={form.control}
                name="phone"
                render={(...field) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input {...field} placeholder="Phone number" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full flex-1">
              <FormField
                control={form.control}
                name="subject"
                render={(...field) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input {...field} placeholder="Subject" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="content"
            render={(...field) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Textarea {...field} placeholder="Type your message here." />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full">Send message</Button>
        </Form>
      </form>
    </>
  );
};

export default ContactForm;
