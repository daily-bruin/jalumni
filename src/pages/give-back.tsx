import * as React from 'react';
import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
import styled from 'react-emotion';

export default function GiveBackPage() {
  return (
    <>
      <Header />
      <PageContainer title="Give Back">
        <h2>Volunteer</h2>
        <p>
          Thank you for your interest in joining our alumni committee! Alumni
          involvement is critical in our successful launch and we welcome your
          skills and help in building the infrastructure of our alumni network
          and in presenting the first-ever Daily Bruin Alumni Reunion on October
          5, 2018 in Westwood.
        </p>
        <p>Here are the projects we are working on:</p>
        <h3>2018 Reunion and 2019 Centennial</h3>
        <p>
          From invitation logistics to coordination with the Daily Bruin alumni
          director, we are looking for help in staging our kickoff events. We
          are particularly interested in Los Angeles-based volunteers.
        </p>
        <h3>Alumni Network Development</h3>
        <p>
          Help us build the long-term components of the alumni group, including
          drafting bylaws and preparing for the election of the first board and
          officers. Subcommittees will work on developing specific program
          components, including mentorship, fundraising and the directory.
        </p>
        <p>
          Please send Tanner Walters an email at{' '}
          <a href="mailto:alumni@dailybruin.com">alumni@dailybruin.com</a> if
          you are interested in getting involved.
        </p>

        <h2>Daily Bruin Support Fund</h2>
        <p>
          Gifts to UCLA can be{' '}
          <a href="https://giving.ucla.edu/campaign/?&amount=100&OrgType=C&OrgNum=11300&fund=63255O&_ga=2.58053994.1514647085.1524156737-359345519.1518723170">
            earmarked to this discretionary fund
          </a>{' '}
          for the Daily Bruin. Donations go through Student Affairs for UCLA
          Student Media within Associated Students UCLA.
        </p>
        <p>
          If your workplace matches gifts, please reach out so we can help
          facilitate your specific situation. Most corporate matches are
          eligible with this fund.
        </p>

        <h2>UCLA Student Media</h2>
        <p>
          The Daily Bruin is part of UCLA Student Media, which is overseen by
          the UCLA Communications Board. The Board is the independent publisher,
          manager and operator of the media organizations.
        </p>
        <p>
          All donations to the Daily Bruin or its sister media organizations are
          tax-deductible since UCLA Student Media is an independent, nonprofit
          organization with 501(c)(3) status. For your records, the federal
          taxpayer ID number for gifts to UCLA Student Media or any of its
          specific publications is 95-1777979.
        </p>
        <p>
          Please visit{' '}
          <a href="https://donate.uclastudentmedia.com/">this website</a> to
          give directly to the Daily Bruin.
        </p>

        <h2>Long-term Endowment</h2>
        <p>
          An endowment to supplement the Daily Bruin Support Fund would act as a
          means to help alleviate cuts The Bruin has undergone to its
          professional staff and operations. This would help provide academic
          scholarships for student journalists. Please contact Lawrence Ma (‘95)
          at <a href="mailto:lorenzoma@me.com">lorenzoma@me.com</a> with
          interest or questions.
        </p>

        <h2>Other Ways to Help</h2>
        <p>
          There is a wealth of journalistic and professional knowledge among
          Daily Bruin alumni. Please reach out to the DB alumni director if
          you’re interested in getting involved through workshops, critiques or
          other valuable journalistic services. We are committed to promoting
          news literacy on campus and in the greater Los Angeles community and
          always appreciate in-kind donations to help further that cause.
        </p>
      </PageContainer>
    </>
  );
}
