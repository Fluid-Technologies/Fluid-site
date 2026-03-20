import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { BlogPost as BlogPostType } from '../types/blog';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const BlogPost = () => {
  const { language } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        const q = query(collection(db, 'blog_posts'), where('slug', '==', slug), limit(1));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          setPost({ id: doc.id, ...doc.data() } as BlogPostType);
        } else {
          // Fallback or 404
          console.error("Post not found");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const content = {
    notFound: { en: 'Article not found', fr: 'Article non trouvé', pt: 'Artigo não encontrado' },
    backToBlog: { en: 'Back to Blog', fr: 'Retour au blog', pt: 'Voltar ao Blog' },
    backToInsights: { en: 'Back to Insights', fr: 'Retour aux Insights', pt: 'Voltar aos Insights' },
    author: { en: 'Author', fr: 'Auteur', pt: 'Autor' },
    recently: { en: 'Recently', fr: 'Récemment', pt: 'Recentemente' },
    share: { en: 'Share', fr: 'Partager', pt: 'Partilhar' },
    newsletter: {
      title: { en: 'Newsletter', fr: 'Newsletter', pt: 'Boletim Informativo' },
      desc: { en: 'Get the latest workforce insights delivered to your inbox.', fr: 'Recevez les dernières informations sur la main-d\'œuvre dans votre boîte de réception.', pt: 'Receba os últimos insights sobre a força de trabalho na sua caixa de entrada.' },
      placeholder: { en: 'Email address', fr: 'Adresse e-mail', pt: 'Endereço de e-mail' },
      subscribe: { en: 'Subscribe', fr: 'S\'abonner', pt: 'Subscrever' }
    },
    relatedTopics: { en: 'Related Topics', fr: 'Sujets Connexes', pt: 'Tópicos Relacionados' }
  };

  if (loading) {
    return (
      <div className="pt-40 pb-24 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-navy/10 border-t-brand-cyan rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-3xl font-bold text-brand-navy mb-4">{content.notFound[language]}</h2>
        <Link to="/blog" className="text-brand-cyan font-bold hover:underline">{content.backToBlog[language]}</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Article Header */}
      <section className="py-24 bg-brand-navy/[0.02] border-b border-brand-navy/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-brand-navy/40 hover:text-brand-navy font-bold uppercase tracking-widest text-[10px] mb-8 transition-colors group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            <span>{content.backToInsights[language]}</span>
          </Link>
          
          <div className="mb-8">
            <span className="bg-brand-navy text-brand-cyan text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-brand-navy/60 font-medium">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-navy/10 rounded-full flex items-center justify-center overflow-hidden">
                <User className="w-5 h-5 text-brand-navy/40" />
              </div>
              <div>
                <div className="text-brand-navy font-bold">{post.author}</div>
                <div className="text-xs">{content.author[language]}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-brand-navy/20" />
              <span>{post.publishedAt?.toDate ? format(post.publishedAt.toDate(), 'MMMM dd, yyyy') : content.recently[language]}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-16">
            <article className="max-w-3xl">
              <div className="rounded-[40px] overflow-hidden mb-12 shadow-2xl shadow-brand-navy/5">
                <img 
                  src={post.imageUrl || `https://picsum.photos/seed/${post.slug}/1200/800`} 
                  alt={post.title}
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="prose prose-lg max-w-none prose-headings:text-brand-navy prose-p:text-brand-navy/80 prose-a:text-brand-cyan">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
              
              <div className="mt-16 pt-16 border-t border-brand-navy/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-navy/40">{content.share[language]}</span>
                    <div className="flex items-center space-x-2">
                      <button className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all">
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all">
                        <Facebook className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.map(tag => (
                      <span key={tag} className="bg-brand-navy/5 text-brand-navy/60 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-12">
              <div className="bg-brand-navy/[0.02] p-8 rounded-[32px] border border-brand-navy/5">
                <h4 className="text-lg font-bold text-brand-navy mb-6">{content.newsletter.title[language]}</h4>
                <p className="text-sm text-brand-navy/60 mb-6 leading-relaxed">
                  {content.newsletter.desc[language]}
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder={content.newsletter.placeholder[language]}
                    className="w-full bg-white border border-brand-navy/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                  />
                  <button className="w-full bg-brand-navy text-white py-3 rounded-xl font-bold text-sm hover:bg-brand-navy/90 transition-all">
                    {content.newsletter.subscribe[language]}
                  </button>
                </form>
              </div>

              <div>
                <h4 className="text-lg font-bold text-brand-navy mb-6">{content.relatedTopics[language]}</h4>
                <div className="flex flex-wrap gap-2">
                  {['Workforce', 'Fintech', 'Africa', 'Payroll', 'Compliance', 'HR Tech'].map(topic => (
                    <Link 
                      key={topic}
                      to={`/blog?search=${topic}`}
                      className="px-4 py-2 rounded-xl bg-white border border-brand-navy/5 text-xs font-bold text-brand-navy/60 hover:border-brand-cyan hover:text-brand-navy transition-all"
                    >
                      {topic}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
