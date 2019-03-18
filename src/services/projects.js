export const getProjects = () => {
  return Promise.all([
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552866457/Screen_Shot_2019-03-17_at_4.46.50_PM.png',
      title: 'SimAlchemy',
      subtitle: 'A choose your own code school adventure for the command line.',
      github: 'https://github.com/team-sailboat/SimAlchemy',
      site: 'https://sim-alchemy.herokuapp.com/',
      tech: 'Node.js, MongoDB, Express, Jest'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552864945/Screen_Shot_2019-03-17_at_4.21.24_PM.png',
      title: 'Marvel SuperSearch',
      subtitle: 'An interactive search for your favorite Marvel Superheroes!',
      github: 'https://github.com/two-time-fool/urban-waffle',
      site: 'https://xenodochial-spence-f58fd4.netlify.com/',
      tech: 'React, Redux, Marvel API'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552870581/Screen_Shot_2019-03-17_at_5.53.41_PM.png',
      title: 'Are You A Wizard?',
      subtitle: 'An interactive Harry-Potter-themed personality quiz where you can learn your wizarding world fate from start to finish!',
      github: 'https://github.com/Team-8-ball/team-8-ball.github.io',
      site: 'https://team-8-ball.github.io/',
      tech: 'HTML, CSS, JavaScript'
    },
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552866813/Screen_Shot_2019-03-17_at_4.52.18_PM.png',
      title: 'Planet Photo Album',
      subtitle: 'First static React build showcasing some pretty planets from our lovely galaxy. (Yes, I included Pluto.)',
      github: 'https://github.com/paigeegorry/photo-album',
      site: 'https://vigilant-stonebraker-f8104c.netlify.com/',
      tech: 'React, CSS'
    }
  ]);
};
