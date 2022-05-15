import Card from "./Card"

const Embed = () => {
  return (
    <Card reverse>
      <h2>TikTok Latest Videos</h2>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@bndclothings"
        data-unique-id="bndclothings"
        data-embed-type="creator"
        style={{ maxWidth: "720px", minWidth: "288px" }}
      >
        <section>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@bndclothings?refer=creator_embed"
          >
            @bndclothings
          </a>
        </section>
      </blockquote>
    </Card>
  )
}

export default Embed
