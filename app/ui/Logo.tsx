/**
 * A logo. Might be used to return to the front page.
 * @returns A Bookly logo
 */

export default function Logo() {
  return (
  <div className="text-center bg-transparent p-2">
    <h1 className="text-3xl font-serif">
      <img
        src="/boolky.png"
        width="320"
        height="320"
        className="inline size-12 m-1"
        alt="Icon of sin"
      />
      BOOKLY
    </h1>
  </div>
  )
}