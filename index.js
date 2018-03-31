NorrisBot.prototype.run = function () {
  NorrisBot.super_.call(this, this.settings);

  this.on('start', this._onStart);
  this.on('message', this._onMessage);
};