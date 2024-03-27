import { Toolbar } from '@/components/toolbar';

export default function HomePage() {
  return (
    <main className="relative flex min-h-svh flex-col items-center">
      <div className="flex w-full max-w-5xl flex-col items-stretch gap-20 p-5 md:pt-12">
        <h1 className="text-xl font-semibold">UI Laboratory</h1>
      </div>
      <Toolbar className="absolute bottom-5 left-1/2 -translate-x-1/2" />
    </main>
  );
}
