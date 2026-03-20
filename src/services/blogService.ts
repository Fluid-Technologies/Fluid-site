import { collection, addDoc, serverTimestamp, getDocs, query, limit } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

const MOCK_POSTS = [
  {
    title: "The Future of Workforce Management in Africa",
    slug: "future-workforce-management-africa",
    excerpt: "How digital platforms are transforming how SMEs hire, manage, and pay their teams across the continent.",
    content: `
# The Future of Workforce Management in Africa

The landscape of work in Africa is undergoing a radical transformation. As SMEs continue to be the backbone of the continent's economy, the tools they use to manage their most valuable asset—their people—are evolving from paper-based systems to integrated digital ecosystems.

## The Challenges of Traditional Management

For decades, African SMEs have struggled with:
- **Fragmented Data:** Employee records, payroll, and compliance documents stored in separate, often physical, locations.
- **Verification Gaps:** Difficulty in verifying identity and qualifications, leading to trust issues.
- **Financial Exclusion:** Employees lacking formal records to access credit or savings.

## The Digital Shift

Platforms like Fluide are bridging these gaps by creating a "Golden Record" for every employee. This verified identity follows the worker throughout their career, unlocking benefits that were previously out of reach.

### Key Benefits of Integration:
1. **Instant Payroll:** No more manual bank transfers or cash payments.
2. **Automated Compliance:** Staying on the right side of local labor laws automatically.
3. **Financial Wellness:** Giving employees access to Earned Wage Access (EWA) and savings.

## Conclusion

The future of work in Africa is not just about digitizing existing processes; it's about building a foundation of trust that empowers both businesses and workers to grow together.
    `,
    author: "Fluide Team",
    category: "Workforce Management",
    tags: ["Future of Work", "SMEs", "Digital Transformation"],
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Bridging the Financial Inclusion Gap for Employees",
    slug: "bridging-financial-inclusion-gap",
    excerpt: "Why verified payroll data is the key to unlocking fair credit and savings for millions of African workers.",
    content: `
# Bridging the Financial Inclusion Gap for Employees

Financial inclusion is often discussed at the macro level, but for the individual worker, it's about having the tools to manage daily life and plan for the future.

## The Data Problem

Many African workers are "invisible" to traditional banks. Without a formal credit history or verifiable income records, they are often forced to turn to predatory lenders during emergencies.

## Payroll as a Proxy for Trust

By digitizing payroll, we create a reliable data trail. When an employee is paid through a platform like Fluide, their transaction history becomes a "Seeker Score"—a measure of financial reliability that banks can trust.

### Unlocking New Opportunities:
- **Salary Advances:** Accessing earned wages before payday to cover emergencies.
- **Savings-Backed Loans:** Borrowing against verified savings at fair rates.
- **Micro-Insurance:** Protecting families with affordable, data-driven insurance products.

## The Path Forward

True financial inclusion starts at the workplace. By empowering employers to provide these tools, we are not just improving payroll; we are building a more resilient middle class.
    `,
    author: "Financial Insights",
    category: "Financial Inclusion",
    tags: ["Fintech", "Credit", "Savings", "Africa"],
    imageUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80"
  }
];

export const seedBlogPosts = async () => {
  try {
    const q = query(collection(db, 'blog_posts'), limit(1));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log("Seeding blog posts...");
      for (const post of MOCK_POSTS) {
        await addDoc(collection(db, 'blog_posts'), {
          ...post,
          publishedAt: serverTimestamp()
        });
      }
      console.log("Seeding complete.");
    } else {
      console.log("Blog posts already exist, skipping seed.");
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, 'blog_posts');
  }
};
