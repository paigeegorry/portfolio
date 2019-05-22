export const getProjects = () => {
  return Promise.all([
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1554070205/Screen_Shot_2019-03-31_at_2.55.53_PM.png',
      title: 'Q Bot',
      subtitle: 'Slack bot that adds student questions to real time database.',
      new: false,
      github: 'https://github.com/team-q/q-bot-sandbox',
      site: 'https://qbot.alchemycodelab.io/',
      tech: 'Firestore, Slack API, Firebase, ReactJS, React Hooks, Google Cloud Functions'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1558546077/Screen_Shot_2019-05-22_at_10.27.23_AM.png',
      title: 'Last Airbender API',
      subtitle: 'Fetch your favorite Last Airbender character info from these seven routes!',
      new: true,
      github: 'https://github.com/paigeegorry/last-airbender-api',
      site: 'https://last-airbender-api.herokuapp.com',
      tech: 'Express, Node, MongoDB, Node-HTML-Parser'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552866457/Screen_Shot_2019-03-17_at_4.46.50_PM.png',
      title: 'SimAlchemy',
      subtitle: 'A choose your own code school adventure for the command line.',
      new: false,
      github: 'https://github.com/team-sailboat/SimAlchemy',
      site: 'https://sim-alchemy.herokuapp.com/',
      tech: 'Node.js, MongoDB, Express, Jest'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1557787856/Screen_Shot_2019-05-13_at_3.47.47_PM.png',
      title: 'Hummingbird',
      subtitle: 'Full stack Twitter clone using Auth0 for user authentication.',
      new: false,
      github: 'https://github.com/paigeegorry/devsign',
      site: 'https://hummingbird-gorry.netlify.com',
      tech: 'React, Redux, Node, Express, MongoDB, Auth0'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552864945/Screen_Shot_2019-03-17_at_4.21.24_PM.png',
      title: 'Marvel SuperSearch',
      new: false,
      subtitle: 'Search for your favorite Marvel superhero!',
      github: 'https://github.com/two-time-fool/urban-waffle',
      site: 'https://xenodochial-spence-f58fd4.netlify.com/',
      tech: 'React, Redux, Marvel API'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1557787856/Screen_Shot_2019-05-13_at_3.48.52_PM.png',
      title: 'Spellbook',
      subtitle: 'Explore spells from the Harry Potter series based on type.',
      new: true,
      github: 'https://github.com/paigeegorry/spellbook',
      site: 'https://gorry-spellbook.netlify.com',
      tech: 'React, Redux, Potter API'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1557787858/Screen_Shot_2019-05-13_at_3.49.06_PM.png',
      title: 'Horoscopes',
      subtitle: 'Look up your horoscope for the day, week, month, or year!', 
      new: true,
      github: 'https://github.com/paigeegorry/horoscopes',
      site: 'https://horoscopes.netlify.com',
      tech: 'React, Redux, Horoscope API'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552870581/Screen_Shot_2019-03-17_at_5.53.41_PM.png',
      title: 'Are You A Wizard?',
      subtitle: 'An interactive Harry-Potter-themed personality quiz where you can learn your wizarding world fate from start to finish!',
      new: false,
      github: 'https://github.com/Team-8-ball/team-8-ball.github.io',
      site: 'https://team-8-ball.github.io/',
      tech: 'HTML, CSS, JavaScript'
    }
  ]);
};
