import Ember from 'ember';

function parse(body, mentions) {
  let parsedBody = '';
  let currentPosition = 0;

  mentions.forEach((mention) => {
    let indices = Ember.get(mention, 'indices');
    let startIndex = indices[0];
    let endIndex = indices[1];

    parsedBody += body.slice(currentPosition, startIndex);
    parsedBody += _generateLink(mention);
    currentPosition = endIndex + 1;
  });

  parsedBody += body.slice(currentPosition, body.length);

  return parsedBody;
}

function _generateLink(mention) {
  let user = Ember.get(mention, 'user');
  let userId = Ember.get(user, 'id');
  let username = Ember.get(user, 'username');
  return `<a href="/users/${userId}">@${username}</a>`;
}

export { parse };
