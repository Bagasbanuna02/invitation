/* eslint-disable @typescript-eslint/no-unused-vars */
// app/users/page.tsx
import prisma from "@/lib/prisma";

// async function getUsers() {
//   const users = await prisma.user.findMany();
//   return users;
// }

export default async function UsersPage() {
  // const users = await getUsers();
  return (
    <div>
      <h1>Users</h1>
      <pre>{JSON.stringify("user", null, 2)}</pre>
    </div>
  );
}
