import React from 'react'
import { GoogleIcon } from '@/lib/Domain/Presentation/Icon'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative flex-1 overflow-x-hidden antialiased w-full flex h-full min-h-screen items-center justify-center px-10 lg:px-20">
      <section className="flex items-center justify-between space-x-0 md:space-x-16">
        <div className="flex w-full max-w-sm shrink-0 md:max-w-xs lg:max-w-sm flex-col rounded-lg shadow-lg">
          <div className="flex w-full rounded-t-lg bg-primary-linear-gradient p-1.5 opacity-80"></div>
          <div className="flex w-full max-w-lg flex-col rounded-b-lg bg-white/30 px-7 py-6 backdrop-blur-xl">
            <Image
              alt="Milestone Logo"
              width={100}
              height={100}
              src="/resources/svg/milestone-logo.svg"
            />
            <div className="mt-10 text-lg lg:text-xl font-medium text-gray-700">
              Get started with your invitations
            </div>
            <div className="mt-2 text-xs lg:text-sm text-gray-700">
              Create a milestone celebration and send your invites to your family and friends.
            </div>
            <div className="mb-14 mt-8 space-y-3">
              <div className="rounded-lg bg-primary-linear-gradient p-[2.5px]">
                <button className="flex w-full items-center justify-center space-x-2 rounded-md bg-gradient-to-r from-purple-50 to-orange-50 p-3 text-sm font-medium">
                  <GoogleIcon className="h-5 w-5" />
                  <span>Sign in to Google</span>
                </button>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="w-full bg-gray-700 p-[0.5px]"></div>
                <span className="mx-3 text-sm text-gray-700">or</span>
                <div className="w-full bg-gray-700 p-[0.5px]"></div>
              </div>
              <button className="flex w-full items-center justify-center space-x-2 rounded-lg border-[3px] border-gray-400 bg-white/30 p-3 text-sm font-medium text-gray-500 backdrop-blur-lg">
                <EnvelopeIcon className="h-5 w-5" />
                <span>Sign in with email</span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative hidden md:h-[550px] max-w-md lg:max-w-xl flex-col items-center md:flex md:shrink-0">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl lg:text-5xl text-gray-500">
              Celebrate{' '}
              <span className="bg-primary-linear-gradient bg-clip-text font-bold text-transparent">
                milestones
              </span>{' '}
              with the people <span className="block">you love.</span>
            </h1>
            <div className="font-medium text-gray-500">
              <p>Reaching your people effortlessly.</p>
              <p>Invitations made easy.</p>
            </div>
          </div>
          <Image
            width={420}
            height={420}
            alt="Landing Photo"
            className="absolute bottom-0 -scale-x-100 transform"
            src="/resources/svg/landing-cover-photo.svg"
          />
        </div>
      </section>
      <div className="absolute inset-0 -z-10 bg-[url('/resources/svg/landing-bg.svg')] bg-cover bg-fixed bg-center"></div>
    </main>
  )
}
