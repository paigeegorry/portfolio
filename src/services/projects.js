export const getProjects = () => {
  return Promise.all([
    {
      img: 'https://res.cloudinary.com/dkrup6iyl/image/upload/v1552801785/screenshot.png',
      title: 'SimAlchemy',
      subtitle: 'A choose your own code school adventure for the command line.',
      github: 'https://github.com/team-sailboat/SimAlchemy',
      site: 'https://sim-alchemy.herokuapp.com/',
      tech: 'Node.js, MongoDB, Express, Jest'
    }
  ]);
};
