"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const response = await fetch(
        "/api/platform/users"
      );

      const result =
        await response.json();

      if (result.success) {
        setUsers(
          result.users || []
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050407] p-8 text-white">

      <div className="mb-10">

        <div className="text-5xl font-bold">
          Platform Users
        </div>

        <div className="mt-3 text-zinc-400">
          Tenant identity and role
          management infrastructure
        </div>

      </div>

      {loading ? (
        <div className="text-zinc-500">
          Loading users...
        </div>
      ) : users.length === 0 ? (
        <div className="rounded-3xl border border-white/[0.06] bg-white/5 p-6 md:p-10 text-zinc-400">
          No users found.
        </div>
      ) : (
        <div className="grid gap-6">

          {users.map((user) => (
            <div
              key={user.id}
              className="rounded-3xl border border-white/[0.06] bg-white/5 p-6 backdrop-blur-md"
            >

              <div className="flex items-start justify-between">

                <div>

                  <div className="text-2xl font-bold">
                    {user.full_name}
                  </div>

                  <div className="mt-2 text-zinc-400">
                    {user.email}
                  </div>

                </div>

                <div className="rounded-full border border-[#d7b66a]/30 bg-[#d7b66a]/10 px-4 py-2 text-sm text-[#f4dfaa]">
                  {user.role}
                </div>

              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">

                <Info
                  label="Status"
                  value={user.status}
                />

                <Info
                  label="Phone"
                  value={user.phone}
                />

                <Info
                  label="Tenant ID"
                  value={user.tenant_id}
                />

                <Info
                  label="Created"
                  value={new Date(
                    user.created_at
                  ).toLocaleDateString()}
                />

              </div>

            </div>
          ))}

        </div>
      )}

    </main>
  );
}

function Info({
  label,
  value,
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-black/30 p-4">

      <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </div>

      <div className="mt-2 text-white">
        {String(value || "-")}
      </div>

    </div>
  );
}
