export default function Header() {
  return (
    <div className="flex flex-col gap-2 text-center">
      <h1 className="text-3xl font-bold lg:text-4xl">rantboard</h1>
      <p className="text-muted-foreground text-sm">
        shout it, whisper it, or vent it out. <b>totally anonymous.</b>
      </p>
    </div>
  );
}
