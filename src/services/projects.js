export const getProjects = () => {
  return Promise.all([
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552801785/screenshot.png',
      title: 'SimAlchemy',
      subtitle: 'A choose your own code school adventure for the command line.',
      github: 'https://github.com/team-sailboat/SimAlchemy',
      site: 'https://sim-alchemy.herokuapp.com/',
      tech: 'Node.js, MongoDB, Express, Jest'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552802094/Screen_Shot_2019-03-16_at_10.54.02_PM.png',
      title: 'Are You A Wizard?',
      subtitle: 'An interactive Harry-Potter-themed personality quiz where you can learn your wizarding world fate from start to finish!',
      github: 'https://github.com/Team-8-ball/team-8-ball.github.io',
      site: 'https://team-8-ball.github.io/',
      tech: 'HTML, CSS, JavaScript'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552802520/screenshot-1.png',
      title: 'Planet Photo Album',
      subtitle: 'First static React build showcasing some pretty planets from our lovely galaxy. (Yes, I included Pluto.)',
      github: 'https://github.com/paigeegorry/photo-album',
      site: 'https://vigilant-stonebraker-f8104c.netlify.com/',
      tech: 'React, CSS'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552803871/Screen_Shot_2019-03-16_at_11.05.25_PM.png',
      title: 'Markdownly',
      subtitle: 'A markdown editor that allows users to add, edit, and review markdown files.',
      github: 'https://github.com/team-paige-kristin-dee/markdownly',
      site: 'https://quirky-agnesi-ac843b.netlify.com/',
      tech: 'React, Redux, CSS, Jest'
    }
  ]);
};
