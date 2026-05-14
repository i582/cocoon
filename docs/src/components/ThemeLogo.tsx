export function ThemeLogo() {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <img
        src="https://cocoon.org/img/cocoon-favicon-32x32.png"
        alt="Cocoon"
        width={20}
        height={20}
        className="h-5 w-5 shrink-0"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="text-[1.05rem] font-semibold tracking-tight text-fd-foreground">
          Cocoon
        </span>
        <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-fd-muted-foreground">
          by Telegram
        </span>
      </span>
    </span>
  );
}
