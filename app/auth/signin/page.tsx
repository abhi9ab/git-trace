"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Pageloader from "@/components/ui/Pageloader";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useState } from "react";
import loader, { AtSign, Eye, EyeOff } from "lucide-react";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const { toast } = useToast();
  const [Loading, setLoading] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: SignInFormData) => {
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      toast({
        title: "Login Failed",
        description: result.error,
      });
    } else if (result?.ok) {
      router.push("/");
      toast({
        description: "Login successful",
      });

      setTimeout(() => {
        router.refresh();
      }, 100);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
<<<<<<< HEAD
      <div className="w-full max-w-md p-6 bg-white dark:bg-black border rounded-lg">
        <h2 className="text-xl font-bold text-[#425893] dark:text-blue-500 text- mb-4">
=======
      <div className="w-full max-w-md p-6 bg-white dark:bg-[#141414] border rounded-lg">
        <h2 className="text-xl font-bold text-[#5469a2] text- mb-4">
>>>>>>> 659a15b4cdcdc3ff2a2e14f904eb60480af67792
          Login into git-trace
        </h2>
        <div className="border-b dark:border-gray-700 border-gray-300 pb-4 mb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
<<<<<<< HEAD
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="w-full"
                      />
=======
                    <FormLabel className="dark:text-white text-black">
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                        <Input
                          placeholder="Email"
                          {...field}
                          className="w-full dark:text-black"
                        />
                        <div className="ml-2 text-gray-500 focus:outline-none">
                          <AtSign />
                        </div>
                      </div>
>>>>>>> 659a15b4cdcdc3ff2a2e14f904eb60480af67792
                    </FormControl>
                    <FormDescription>
                      This is the email address you will use to sign in.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-between">
                      <p className="dark:text-white text-black">Password</p>
                      <Link href="/auth/forgot-password/email">
                        Forgot Password?
                      </Link>
                    </FormLabel>
                    <FormControl>
<<<<<<< HEAD
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                        className="w-full"
                      />
=======
                      <div className="flex items-center">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          {...field}
                          className="w-full dark:text-black"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="ml-2 text-gray-500 focus:outline-none"
                        >
                          {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                      </div>
>>>>>>> 659a15b4cdcdc3ff2a2e14f904eb60480af67792
                    </FormControl>
                    <FormDescription>
                      Enter your password to log in.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-[#425893] text-white hover:text-black"
              >
                {Loading ? <Pageloader /> : "Login"}
              </Button>
            </form>
          </Form>
        </div>
        <div className="flex justify-end border-gray-300">
          <Link
            href="/auth/signup"
            className="text-sm text-[#425893] dark:text-blue-500 hover:text-gray-600 underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
