import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { BlogPost } from '../types/blog';
import { format } from 'date-fns';
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const Blog = () => {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const q = query(collection(db, 'blog_posts'), orderBy('publishedAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      setPosts(postsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching blog posts:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const content = {
    hero: {
      title: { en: 'Insights for the', fr: 'Des idées pour la', pt: 'Insights para a' },
      highlight: { en: 'Modern Workforce.', fr: 'Main-d\'œuvre Moderne.', pt: 'Força de Trabalho Moderna.' },
      desc: {
        en: 'Expert perspectives on workforce management, financial inclusion, and the future of work in Africa.',
        fr: 'Perspectives d\'experts sur la gestion des effectifs, l\'inclusion financière et l\'avenir du travail en Afrique.',
        pt: 'Perspetivas de especialistas sobre a gestão da força de trabalho, inclusão financeira e o futuro do trabalho em África.'
      }
    },
    search: {
      placeholder: { en: 'Search articles...', fr: 'Rechercher des articles...', pt: 'Pesquisar artigos...' }
    },
    loading: { en: 'Loading articles...', fr: 'Chargement des articles...', pt: 'A carregar artigos...' },
    noResults: {
      title: { en: 'No articles found', fr: 'Aucun article trouvé', pt: 'Nenhum artigo encontrado' },
      desc: { en: 'Try adjusting your search or filter to find what you\'re looking for.', fr: 'Essayez d\'ajuster votre recherche ou votre filtre pour trouver ce que vous cherchez.', pt: 'Tente ajustar a sua pesquisa ou filtro para encontrar o que procura.' }
    },
    readMore: { en: 'Read Article', fr: 'Lire l\'article', pt: 'Ler Artigo' }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(78,242,216,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              {content.hero.title[language]} <span className="text-brand-cyan">{content.hero.highlight[language]}</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              {content.hero.desc[language]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-white border-b border-brand-navy/5 sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    selectedCategory === category 
                      ? 'bg-brand-navy text-white' 
                      : 'bg-brand-navy/5 text-brand-navy/60 hover:bg-brand-navy/10'
                  }`}
                >
                  {category === 'All' ? (language === 'en' ? 'All' : language === 'fr' ? 'Tous' : 'Todos') : category}
                </button>
              ))}
            </div>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-navy/30" />
              <input
                type="text"
                placeholder={content.search.placeholder[language]}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-brand-navy/5 border-none rounded-full pl-12 pr-6 py-3 focus:ring-2 focus:ring-brand-cyan/20 transition-all text-brand-navy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-brand-navy/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse bg-white rounded-[32px] h-[500px] border border-brand-navy/5" />
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-[32px] border border-brand-navy/5 overflow-hidden group hover:shadow-2xl hover:shadow-brand-navy/5 transition-all flex flex-col h-full"
                >
                  <Link to={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={post.imageUrl || `https://picsum.photos/seed/${post.slug}/800/500`} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-navy text-brand-cyan text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center space-x-4 text-xs text-brand-navy/40 mb-4 font-bold uppercase tracking-widest">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.publishedAt?.toDate ? format(post.publishedAt.toDate(), 'MMM dd, yyyy') : 'Recently'}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-cyan transition-colors leading-tight">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-brand-navy/60 mb-8 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {post.tags?.map(tag => (
                        <span key={tag} className="text-[10px] font-bold text-brand-navy/40 uppercase tracking-wider flex items-center">
                          <Tag className="w-2 h-2 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-brand-navy font-bold group/link"
                    >
                      <span>{content.readMore[language]}</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-brand-cyan" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="w-20 h-20 bg-brand-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-brand-navy/20" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-2">{content.noResults.title[language]}</h3>
              <p className="text-brand-navy/60">{content.noResults.desc[language]}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
