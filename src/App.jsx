import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import "./style.css"

function App() {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticles(articles);
      console.log("useEffect");
      console.log(articles);
    });
  }, []);
  return (
    <div>
      <Header/>
      <PickUp articles={articles}/>

      <div id="container" className="wrapper">
        <Main/>
        <Aside/>
      </div>

      <Footer/>
    </div>
  );
}
function Header() {
  return(
    <header id="header">
      <h1 className="site-title wrapper">
        <a href="#"><img src="img/logo.svg" alt="Travel Blog" /></a>
      </h1>
      <nav id="navi">
        <ul className="wrapper">
          <li><a href="#">NEW</a></li>
          <li><a href="#">COLUMN</a></li>
          <li><a href="#">SERIES</a></li>
          <li><a href="#">Q&amp;A</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  )
}

function PickUpItem(props) {
  console.log(props.article);
  return(
    <article>
      <img src="img/pickup1.jpg" alt="テキストテキストテキスト"/>
      <h2 className="article-title">{props.article.date}</h2>
      <div className="readmore"><a href={props.article.link}>READ MORE</a></div>
    </article>
  )
}
function PickUp(props) {
  const { articles } = props;
  console.log(typeof(articles));
  return(
    <>
    <div id="pickup" className="wrapper">
      {articles?.map((article)=>{
        return(
          <div key={article.id}>
            <PickUpItem article={article}/>
          </div>
        )
      })}
    </div>
    </>
  )
}

function Main() {
  return(
    <main>
      <article>
        <h2 className="article-title"><a href="#">タイトルテキストテキストテキストテキストテキスト</a></h2>
        <ul className="meta">
          <li><a href="#">2020/01/01</a></li>
          <li><a href="#">カテゴリ1</a></li>
        </ul>
        <a href="#"><img src="img/main1.jpg" alt="テキストテキストテキスト"/></a>
        <p className="text">
          本文テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="readmore"><a href="#">READ MORE</a></div>
      </article>

      <article>
        <h2 className="article-title"><a href="#">タイトルテキストテキストテキストテキストテキスト</a></h2>
        <ul className="meta">
          <li><a href="#">2020/01/01</a></li>
          <li><a href="#">カテゴリ1</a></li>
        </ul>
        <a href="#"><img src="img/main2.jpg" alt="テキストテキストテキスト"/></a>
        <p className="text">
          本文テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="readmore"><a href="#">READ MORE</a></div>
      </article>

      <article>
        <h2 className="article-title"><a href="#">タイトルテキストテキストテキストテキストテキスト</a></h2>
        <ul className="meta">
          <li><a href="#">2020/01/01</a></li>
          <li><a href="#">カテゴリ1</a></li>
        </ul>
        <a href="#"><img src="img/main3.jpg" alt="テキストテキストテキスト"/></a>
        <p className="text">
          本文テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="readmore"><a href="#">READ MORE</a></div>
      </article>
    </main>
  )
}

function Aside() {
  return(
    <aside id="sidebar">
      <section className="author">
        <img src="img/author.jpg" alt="テキストテキストテキスト"/>
        <h3 className="side-title">Name Name</h3>
        <p className="profile">
          プロフィールテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </section>

      <section className="ranking">
        <h3 className="side-title">Ranking</h3>
        <article>
          <a href="#">
            <img src="img/ranking1.jpg" alt="テキストテキストテキスト"/>
            <h4 className="article-title">タイトルテキストテキストテキストテキストテキストテキスト</h4>
          </a>
        </article>

        <article>
          <a href="#">
            <img src="img/ranking2.jpg" alt="テキストテキストテキスト"/>
            <h4 className="article-title">タイトルテキストテキストテキストテキストテキストテキスト</h4>
          </a>
        </article>

        <article>
          <a href="#">
            <img src="img/ranking3.jpg" alt="テキストテキストテキスト"/>
            <h4 className="article-title">タイトルテキストテキストテキストテキストテキストテキスト</h4>
          </a>
        </article>
      </section>

      <section className="archive">
        <h3 className="side-title">Archive</h3>
        <ul>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
          <li><a href="#">XXXX年XX月</a>(XX)</li>
        </ul>
      </section>
    </aside>
  )
}

function Footer() {
  return(
    <footer id="footer">
      <div className="content wrapper">
        <section className="item">
          <h3 className="footer-title">About</h3>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <ul className="about-list">
            <li><a href="#" className="arrow">プロフィール詳細</a></li>
            <li><a href="#" className="arrow">お仕事の依頼</a></li>
            <li><a href="#" className="arrow">お問い合わせ</a></li>
          </ul>
        </section>

        <section className="item">
          <h3 className="footer-title">Menu</h3>
          <ul className="menu-list">
            <li><a href="#">NEW</a></li>
            <li><a href="#">CATEGORY</a></li>
            <li><a href="#">COLUMN</a></li>
            <li><a href="#">SERIES</a></li>
            <li><a href="#">Q&amp;A</a></li>
          </ul>
        </section>

        <section className="item">
          <h3 className="footer-title">Twitter</h3>
          <a className="twitter-timeline" data-height="315" href="https://twitter.com/TwitterJP?ref_src=twsrc%5Etfw">Tweets by TwitterJP</a>
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </section>
      </div>

      <p className="copyright">&copy; Travel &amp; Blog</p>
    </footer>
  )
}

  export default App;
