import studentsList from '../../data/students.json';

import { InfoCard } from '../../components/InfoCard';

import './style.scss';

export function Home() {
  return (
    <>
      <main>
        <div className="container">
          <h1>My First PR</h1>
          <p>
            One of the best ways to learn Git is to contribute to Open Source projects. And this
            project exists to help entry-level developers to make their first contribution to a
            project. Open a PR and add your card!
          </p>

          <div className="card__grid">
            {studentsList.map((student, index) => (
              <InfoCard
                key={index}
                profileImageUrl={student.profileImageUrl}
                selfDescription={student.selfDescription}
                name={student.name}
                title={student.title}
                linkedinUrl={student.linkedinUrl}
                githubUrl={student.githubUrl}
              />
            ))}
          </div>
        </div>
      </main>
      <footer>
        <p className="container">
          Made with 🖤 by <a href="https://github.com/isadfrn">@isadfrn</a>
        </p>
      </footer>
    </>
  );
}
