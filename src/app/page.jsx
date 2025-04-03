import styles from "./page.module.css";
import Header from "../app/components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import InteractionBar from "./components/InteractionBar";
import CategoriesSection from "./components/CategoriesSection";
import NewsLetterSection from "./components/NewsLetterSection";
import FeaturedMemeCard from "./components/featuredMemes";

export default function Home() {
  // Array de dados dos memes para serem passados como props
  const memes = [
    {
      id: 1,
      title: "Programador às 3 da manhã",
      description:
        "Quando o código finalmente funciona depois de 5 horas debugando",
      image: "https://i.imgur.com/JbIMvq2.jpg",
      likes: 452,
      comments: 87,
      author: "DevMaster",
      authorAvatar: "https://i.pravatar.cc/150?img=11",
      category: "Programação",
    },
    {
      id: 2,
      title: "Vida de estudante",
      description: "Eu entrando na prova sem estudar",
      image: "https://i.imgur.com/DpEHvFs.jpg",
      likes: 231,
      comments: 56,
      author: "StudyGuru",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
      category: "Escola",
    },
    {
      id: 3,
      title: "Reunião que poderia ser um e-mail",
      description: "Minha cara depois de 2 horas de reunião",
      image: "https://i.imgur.com/a1hJwXc.jpg",
      likes: 631,
      comments: 103,
      author: "CorporateJoker",
      authorAvatar: "https://i.pravatar.cc/150?img=13",
      category: "Trabalho",
    },
    {
      id: 4,
      title: "Quando a internet cai",
      description: "POV: Você no meio de uma partida importante",
      image: "https://i.imgur.com/uGdnlGj.jpg",
      likes: 842,
      comments: 152,
      author: "GamerLife",
      authorAvatar: "https://i.pravatar.cc/150?img=14",
      category: "Games",
    },
    {
      id: 5,
      title: "Segunda-feira chegando",
      description: "Ninguém está pronto para isso",
      image: "https://i.imgur.com/aNDyAyC.jpg",
      likes: 753,
      comments: 91,
      author: "WeekendWarrior",
      authorAvatar: "https://i.pravatar.cc/150?img=15",
      category: "Trabalho",
    },
    {
      id: 6,
      title: "Minha vida amorosa",
      description: "Expectativa vs Realidade",
      image: "https://i.imgur.com/gMy6q9Y.jpg",
      likes: 523,
      comments: 78,
      author: "RomanceExpert",
      authorAvatar: "https://i.pravatar.cc/150?img=16",
      category: "Relacionamentos",
    },
  ];


  // Array de criadores em destaque
  const topCreators = [
    {
      id: 1,
      name: "MemeQueen",
      avatar: "https://i.pravatar.cc/150?img=23",
      followers: "245K",
      bio: "Criando memes que fazem seu dia melhor!",
    },
    {
      id: 2,
      name: "FunnyGuy42",
      avatar: "https://i.pravatar.cc/150?img=24",
      followers: "189K",
      bio: "Especialista em memes de programação e gatos",
    },
    {
      id: 3,
      name: "LaughFactory",
      avatar: "https://i.pravatar.cc/150?img=25",
      followers: "327K",
      bio: "Se não te fizer rir, devolvo seu tempo!",
    },
  ];

  // Categorias de memes
  

  // Memes em destaque
  const featuredMemes = [
    {
      id: 8,
      title: "O código em produção",
      image: "https://i.imgur.com/aVy8tFB.jpg",
      author: "DevHumor",
      category: "Programação",
      trending: true,
    },
    {
      id: 9,
      title: "Modo escuro vs Modo claro",
      image: "https://i.imgur.com/YnGsVzS.jpg",
      author: "UIDesigner",
      category: "Tecnologia",
      trending: true,
    },
    {
      id: 10,
      title: "POV: Aula online",
      image: "https://i.imgur.com/4MigGYQ.jpg",
      author: "ZoomExpert",
      category: "Escola",
      trending: false,
    },
  ];

  // Eventos próximos

  return (
    <div className={styles.container}>

      {/* COMPONENTE: Header */}

      <Header />

      {/* FIM COMPONENTE: Header */}

      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          {/* COMPONENTE: HeroSection */}

            <HeroSection />

          {/* FIM COMPONENTE: HeroSection */}

          {/* COMPONENTE: CategoriesSection */}

          <CategoriesSection/>
              
          {/* FIM COMPONENTE: CategoriesSection */}

          {/* COMPONENTE: Feed */}
          <section className={styles.feedSection}>
            <div className={styles.feedHeader}>
              <h2 className={styles.sectionTitle}>Memes Populares</h2>
              <div className={styles.feedFilters}>
                <button className={`${styles.filterButton} ${styles.active}`}>
                  Recentes
                </button>
                <button className={styles.filterButton}>Mais curtidos</button>
                <button className={styles.filterButton}>Mais comentados</button>
              </div>
            </div>

            <div className={styles.feedGrid}>
              {/* Aqui mapeamos os memes do array para criar múltiplos cards */}
              {memes.map((meme) => (
                // COMPONENTE: MemeCard
                <div key={meme.id} className={styles.memeCard}>
                  <div className={styles.memeCardHeader}>
                    <div className={styles.memeAuthor}>
                      <img src={meme.authorAvatar} alt={meme.author} />
                      <span>{meme.author}</span>
                    </div>
                    <span className={styles.memeCategory}>{meme.category}</span>
                  </div>
                  <img
                    src={meme.image}
                    alt={meme.title}
                    className={styles.memeImage}
                  />
                  <div className={styles.memeContent}>
                    <h3 className={styles.memeTitle}>{meme.title}</h3>
                    <p className={styles.memeDescription}>{meme.description}</p>

                    {/* COMPONENTE: InteractionBar */}
                  
                    <InteractionBar meme={meme}/>

                    {/* FIM COMPONENTE: InteractionBar */}
                  </div>
                </div>
                // FIM COMPONENTE: MemeCard
              ))}
            </div>

            <button className={styles.loadMoreButton}>
              Carregar mais memes
            </button>
          </section>
          {/* FIM COMPONENTE: Feed */}

          {/* COMPONENTE: FeaturedMemesSection */}

              <FeaturedMemeCard featuredMemes={featuredMemes}/>

          {/* FIM COMPONENTE: FeaturedMemesSection */}

          {/* COMPONENTE: CreatorsSection */}
         

          
          {/* FIM COMPONENTE: CreatorsSection */}

          {/* COMPONENTE: NewsletterSection */}

          <NewsLetterSection />
         
          {/* FIM COMPONENTE: NewsletterSection */}
        </div>

        {/* COMPONENTE: Sidebar */}
       
            <Sidebar/>

        {/* FIM COMPONENTE: Sidebar */}
      </div>

      {/* COMPONENTE: Footer */}
    
            <Footer />

      {/* FIM COMPONENTE: Footer */}
    </div>
  );
}
