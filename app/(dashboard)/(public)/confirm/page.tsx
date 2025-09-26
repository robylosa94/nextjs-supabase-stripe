export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const success = searchParams.success;

  if (success !== "true") {
    return (
      <h1 className="grid px-8 py-24 place-content-center text-3xl text-bold text-center">
        Qualcosa è andato storto, riprova.
      </h1>
    );
  }

  return (
    <h1 className="grid px-8 py-24 place-content-center text-3xl text-bold text-center">
      Grazie, avrai presto nostro notizie sulla tua email.
    </h1>
  );
}
