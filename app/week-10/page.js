"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="m-5 bg-indigo-300 p-2">
      <header>
        <h1 className="text-center text-3xl font-bold">Shopping List</h1>
      </header>
      {/* conditional rendering - if the user is not signed in show sign in, otherwise show welcome*/}
      {user ? (
        <div className="flex-col text-center">
          <p>Welcome {user.displayName}!</p>
          <p>{user.email}</p>
          <div className="flex justify-center">
            <img src={user.photoURL} className="w-10 h-10" />
          </div>
          <Link href="/week-9/shopping-list/">
            {/* Go to Shopping List */}
            <button
              type="button"
              className="text-lg bg-blue-600 text-white p-2 rounded-md m-2 hover:bg-slate-400"
            >
              Shopping List
            </button>
          </Link>
          <button
            type="button"
            className="text-lg bg-blue-600 text-white p-2 rounded-md hover:bg-slate-400"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex justify-center mt-3">
          <button
            type="button"
            className="text-lg bg-blue-600 text-white p-2 rounded-md hover:bg-blue-400 "
            onClick={handleSignIn}
          >
            Sign In with GitHub
          </button>
        </div>
      )}
    </main>
  );
}
