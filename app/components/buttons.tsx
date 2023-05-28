'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'loading') {
    return (
        <div
          className='w-8 h-8 rounded-full mr-2 border-2 border-indigo-600 float-right mt-[-3px]'
        />
    );
  }

  if (status === 'authenticated') {
    return (
      <Link href={`/dashboard`}>
        <Image
          src={session.user?.image ?? '/mememan.webp'}
          width={28}
          height={28}
          alt="Your Name"
          className='w-8 h-8 rounded-full mr-2 border-2 border-indigo-600 float-right mt-[-3px]'
        />
      </Link>
    );
  }

  return <button className='rounded-full pl-4 pt-1.5 pr-4 pb-1.5 bg-indigo-600 text-white active:scale-95 float-right text-sm hover:bg-indigo-700 mt-[-3px]' onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}