import React from 'react';
import { Link, graphql } from 'gatsby';
// import dompurify from 'dompurify';
import { CommunityPage } from '../types';
import { ReleaseData } from '../hooks/useReleaseHistory';
import Layout from '../components/Layout';
import '../styles/community-page.scss';

interface Props {
  release?: ReleaseData;
}

interface CommunityProps {
  data: CommunityPage;
}
export default function DownloadPage({ data }: CommunityProps): JSX.Element {
  const title = 'Community Page';
  const description = 'Community page';
  // const commCommData = data.page.html;
  // Commented out temporarly
  // const sanitizer = dompurify.sanitize;
  return (
    <Layout title={title} description={description}>
      <main>
        <div className="container">
          <div className="community-header community">
            <CommmunityHeader />
          </div>
          <div className="sidebar">
            <ul>
              <li className="community-links">
                <Link to="/">Comms</Link>
              </li>
              <li className="community-links">
                <Link to="/">Jobs</Link>
              </li>
              <li className="community-links">
                <Link to="/">Conferences</Link>
              </li>
              <li className="community-links">
                <Link to="/">Community</Link>
              </li>
              <li className="community-links">
                <Link to="/">News</Link>
              </li>
              <li className="community-links">
                <Link to="/">Education</Link>
              </li>
              <li className="community-links">
                <Link to="/">Tooling</Link>
              </li>
              <li className="community-links">
                <Link to="/">Collaboration</Link>
              </li>
            </ul>
          </div>
          <div className="community-content">
            {/* <div dangerouslySetInnerHTML={{ __html: commCommData }} /> */}
          </div>
        </div>
      </main>
    </Layout>
  );
}

const CommmunityHeader = ({ release }: Props): JSX.Element => {
  const nodev = release?.version;
  const npmv = release?.npm;
  const lts = release?.lts;

  return (
    <>
      <div className="community-page__navigation">
        <div>
          HOME /
          <span className="community-page__navigation--active"> community</span>
        </div>
        <div>
          {lts ? 'LATEST LTS' : 'CURRENT'} VERSION {nodev}
        </div>
      </div>
      <div className="community-page__navigation">
        <div className="community-page__navigation--title">
          {' '}
          The Node.js Community{' '}
        </div>
        <div className="community-page__navigation--npm">
          (includes npm {npmv})
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  query {
    page: markdownRemark(fields: { slug: { eq: "community-page" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
