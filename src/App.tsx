import { Route, Routes } from 'react-router';

import { Layout } from '@/components/Layout';
import { About } from '@/pages/About';
import { Blog } from '@/pages/Blog';
import { CV } from '@/pages/CV';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { Projects } from '@/pages/Projects';

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
