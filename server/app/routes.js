import tty from 'tty';

export default function() {
  //this.use('/_/users', user);
  //this.use('/_/cards', card);
  //this.use('/_/games', game);

  this.use(/\/_.*/i, (req, res) => res.status(404).json({}));
};
