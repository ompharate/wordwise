"use client";
import { ButtonGroup } from "../components/ButtonGroup";
import DashHeader from "../components/DashboardNavbar";
import { useAuth, useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      const saveUser = async () => {
        try {
          const response = await fetch(
            "http://localhost:4000/api/user/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                firstName: user.firstName,
                lastName: user.lastName,
              }),
            }
          );

          const data = await response.json();
          if (response.ok) {
            console.log("User information saved:", data);
          } else {
            console.error("Error saving user information:", data.message);
          }
        } catch (error) {
          console.error("Error making API call:", error);
        }
      };

      saveUser();
    }
  }, [isSignedIn, user]);

  return (
    <div>
      <DashHeader />
      <ButtonGroup />
      {children}
    </div>
  );
}
