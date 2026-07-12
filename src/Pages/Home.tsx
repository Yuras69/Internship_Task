const Home = () => {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
        Welcome home
      </p>
      <h1 className="font-heading text-4xl font-bold text-foreground sm:text-6xl">
        Build your next route with confidence.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        A cleaner home screen gives visitors a clear starting point while keeping the
        layout simple and easy to extend.
      </p>
    </section>
  )
}

export default Home
