import { NAME, YEAR } from "./utils";

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © {`${NAME}`}.<a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
};
