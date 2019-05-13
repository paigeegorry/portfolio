export const getProjects = () => {
  return Promise.all([
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1554070205/Screen_Shot_2019-03-31_at_2.55.53_PM.png',
      title: 'Q Bot',
      subtitle: 'A Slack bot that adds student questions to Cloud Firestore collections.',
      why: 'During class, one-off questions from students are common - where diagnosing an issue can be a significant investment in TA time. We wanted to build a Slack app that allows students to add their name and concern to a TA queue (database). TA’s can login and "claim" each concern listed in the database to orient themselves to the problems in advance, and peruse the database entries to see which students need the most help (and which topics are the most confusing).',
      github: 'https://github.com/team-q/q-bot-sandbox',
      site: 'https://qbot.alchemycodelab.io/',
      tech: 'Cloud Firestore, Slack API, Firebase, ReactJS, React Hooks, Google Cloud Functions'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552866457/Screen_Shot_2019-03-17_at_4.46.50_PM.png',
      title: 'SimAlchemy',
      subtitle: 'A choose your own code school adventure for the command line.',
      why: 'Fun and silly way to build empathy for the tough jobs of code school instructors, who balance the time and health of their cohorts!',
      github: 'https://github.com/team-sailboat/SimAlchemy',
      site: 'https://sim-alchemy.herokuapp.com/',
      tech: 'Node.js, MongoDB, Express, Jest'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1557787856/Screen_Shot_2019-05-13_at_3.47.47_PM.png',
      title: 'Hummingbird',
      subtitle: 'Twitter clone!',
      why: 'An homage to Twitter, Hummingbird is a full stack Twitter clone designed with quirky user stories in mind.',
      github: 'https://github.com/paigeegorry/devsign',
      site: 'https://hummingbird-gorry.netlify.com',
      tech: 'React, Redux, Node, Express, MongoDB, Auth0'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552864945/Screen_Shot_2019-03-17_at_4.21.24_PM.png',
      title: 'Marvel SuperSearch',
      why: 'Simple third-party API app to search for pictures of your favorite Marvel superhero by keyword.',
      github: 'https://github.com/two-time-fool/urban-waffle',
      site: 'https://xenodochial-spence-f58fd4.netlify.com/',
      tech: 'React, Redux, Marvel API'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1557787856/Screen_Shot_2019-05-13_at_3.48.52_PM.png',
      title: 'Spellbook',
      why: 'Using the Potter API, this front-end application allows users to filter spells by type and view details about their ability.',
      github: 'https://github.com/paigeegorry/spellbook',
      site: 'https://gorry-spellbook.netlify.com/',
      tech: 'React, Redux, Potter Api'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1557787858/Screen_Shot_2019-05-13_at_3.49.06_PM.png',
      title: 'Horoscopes',
      why: 'This front-end app allows users to check their horoscope based on their zodiac sign for the current day, week, month, and year.',
      github: 'https://github.com/paigeegorry/horoscopes',
      site: 'https://horoscopes.netlify.com',
      tech: 'React, Redux, Horoscope API'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552866813/Screen_Shot_2019-03-17_at_4.52.18_PM.png',
      title: 'Planet Photo Album',
      subtitle: 'First static React build showcasing some pretty planets from our lovely galaxy. (Yes, I included Pluto.)',
      github: 'https://github.com/paigeegorry/photo-album',
      site: 'https://vigilant-stonebraker-f8104c.netlify.com/',
      tech: 'React, CSS'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552870581/Screen_Shot_2019-03-17_at_5.53.41_PM.png',
      title: 'Are You A Wizard?',
      subtitle: 'An interactive Harry-Potter-themed personality quiz where you can learn your wizarding world fate from start to finish!',
      github: 'https://github.com/Team-8-ball/team-8-ball.github.io',
      site: 'https://team-8-ball.github.io/',
      tech: 'HTML, CSS, JavaScript'
    }
  ]);
};
