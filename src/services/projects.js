export const getProjects = () => {
  return [
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1562704517/Screen_Shot_2019-06-19_at_11.22.42_AM.png',
      title: 'Dragon Age API',
      subtitle: 'Open Source API that provides character information from the BioWare series.',
      funFact: 'I was blocked from the fan wiki site after making too many requests while scraping data. VPNs FTW.',
      why: 'I was excited to bring my nerd love of video games together with my geeky love of code.',
      new: false,
      github: 'https://github.com/paigeegorry/dragon-age-api',
      site: 'https://dragon-age-api.herokuapp.com',
      tech: 'Express, Node, MongoDB, Node-HTML-Parser'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1558546077/Screen_Shot_2019-05-22_at_10.27.23_AM.png',
      title: 'Last Airbender API',
      subtitle: 'Fetch your favorite Last Airbender character info from these seven routes!',
      funFact: 'This was the first API I ever built. It was beta-tested by Alchemy Code Lab students.',
      why: 'APIs are a great resource for folx learning how to code. I was disinterested in many of the options out there, so decided to create my own!',
      new: false,
      github: 'https://github.com/paigeegorry/last-airbender-api',
      site: 'https://last-airbender-api.herokuapp.com',
      tech: 'Express, Node, MongoDB, Node-HTML-Parser'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1554070205/Screen_Shot_2019-03-31_at_2.55.53_PM.png',
      title: 'Q Bot',
      subtitle: 'Slack bot that adds student questions to real time database.',
      funFact: 'As a TA at Alchemy Code Lab, I was able to use this app and build more features on the job.',
      why: 'To streamline the process of asking and responding to questions in realtime for instructors and teaching assistants at Alchemy Code Lab.',
      new: false,
      github: 'https://github.com/team-q/q-bot-sandbox',
      site: 'https://qbot.alchemycodelab.io/',
      tech: 'Firestore, Slack API, Firebase, ReactJS, React Hooks, Google Cloud Functions'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552866457/Screen_Shot_2019-03-17_at_4.46.50_PM.png',
      title: 'SimAlchemy',
      subtitle: 'A choose your own code school adventure for the command line.',
      funFact: 'First learned about circular dependencies with this project.',
      why: 'To build empathy for code school instructors and to add a little humor and visual interest to a backend project.',
      new: false,
      github: 'https://github.com/team-sailboat/SimAlchemy',
      site: 'https://sim-alchemy.herokuapp.com/',
      tech: 'Node.js, MongoDB, Express, Jest'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552870581/Screen_Shot_2019-03-17_at_5.53.41_PM.png',
      title: 'Are You A Wizard?',
      subtitle: 'An interactive Harry-Potter-themed personality quiz where you can learn your wizarding world fate from start to finish!',
      funFact: 'This was my first ever project I built on a team of three. We built this in four days at Alchemy Code Lab.',
      why: 'To combine all of the different personality quizzes into one story, so users didn\'t have to waste too much time.',
      new: false,
      github: 'https://github.com/Team-8-ball/team-8-ball.github.io',
      site: 'https://team-8-ball.github.io/',
      tech: 'HTML, CSS, JavaScript'
    }
  ]
};
