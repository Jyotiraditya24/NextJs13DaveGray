import type { Metadata } from "next";
import getAllUsers from "../../../lib/getAllUsers";
import Link from "next/link";

export const metaData: Metadata = {
  title: "Users",
  description: "",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </div>
        );
      })}
    </section>
  );
  return content;
}
